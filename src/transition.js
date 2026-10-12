import gsap from 'gsap';

// Page transition curtain, drawn on one canvas in the top layer.
//   cover():  black wedges close diagonally over the shrinking, dimming page, then a dot-matrix
//             "LOADING..." scans in. Resolves once the screen is fully covered.
//   reveal(): the dots collapse while the Z mark (the preloader's mark) folds in, the Z lifts
//             away and the wedges retract onto the new page. onOpen fires as the wedges start.
// Nothing here navigates; the router swaps the page while the screen is covered.

// 5×7 dot-matrix glyphs, rows top to bottom.
const GLYPHS={
  L:['10000','10000','10000','10000','10000','10000','11111'],
  O:['01110','10001','10001','10001','10001','10001','01110'],
  A:['01110','10001','10001','11111','10001','10001','10001'],
  D:['11110','10001','10001','10001','10001','10001','11110'],
  I:['11111','00100','00100','00100','00100','00100','11111'],
  N:['10001','11001','10101','10011','10001','10001','10001'],
  G:['01110','10001','10000','10111','10001','10001','01111'],
};
const BLUE='#4b5cff';
const ease={wipe:gsap.parseEase('expo.inOut'),out:gsap.parseEase('expo.out'),in:gsap.parseEase('power2.in'),pop:gsap.parseEase('back.out(2)')};
// Each beat finishes before the next starts: cover, LOADING, collapse, Z, lift, reveal.
const T={wipe:620,scan:300,pop:170,minLoading:160,collapse:300,fold:460,zHold:90,zOut:220,reveal:720};
const clamp01=v=>Math.max(0,Math.min(1,v));
const lerp=(a,b,t)=>a+(b-a)*t;

function layoutDots(pitch){
  const dots=[];let col=0;
  for(const letter of 'LOADING'){
    GLYPHS[letter].forEach((row,y)=>[...row].forEach((on,x)=>{if(on==='1')dots.push({gx:col+x,gy:y,ellipsis:-1});}));
    col+=5+3;
  }
  col+=1;
  for(let i=0;i<3;i++){dots.push({gx:col,gy:6,ellipsis:i});col+=2;}
  const cols=col-1,width=(cols-1)*pitch,height=6*pitch;
  dots.forEach(dot=>{
    dot.x=dot.gx*pitch-width/2;dot.y=dot.gy*pitch-height/2;dot.u=dot.gx/cols;
    dot.jitter=Math.random()*90;dot.blue=Math.random()<.09;dot.phase=Math.random()*Math.PI*2;dot.out=Math.random()*120;
  });
  return dots;
}

export function createPageTransition({isReduced}){
  const host=document.createElement('div');
  host.className='page-transition';host.setAttribute('aria-hidden','true');host.setAttribute('data-lenis-prevent','');
  const supportsPopover=typeof host.showPopover==='function';
  if(supportsPopover)host.popover='manual';
  const canvas=document.createElement('canvas');host.append(canvas);document.body.append(host);
  const block=event=>event.preventDefault();
  host.addEventListener('wheel',block,{passive:false});host.addEventListener('touchmove',block,{passive:false});
  const ctx=canvas.getContext('2d');
  let state=null,frameId=null;

  const isOpen=()=>supportsPopover?host.matches(':popover-open'):host.classList.contains('is-open');
  function show(){if(supportsPopover){if(isOpen())host.hidePopover();host.showPopover();}else host.classList.add('is-open');}
  function hide(){if(supportsPopover){if(isOpen())host.hidePopover();}else host.classList.remove('is-open');}
  function size(){
    const w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    const pitch=gsap.utils.clamp(4.5,8,w*.0048);
    return {w,h,pitch,radius:pitch*.36,dots:layoutDots(pitch),mark:gsap.utils.clamp(.62,1,w/1400)};
  }
  // Wedges from the top-right and bottom-left corners: c=0 closed, c≥1.03 clear.
  function wedges(w,h,c){
    if(c>=1.03)return;
    const o=.02;ctx.beginPath();
    ctx.moveTo((c-o)*w,0);ctx.lineTo(w+1,0);ctx.lineTo(w+1,(1-c+o)*h);ctx.closePath();
    ctx.moveTo(-1,(c-o)*h);ctx.lineTo(-1,h+1);ctx.lineTo((1-c+o)*w,h+1);ctx.closePath();
    ctx.fillStyle='#000';ctx.fill();
  }
  // The preloader's Z: one bar splits into top and bottom strokes joined by a diagonal.
  function drawZ(cx,cy,scale,fold,alpha){
    if(alpha<=0||fold<=0)return;
    ctx.save();ctx.globalAlpha=alpha;ctx.translate(cx,cy);ctx.scale(scale,scale);ctx.translate(-60,-42);ctx.fillStyle='#fff';
    const grow=ease.out(clamp01(fold/.3)),f=ease.wipe(clamp01((fold-.15)/.6));
    const bar=top=>{const width=lerp(110*grow,64,f);ctx.fillRect(lerp(60-width/2,28,f),lerp(34,top,f),width,lerp(16,14,f));};
    bar(4);bar(66);
    const d=ease.out(clamp01((fold-.5)/.5));
    if(d>0){ctx.save();ctx.translate(60,42);ctx.rotate(-36.87*Math.PI/180);ctx.fillRect(-42*d,-7,84*d,14);ctx.restore();}
    ctx.restore();
  }
  // LOADING scans in left to right; on collapse the dots shrink away in the same direction.
  function drawLoading(geo,now,tl,collapseT){
    const {w,h,radius,dots}=geo,cx=w/2,cy=h/2;
    for(const dot of dots){
      const appear=clamp01((tl-dot.u*T.scan-dot.jitter*.5)/T.pop);if(appear<=0)continue;
      // Sweeps left to right and is complete (≤ .85×collapse) before the Z starts.
      const gone=collapseT>0?clamp01((collapseT-dot.u*T.collapse*.45-dot.out*.25)/(T.collapse*.3)):0;
      if(gone>=1)continue;
      const alpha=dot.ellipsis>=0?.22+.78*(.5+.5*Math.sin(now/150-dot.ellipsis*1.4)):1;
      const r=radius*ease.pop(appear)*(1-ease.in(gone));
      const twinkle=dot.blue&&.5+.5*Math.sin(now/110+dot.phase)>.6;
      ctx.globalAlpha=alpha;ctx.fillStyle=twinkle?BLUE:'#fff';
      ctx.beginPath();ctx.arc(cx+dot.x,cy+dot.y-gone*radius*2,Math.max(0,r),0,Math.PI*2);ctx.fill();
    }
    ctx.globalAlpha=1;
  }
  function loop(){
    frameId=null;if(!state)return;
    // Never leave the curtain up: on any drawing error, release everything waiting on it.
    try{state.draw(performance.now());}catch(error){console.error(error);finish();return;}
    if(state)frameId=requestAnimationFrame(loop);
  }
  function finish(){
    const pending=state;state=null;if(frameId)cancelAnimationFrame(frameId);frameId=null;
    ctx?.clearRect?.(0,0,canvas.width,canvas.height);hide();document.documentElement.classList.remove('is-leaving');
    pending?.resolveCover?.(true);pending?.onOpen?.();pending?.resolveReveal?.();
  }

  const api={
    get running(){return !!state;},
    // Re-enter the top layer so the curtain stays above a dialog opened while covered.
    raise(){if(state&&supportsPopover){host.hidePopover();host.showPopover();}},
    cover(){
      if(state)return Promise.resolve(false);
      if(isReduced()||!ctx)return Promise.resolve(true);
      const geo=size();show();document.documentElement.classList.add('is-leaving');
      return new Promise(resolve=>{
        const start=performance.now(),loadingAt=start+T.wipe;
        state={geo,start,loadingAt,resolveCover:resolve,
          draw(now){
            const {w,h}=geo,t=now-start;ctx.clearRect(0,0,w,h);
            const p=ease.wipe(clamp01(t/T.wipe));
            if(p<1){ctx.fillStyle=`rgba(8,9,20,${.4*p})`;ctx.fillRect(0,0,w,h);wedges(w,h,1.03*(1-p));}
            else{ctx.fillStyle='#000';ctx.fillRect(0,0,w,h);}
            if(now>loadingAt)drawLoading(geo,now,now-loadingAt,0);
            if(this.resolveCover&&t>=T.wipe){const done=this.resolveCover;this.resolveCover=null;done(true);}
          }};
        loop();
      });
    },
    reveal({onOpen}={}){
      if(!state){onOpen?.();return Promise.resolve();}
      const s=state,geo=s.geo;
      return new Promise(resolve=>{
        // Hold LOADING for a beat if the page arrived instantly, so the sequence reads.
        const start=Math.max(performance.now(),s.loadingAt+T.scan+T.pop+T.minLoading);
        const tz=T.collapse*.9,tOut=tz+T.fold+T.zHold,tOpen=tOut+T.zOut,tEnd=tOpen+T.reveal;
        s.resolveReveal=resolve;s.onOpen=onOpen;
        s.draw=function(now){
          const {w,h}=geo;ctx.clearRect(0,0,w,h);
          const t=now-start;
          if(t<tOpen){ctx.fillStyle='#000';ctx.fillRect(0,0,w,h);}
          else{
            if(this.onOpen){const open=this.onOpen;this.onOpen=null;document.documentElement.classList.remove('is-leaving');open();}
            wedges(w,h,1.03*ease.wipe(clamp01((t-tOpen)/T.reveal)));
          }
          drawLoading(geo,now,now-s.loadingAt,Math.max(0,t));
          const out=clamp01((t-tOut)/T.zOut);
          drawZ(w/2,h/2,geo.mark*(1-.18*ease.in(out)),(t-tz)/T.fold,1-ease.in(out));
          if(t>=tEnd){const done=this.resolveReveal;this.resolveReveal=null;state=null;ctx.clearRect(0,0,w,h);hide();done?.();}
        };
        if(!frameId)loop();
      });
    },
    // In-page views (case studies): cover, act while covered, reveal.
    async run(action){
      if(state)return;
      if(await api.cover()===false)return;
      action();api.raise();
      await api.reveal();
    }
  };
  window.addEventListener('pagehide',()=>{if(state)finish();});
  return api;
}
