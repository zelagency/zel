// Contact hero field: dots, rings, crosses and capsules drift around their homes, leave the
// headline clear, and part around the pointer. Static when reduced motion is preferred.
const COLORS=['#11121b','#11121b','#b8beca','#b8beca','#d5dae3','#d5dae3','#2a33f5','#4b5cff','#79f24a','#ff4fd8'];

export function initConfetti(canvas,{isReduced}){
  const ctx=canvas?.getContext('2d');
  if(!ctx)return ()=>{};
  const host=canvas.parentElement;
  let shapes=[],w=0,h=0,frame=null,visible=true,pointer={x:-1e4,y:-1e4};
  function build(){
    const rect=host.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);
    w=rect.width;h=rect.height;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(260,Math.round(w*h/7500)),scale=Math.max(.7,Math.min(1.25,w/1400));
    shapes=[];let guard=0;
    while(shapes.length<count&&guard++<count*20){
      const x=Math.random()*w,y=Math.random()*h;
      // Keep an ellipse around the headline clear.
      const ex=(x-w*.5)/(w*.36),ey=(y-h*.48)/(h*.26);
      if(ex*ex+ey*ey<1)continue;
      shapes.push({hx:x,hy:y,x,y,vx:0,vy:0,type:Math.floor(Math.random()*4),size:(6+Math.random()*9)*scale,rot:Math.random()*Math.PI,spin:(Math.random()-.5)*.6,
        color:COLORS[Math.floor(Math.random()*COLORS.length)],phase:Math.random()*Math.PI*2,orbit:4+Math.random()*10});
    }
  }
  function drawShape(s){
    ctx.save();ctx.translate(s.x,s.y);ctx.rotate(s.rot);ctx.fillStyle=s.color;ctx.strokeStyle=s.color;ctx.lineWidth=Math.max(1.6,s.size*.28);ctx.lineCap='round';
    const r=s.size/2;
    if(s.type===0){ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();}
    else if(s.type===1){ctx.beginPath();ctx.arc(0,0,r*.8,0,Math.PI*2);ctx.stroke();}
    else if(s.type===2){ctx.beginPath();ctx.moveTo(-r,-r);ctx.lineTo(r,r);ctx.moveTo(r,-r);ctx.lineTo(-r,r);ctx.stroke();}
    else{ctx.beginPath();ctx.roundRect(-r*1.3,-r*.45,r*2.6,r*.9,r*.45);ctx.fill();}
    ctx.restore();
  }
  function render(now,dt){
    ctx.clearRect(0,0,w,h);
    for(const s of shapes){
      if(dt){
        const tx=s.hx+Math.cos(now/1600+s.phase)*s.orbit,ty=s.hy+Math.sin(now/1900+s.phase)*s.orbit;
        const dx=s.x-pointer.x,dy=s.y-pointer.y,d=Math.hypot(dx,dy)||1,push=d<150?(1-d/150)*900:0;
        s.vx+=((tx-s.x)*14+dx/d*push)*dt;s.vy+=((ty-s.y)*14+dy/d*push)*dt;
        const drag=Math.exp(-7*dt);s.vx*=drag;s.vy*=drag;s.x+=s.vx*dt;s.y+=s.vy*dt;s.rot+=s.spin*dt;
      }
      drawShape(s);
    }
  }
  let last=0;
  function tick(now){
    frame=null;if(!visible||document.hidden)return;
    const dt=last?Math.min((now-last)/1000,.05):0;last=now;
    render(now,dt);frame=requestAnimationFrame(tick);
  }
  const start=()=>{if(isReduced()){render(0,0);return;}if(frame===null&&visible){last=0;frame=requestAnimationFrame(tick);}};
  const controller=new AbortController(),{signal}=controller;
  host.addEventListener('pointermove',event=>{const rect=canvas.getBoundingClientRect();pointer={x:event.clientX-rect.left,y:event.clientY-rect.top};},{signal,passive:true});
  host.addEventListener('pointerleave',()=>{pointer={x:-1e4,y:-1e4};},{signal});
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();});observer.observe(host);
  const resize=()=>{build();start();if(isReduced())render(0,0);};
  window.addEventListener('resize',resize,{signal});
  document.addEventListener('visibilitychange',start,{signal});
  build();start();
  return ()=>{controller.abort();observer.disconnect();if(frame!==null)cancelAnimationFrame(frame);frame=null;};
}
