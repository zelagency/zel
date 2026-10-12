import gsap from 'gsap';

// Page transition: black wedges close diagonally over a dimming page, a dot-matrix
// "LOADING..." assembles, its dots stream into the Z mark, and the wedges retract to
// reveal the destination. The navigation itself runs while the screen is fully covered.

// 5×7 dot-matrix glyphs (rows top to bottom).
const GLYPHS={
  L:['10000','10000','10000','10000','10000','10000','11111'],
  O:['01110','10001','10001','10001','10001','10001','01110'],
  A:['01110','10001','10001','11111','10001','10001','10001'],
  D:['11110','10001','10001','10001','10001','10001','11110'],
  I:['11111','00100','00100','00100','00100','00100','11111'],
  N:['10001','11001','10101','10011','10001','10001','10001'],
  G:['01110','10001','10000','10111','10001','10001','01111'],
};
// 9×11 Z the dots converge into.
const Z=['111111111','000000011','000000110','000001100','000011000','000110000','001100000','011000000','110000000','110000000','111111111'];
const BLUE='#4b5cff';
const easeWipe=gsap.parseEase('expo.inOut'),easeMove=gsap.parseEase('expo.inOut'),easePop=gsap.parseEase('back.out(2.2)');
// Timeline (ms).
const T={wipeIn:650,build:420,pop:180,hold:260,converge:560,sweep:240,zHold:180,wipeOut:780};

function layoutDots(pitch){
  const dots=[];let col=0;
  for(const letter of 'LOADING'){
    GLYPHS[letter].forEach((row,y)=>[...row].forEach((on,x)=>{if(on==='1')dots.push({gx:col+x,gy:y,ellipsis:-1});}));
    col+=5+3;
  }
  col+=1;
  for(let i=0;i<3;i++){dots.push({gx:col,gy:6,ellipsis:i});col+=2;}
  const width=(col-2)*pitch,height=6*pitch;
  dots.forEach(dot=>{dot.x=dot.gx*pitch-width/2;dot.y=dot.gy*pitch-height/2;});
  return dots;
}
function zTargets(pitch){
  const targets=[];
  Z.forEach((row,y)=>[...row].forEach((on,x)=>{if(on==='1')targets.push({x:(x-4)*pitch,y:(y-5)*pitch});}));
  return targets;
}

export function createPageTransition({isReduced}){
  const host=document.createElement('div');
  host.className='page-transition';host.setAttribute('aria-hidden','true');host.setAttribute('data-lenis-prevent','');
  const supportsPopover=typeof host.showPopover==='function';
  if(supportsPopover)host.popover='manual';
  const canvas=document.createElement('canvas');host.append(canvas);document.body.append(host);
  // The page must not scroll underneath while it is covered.
  const block=event=>event.preventDefault();
  host.addEventListener('wheel',block,{passive:false});host.addEventListener('touchmove',block,{passive:false});
  const ctx=canvas.getContext('2d');
  let running=false;

  function show(){if(supportsPopover){host.hidePopover?.();host.showPopover();}else host.classList.add('is-open');}
  function hide(){if(supportsPopover)host.hidePopover();else host.classList.remove('is-open');}

  return {
    get running(){return running;},
    // Re-enter the top layer so the curtain stays above a dialog opened while covered.
    raise(){if(running&&supportsPopover){host.hidePopover();host.showPopover();}},
    run(action){
      if(running)return;
      if(isReduced()||!ctx){action();return;}
      running=true;show();
      const w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,2);
      canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      const pitch=Math.round(gsap.utils.clamp(4,7,w*.0042)*2)/2,radius=pitch*.36;
      const dots=layoutDots(pitch),targets=zTargets(pitch*2.1),zRadius=pitch*2.1*.42;
      const span=Math.max(...dots.map(d=>d.gx))||1;
      dots.forEach((dot,i)=>{
        dot.delay=Math.random()*T.build;
        dot.blue=Math.random()<.09;dot.flicker=Math.random()*Math.PI*2;
        const target=targets[Math.floor(i*targets.length/dots.length)];
        dot.tx=target.x;dot.ty=target.y;dot.sweep=dot.gx/span*T.sweep;
      });
      const cx=w/2,cy=h/2;
      const tLoad=T.wipeIn,tConverge=tLoad+T.build+T.pop+T.hold,tZ=tConverge+T.sweep+T.converge,tOut=tZ+T.zHold,tEnd=tOut+T.wipeOut;
      let acted=false;const start=performance.now();

      // Black wedges from the top-right and bottom-left corners; c=0 closed, c≥1.03 fully clear.
      function wedges(c){
        const o=.02;
        ctx.beginPath();ctx.moveTo((c-o)*w,0);ctx.lineTo(w+1,0);ctx.lineTo(w+1,(1-c+o)*h);ctx.closePath();
        ctx.moveTo(-1,(c-o)*h);ctx.lineTo(-1,h+1);ctx.lineTo((1-c+o)*w,h+1);ctx.closePath();
        ctx.fillStyle='#000';ctx.fill();
      }
      // Never leave the curtain up: on any drawing error, finish the navigation and remove it.
      function frame(){
        try{draw();}catch(error){if(!acted){acted=true;action();}ctx.clearRect?.(0,0,w,h);hide();running=false;console.error(error);}
      }
      function draw(){
        const t=performance.now()-start;
        ctx.clearRect(0,0,w,h);
        if(t<tLoad){
          const p=easeWipe(t/T.wipeIn);
          ctx.fillStyle=`rgba(10,11,22,${.35*p})`;ctx.fillRect(0,0,w,h);
          wedges(1.03*(1-p));
        }else if(t<tOut){
          if(!acted){acted=true;action();}
          ctx.fillStyle='#000';ctx.fillRect(0,0,w,h);
        }else{
          const p=easeWipe(Math.min(1,(t-tOut)/T.wipeOut));
          wedges(1.03*p);
        }
        // Dots: pop in at random, twinkle, then stream into the Z, which fades as the page opens.
        if(t>=tLoad&&t<tOut+T.wipeOut*.45){
          const fadeOut=t>tOut?1-Math.min(1,(t-tOut)/(T.wipeOut*.45)):1;
          for(const dot of dots){
            const local=t-tLoad-dot.delay;if(local<=0)continue;
            const pop=easePop(Math.min(1,local/T.pop));
            const move=easeMove(gsap.utils.clamp(0,1,(t-tConverge-dot.sweep)/T.converge));
            let alpha=1;
            if(dot.ellipsis>=0&&move===0)alpha=.25+.75*(.5+.5*Math.sin((t-tLoad)/140-dot.ellipsis*1.3));
            const x=cx+dot.x+(dot.tx-dot.x)*move,y=cy+dot.y+(dot.ty-dot.y)*move;
            const r=(radius+(zRadius-radius)*move)*Math.max(0,pop);
            const twinkle=dot.blue&&move<1?.5+.5*Math.sin((t/90)+dot.flicker):0;
            ctx.globalAlpha=alpha*fadeOut;
            ctx.fillStyle=twinkle>.55?BLUE:'#fff';
            ctx.beginPath();ctx.arc(x,y,Math.max(0,r),0,Math.PI*2);ctx.fill();
          }
          ctx.globalAlpha=1;
        }
        if(t<tEnd)requestAnimationFrame(frame);
        else{ctx.clearRect(0,0,w,h);hide();running=false;}
      }
      requestAnimationFrame(frame);
    }
  };
}
