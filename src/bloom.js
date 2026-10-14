import gsap from 'gsap';

// A dandelion drawn live in the about frame, in the same ink-on-cobalt treatment the footage had.
// It turns slowly and lets seeds go on the breeze; a pointer moving through the head blows more
// loose. Released seeds regrow, so the head never goes bald. Reduced motion gets one still frame.
const GOLDEN=Math.PI*(3-Math.sqrt(5)),HAIRS=9,MAX_FLYERS=90,NONE=[0,0,0];
const rand=(a,b)=>a+Math.random()*(b-a);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const unit=a=>{const l=Math.hypot(...a);return a.map(n=>n/l);};

// Seeds sit evenly over a sphere (a Fibonacci lattice); the underside stays bare where the stem joins.
function seedHead(count){
  const seeds=[],c=Math.cos(.8),s=Math.sin(.8);
  for(let i=0;i<count;i++){
    const y=1-2*(i+.5)/count;if(y>.8)continue;
    const r=Math.sqrt(1-y*y),a=i*GOLDEN,d=[Math.cos(a)*r,y,Math.sin(a)*r];
    const u=unit(cross(d,Math.abs(y)<.9?[0,1,0]:[1,0,0])),v=cross(d,u);
    const hairs=Array.from({length:HAIRS},(_,k)=>{const p=k/HAIRS*Math.PI*2+rand(-.25,.25);
      const cp=Math.cos(p)*s,sp=Math.sin(p)*s;return [0,1,2].map(j=>d[j]*c+u[j]*cp+v[j]*sp);});
    seeds.push({d,hairs,reach:rand(.9,1.06),grow:1,gone:false,regrowAt:0,sx:0,sy:0,z:1});
  }
  return seeds;
}

export function initBloom(canvas){
  const frame=canvas?.parentElement;
  if(!frame)return;
  // The frame is below the fold on every screen, so the scene is only built once it is a screen away.
  let stop=null;
  const near=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){near.disconnect();stop=buildBloom(canvas,frame);}},{rootMargin:'100% 0px'});
  near.observe(canvas);
  return ()=>{near.disconnect();stop?.();};
}

function buildBloom(canvas,frame){
  // Safari returns no context once its canvas memory budget is spent; the frame then keeps its tinted background.
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  const heads=[
    {at:[.62,.44],size:.47,ink:.9,width:1,phase:0,tilt:-.32,seeds:seedHead(300),stem:[.53,1.06],main:true},
    {at:[.19,.68],size:.2,ink:.3,width:2.4,phase:2.1,tilt:-.2,seeds:seedHead(130),stem:[.24,1.06]},
    {at:[.93,.86],size:.13,ink:.2,width:2.8,phase:4.2,tilt:-.25,seeds:seedHead(90),stem:[.89,1.06]},
  ];
  const main=heads[0],flyers=[];
  let width=0,height=0,dpr=1,sky,grain,clock=0,nextRelease=1,nextDrift=3;

  // Layout size, not the on-screen box: the frame tilts in as it scrolls, and a rotated box would stretch the scene.
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);width=canvas.offsetWidth;height=canvas.offsetHeight;
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    for(const head of heads){head.x=head.at[0]*width;head.y=head.at[1]*height;head.R=head.size*height;}
    sky=ctx.createRadialGradient(width*.62,height*.3,0,width*.62,height*.3,width*.85);
    sky.addColorStop(0,'#fff');sky.addColorStop(1,'#c4c4c4');
    flyers.length=0;
  }
  // A small tile of film grain, laid over every frame at a random offset.
  {
    const tile=document.createElement('canvas');tile.width=tile.height=96;
    const t=tile.getContext('2d'),noise=t.createImageData(96,96);
    const px=noise.data;for(let i=0;i<px.length;i+=4){px[i]=px[i+1]=px[i+2]=Math.random()*255;px[i+3]=28;}
    t.putImageData(noise,0,0);grain=ctx.createPattern(tile,'repeat');
  }

  function release(seed,head,vx,vy){
    if(flyers.length>=MAX_FLYERS)return;
    seed.gone=true;seed.regrowAt=clock+rand(6,11);
    flyers.push({x:seed.sx,y:seed.sy,vx,vy,ang:0,len:head.R*rand(.85,1),ink:.85,width:1,drift:rand(.8,1.2),phase:rand(0,9)});
  }

  // The head's turn and perspective at this instant: `turn` spins a direction, `flat` projects p*k+q to the screen.
  function pose(head){
    const spin=clock*.07+head.phase,cy=Math.cos(spin),sy=Math.sin(spin),cx=Math.cos(head.tilt),sx=Math.sin(head.tilt);
    const R=head.R,ox=head.x+Math.sin(clock*.5+head.phase)*R*.03,oy=head.y,focal=R*5;
    const turn=([x,y,z])=>{const x1=x*cy+z*sy,z1=z*cy-x*sy;return [x1,y*cx-z1*sx,y*sx+z1*cx];};
    const flat=(p,q,k)=>{const x=p[0]*k+q[0],y=p[1]*k+q[1],z=p[2]*k+q[2],s=focal/(focal+z);return [ox+x*s,oy+y*s];};
    return {R,ox,oy,turn,flat};
  }
  // Where each seed's tip is on screen (what the breeze and the pointer act on), without drawing anything.
  function project(head){
    const {R,turn,flat}=pose(head);
    for(const seed of head.seeds){
      if(seed.gone)continue;
      const d=turn(seed.d);[seed.sx,seed.sy]=flat(d,NONE,R*(.12+.5*seed.reach*seed.grow));seed.z=d[2];
    }
  }

  function drawHead(head){
    const {R,ox,oy,turn,flat}=pose(head),none=NONE;
    // Near, middle and far seeds are stroked as three batches, fading and thinning with depth.
    const layers=[new Path2D(),new Path2D(),new Path2D()];
    for(const seed of head.seeds){
      if(seed.gone)continue;
      const d=turn(seed.d),g=seed.grow,stalk=R*(.12+.5*seed.reach*g),hair=R*.3*g;
      const path=layers[d[2]<-.33?0:d[2]<.33?1:2],tip=d.map(n=>n*stalk);
      const [bx,by]=flat(d,none,R*.12),[tx,ty]=flat(tip,none,1);
      path.moveTo(bx,by);path.lineTo(tx,ty);
      for(const h of seed.hairs){const [hx,hy]=flat(turn(h),tip,hair);path.moveTo(tx,ty);path.lineTo(hx,hy);}
      seed.sx=tx;seed.sy=ty;seed.z=d[2];
    }
    ctx.strokeStyle='#000';ctx.lineCap='round';
    // Stem, then the seed head's core, then the seeds from back to front.
    ctx.globalAlpha=head.ink*.85;ctx.lineWidth=Math.max(1.5,R*.04)*head.width**.5;
    ctx.beginPath();ctx.moveTo(head.stem[0]*width,head.stem[1]*height);
    ctx.quadraticCurveTo(head.stem[0]*width,oy+(height-oy)*.45,ox,oy+R*.06);ctx.stroke();
    ctx.fillStyle='#000';ctx.beginPath();ctx.arc(ox,oy,R*.1,0,Math.PI*2);ctx.fill();
    [2,1,0].forEach(i=>{ctx.globalAlpha=head.ink*[.88,.6,.32][i];ctx.lineWidth=head.width*[.9,.75,.6][i];ctx.stroke(layers[i]);});
  }

  function drawFlyer(f){
    const down=[Math.sin(f.ang),Math.cos(f.ang)],stalk=f.len*.5,hair=f.len*.28;
    const ex=f.x+down[0]*stalk,ey=f.y+down[1]*stalk,path=new Path2D();
    path.moveTo(f.x,f.y);path.lineTo(ex,ey);
    for(let k=0;k<11;k++){const a=f.ang+Math.PI+(k/10-.5)*2.4;path.moveTo(f.x,f.y);path.lineTo(f.x+Math.sin(a)*hair,f.y+Math.cos(a)*hair);}
    ctx.globalAlpha=f.ink;ctx.lineWidth=f.width;ctx.stroke(path);
    // The seed itself, a darker fleck at the foot of the stalk.
    ctx.lineWidth=f.width*2.6;ctx.beginPath();ctx.moveTo(ex-down[0]*stalk*.14,ey-down[1]*stalk*.14);ctx.lineTo(ex,ey);ctx.stroke();
  }

  function step(dt){
    clock+=dt;
    for(const head of heads)for(const seed of head.seeds){
      if(seed.gone&&clock>seed.regrowAt){seed.gone=false;seed.grow=0;}
      if(seed.grow<1)seed.grow=Math.min(1,seed.grow+dt/1.6);
    }
    // The breeze lets a seed go every second or so, from the near side of the head.
    if(clock>nextRelease){
      nextRelease=clock+rand(.35,1);
      const loose=main.seeds.filter(seed=>!seed.gone&&seed.grow===1&&seed.z<.1&&seed.sx>main.x-main.R*.2);
      const seed=loose[Math.floor(Math.random()*loose.length)];
      if(seed)release(seed,main,rand(10,30),rand(-25,-5));
    }
    // Now and then an out-of-focus seed drifts across the foreground, for depth.
    if(clock>nextDrift){
      nextDrift=clock+rand(4,8);
      flyers.push({x:-main.R,y:rand(.25,.85)*height,vx:60,vy:-8,ang:0,len:main.R*2.3,ink:.1,width:3.4,drift:1.9,phase:rand(0,9)});
    }
    const gust=.65+.35*Math.sin(clock*.37)+.2*Math.sin(clock*1.3);
    for(let i=flyers.length-1;i>=0;i--){
      const f=flyers[i];
      f.vx+=(42*gust*f.drift-f.vx)*Math.min(1,dt*.8);f.vy+=(-15*f.drift-f.vy)*Math.min(1,dt*.6);
      f.x+=f.vx*dt+Math.sin(clock*1.1+f.phase)*.2;f.y+=f.vy*dt+Math.cos(clock*1.6+f.phase)*.2;
      f.ang+=(-f.vx*.006+Math.sin(clock*1.9+f.phase)*.14-f.ang)*Math.min(1,dt*2);
      const margin=f.len*1.2;
      if(f.x>width+margin||f.y<-margin||f.x<-margin*2||f.y>height+margin)flyers.splice(i,1);
    }
  }

  function draw(){
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.globalAlpha=1;
    ctx.fillStyle=sky;ctx.fillRect(0,0,width,height);
    for(let i=heads.length-1;i>=0;i--)drawHead(heads[i]);
    ctx.strokeStyle='#000';ctx.lineCap='round';
    for(const f of flyers)drawFlyer(f);
    ctx.globalAlpha=1;ctx.fillStyle=grain;ctx.save();ctx.translate(rand(-48,0),rand(-48,0));ctx.fillRect(0,0,width+48,height+48);ctx.restore();
  }

  // Seeds the scene with a few seconds of breeze, so it never opens on a still head. Seed positions are only
  // read when one is let go (the main head, every second or so), so they are worked out just before those
  // steps; the scene is drawn once afterwards.
  function settle(seconds){for(let t=0;t<seconds;t+=1/30){if(clock+1/30>nextRelease)project(main);step(1/30);}}

  resize();settle(4);draw();
  // The observer also fires once on observe(); only a real size change needs a fresh scene.
  const sizes=new ResizeObserver(()=>{
    if(Math.abs(canvas.offsetWidth-width)<1&&Math.abs(canvas.offsetHeight-height)<1)return;
    resize();settle(2);draw();
  });sizes.observe(canvas);
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
    const controller=new AbortController(),{signal}=controller;
    let visible=false,last=null;
    const tick=(time,deltaMs)=>{if(document.hidden)return;step(Math.min(deltaMs/1000,.05));draw();};
    const play=on=>{if(on===visible)return;visible=on;on?gsap.ticker.add(tick):gsap.ticker.remove(tick);};
    const seen=new IntersectionObserver(([entry])=>play(entry.isIntersecting));seen.observe(canvas);
    // A pointer moving fast through the head blows seeds loose along its path; a press scatters a handful.
    const local=event=>{const rect=canvas.getBoundingClientRect();return {x:(event.clientX-rect.left)*width/rect.width,y:(event.clientY-rect.top)*height/rect.height,t:event.timeStamp};};
    frame.addEventListener('pointermove',event=>{
      const now=local(event),prev=last;last=now;
      if(!prev||now.t-prev.t>120)return;
      const dt=Math.max((now.t-prev.t)/1000,1/240),vx=(now.x-prev.x)/dt,vy=(now.y-prev.y)/dt;
      if(Math.hypot(vx,vy)<160)return;
      let blown=0;
      for(const seed of main.seeds){
        if(blown>=12)break;
        if(seed.gone||seed.grow<.8||Math.hypot(seed.sx-now.x,seed.sy-now.y)>main.R*.5)continue;
        release(seed,main,vx*.12+20,vy*.12-10);blown++;
      }
      for(const f of flyers){const near=1-Math.hypot(f.x-now.x,f.y-now.y)/(main.R*.8);if(near>0){f.vx+=vx*.12*near;f.vy+=vy*.12*near;}}
    },{signal});
    frame.addEventListener('pointerleave',()=>{last=null;},{signal});
    frame.addEventListener('pointerdown',event=>{
      const at=local(event);
      main.seeds.filter(seed=>!seed.gone&&Math.hypot(seed.sx-at.x,seed.sy-at.y)<main.R*.7).slice(0,14)
        .forEach(seed=>{const dx=seed.sx-at.x,dy=seed.sy-at.y,l=Math.hypot(dx,dy)||1;release(seed,main,dx/l*90+30,dy/l*90-20);});
    },{signal});
    return ()=>{controller.abort();seen.disconnect();play(false);};
  });
  mm.add('(prefers-reduced-motion: reduce)',()=>draw());
  return ()=>{sizes.disconnect();mm.revert();};
}
