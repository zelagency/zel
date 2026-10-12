import gsap from 'gsap';

// Page transition, after Lusion's TransitionOverlay. Everything is drawn on one canvas in the
// top layer with plain fills and a cut-out; the page underneath is never filtered or scaled.
//   cover():  the page is seen through a huge window that spins and shrinks into a white bar,
//             which then prints a dot-matrix "LOADING...". Resolves once fully covered.
//   reveal(): the dots sweep away, the bar turns into the Z's diagonal as its strokes slide out,
//             then the Z becomes the window: it spins and grows until the new page fills the
//             screen. onOpen fires as the window starts to open.
// Shapes are drawn in "units" of n px (the bar is 5×1 units), like the reference.

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
const expoInOut=gsap.parseEase('expo.inOut'),expoOut=gsap.parseEase('expo.out'),expoIn=gsap.parseEase('expo.in');
// The window must respond the moment it is clicked, so its curves start faster than expo.
const windowIn=gsap.parseEase('power2.inOut'),windowOut=gsap.parseEase('power3.inOut');
const T={cover:850,barOut:240,scan:300,pop:170,minHold:180,dotsOut:300,zForm:500,zHold:50,reveal:1000};
const DIAGONAL=-Math.atan2(3,4);           // the Z's diagonal: 5 units long, 4 across, 3 down
const Z_SCALE=.5;                          // Z size relative to the bar
const clamp01=v=>Math.max(0,Math.min(1,v));

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
    dot.jitter=Math.random();dot.blue=Math.random()<.09;dot.phase=Math.random()*Math.PI*2;
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
  function measure(){
    const w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,1.5);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    const n=Math.max(18,Math.min(42,w/30)),diag=Math.hypot(w,h);
    return {w,h,dpr,n,c:diag/n,pitch:n*.16,dots:layoutDots(n*.16)};
  }
  function begin(g){ctx.setTransform(g.dpr,0,0,g.dpr,0,0);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.fillStyle='#000';ctx.fillRect(0,0,g.w,g.h);}
  // Paint shape() as a window onto the page, then a white fill over it at `white` opacity.
  function windowed(shape,white){
    ctx.globalCompositeOperation='destination-out';ctx.beginPath();shape();ctx.fill();
    ctx.globalCompositeOperation='source-over';
    if(white>0){ctx.globalAlpha=white;ctx.fillStyle='#fff';ctx.beginPath();shape();ctx.fill();ctx.globalAlpha=1;}
  }
  const bar=()=>ctx.rect(-2.5,-.5,5,1);
  // Z in units: top and bottom strokes 4×1, joined by the bar rotated onto the diagonal.
  // `form` 0→1: the bar turns onto the diagonal, then the top and bottom strokes slide out.
  function zShape(form){
    const turn=expoInOut(clamp01(form/.55)),slide=expoOut(clamp01((form-.4)/.6));
    return ()=>{
      ctx.save();ctx.rotate(DIAGONAL*turn);ctx.rect(-2.5,-.5,5,1);ctx.restore();
      if(slide>0){const width=4*slide;ctx.rect(2-width,-2.5,width,1);ctx.rect(-2,1.5,width,1);}
    };
  }
  function drawDots(g,now,appearT,goneT){
    const cx=g.w/2,cy=g.h/2,radius=g.pitch*.36;
    for(const dot of g.dots){
      const appear=clamp01((appearT-dot.u*T.scan-dot.jitter*40)/T.pop);if(appear<=0)continue;
      const gone=goneT>0?clamp01((goneT-dot.u*T.dotsOut*.55-dot.jitter*30)/(T.dotsOut*.35)):0;if(gone>=1)continue;
      const alpha=dot.ellipsis>=0?.22+.78*(.5+.5*Math.sin(now/150-dot.ellipsis*1.4)):1;
      const twinkle=dot.blue&&.5+.5*Math.sin(now/110+dot.phase)>.6;
      ctx.globalAlpha=alpha;ctx.fillStyle=twinkle?BLUE:'#fff';
      ctx.beginPath();ctx.arc(cx+dot.x,cy+dot.y,radius*expoOut(appear)*(1-expoIn(gone)),0,Math.PI*2);ctx.fill();
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
    ctx?.setTransform?.(1,0,0,1,0,0);ctx?.clearRect?.(0,0,canvas.width,canvas.height);hide();
    pending?.resolveCover?.(true);pending?.onOpen?.();pending?.resolveReveal?.();
  }

  const api={
    get running(){return !!state;},
    // Re-enter the top layer so the curtain stays above a dialog opened while covered.
    raise(){if(state&&supportsPopover){host.hidePopover();host.showPopover();}},
    cover(){
      if(state)return Promise.resolve(false);
      if(isReduced()||!ctx)return Promise.resolve(true);
      const g=measure();show();
      return new Promise(resolve=>{
        const start=performance.now(),textAt=start+T.cover;
        state={g,textAt,resolveCover:resolve,
          draw(now){
            const t=now-start;begin(g);
            ctx.save();ctx.translate(g.w/2,g.h/2);
            if(t<T.cover){
              // f: 1 = window covers the whole screen, 0 = the white loading bar.
              // At f=1 a unit equals the diagonal, so the window just covers the screen and starts closing at once.
              const f=1-windowIn(t/T.cover),scale=(1+f*g.c)*g.n;
              ctx.rotate(-f);ctx.scale(scale,scale);
              windowed(bar,expoIn(1-f));
            }else{
              // The bar thins away as LOADING prints out of it.
              const out=expoIn(clamp01((t-T.cover)/T.barOut));
              if(out<1){ctx.scale(g.n,g.n*(1-out));ctx.fillStyle='#fff';ctx.fillRect(-2.5,-.5,5,1);}
            }
            ctx.restore();
            if(now>textAt+T.barOut*.4)drawDots(g,now,now-textAt-T.barOut*.4,0);
            if(this.resolveCover&&t>=T.cover){const done=this.resolveCover;this.resolveCover=null;done(true);}
          }};
        loop();
      });
    },
    reveal({onOpen}={}){
      if(!state){onOpen?.();return Promise.resolve();}
      const s=state,g=s.g;
      return new Promise(resolve=>{
        // Hold LOADING for a beat if the page arrived instantly, so the sequence reads.
        const start=Math.max(performance.now(),s.textAt+T.barOut*.4+T.scan+T.pop+T.minHold);
        const zAt=T.dotsOut*.7,openAt=zAt+T.zForm+T.zHold,end=openAt+T.reveal;
        s.resolveReveal=resolve;s.onOpen=onOpen;
        s.draw=function(now){
          const t=now-start;begin(g);
          drawDots(g,now,now-s.textAt-T.barOut*.4,Math.max(0,t));
          ctx.save();ctx.translate(g.w/2,g.h/2);
          if(t>=zAt&&t<openAt){
            // The Z forms: a bar scales in, turns onto the diagonal, strokes slide out.
            const form=clamp01((t-zAt)/T.zForm),grow=expoOut(clamp01(form/.35))*Z_SCALE*g.n;
            ctx.scale(grow,grow);ctx.fillStyle='#fff';ctx.beginPath();zShape(form)();ctx.fill();
          }else if(t>=openAt){
            if(this.onOpen){const open=this.onOpen;this.onOpen=null;open();}
            // f: 0 = the Z mark, 1 = the Z window covers the screen (its strokes are 1 unit thick,
            // so once a unit exceeds the diagonal the centre stroke alone covers everything).
            const f=windowOut(clamp01((t-openAt)/T.reveal)),scale=(Z_SCALE+f*g.c*1.12)*g.n;
            ctx.rotate(f);ctx.scale(scale,scale);
            windowed(zShape(1),1-expoOut(f));
          }
          ctx.restore();
          if(t>=end){const done=this.resolveReveal;this.resolveReveal=null;state=null;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);hide();done?.();}
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
