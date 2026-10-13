import gsap from 'gsap';

// Preloader: a progress bar and an odometer counter track what the first screen needs (markup,
// styles and script have arrived by the time this runs; the web font is awaited), with a short
// minimum so it reads as intentional, then the bar folds into the Z mark and the curtain lifts.
// It deliberately does not wait for window load: posters, sound and below-the-fold images
// load on demand and should not hold the page back.
const MIN_MS=700,MAX_MS=3000,EXIT_SPEED=1.5;

export function playPreloader({reduced,onReveal}){
  const root=document.querySelector('.preloader');
  if(!root||reduced){root?.remove();onReveal(true);return Promise.resolve();}
  const $=s=>root.querySelector(s),columns=[...root.querySelectorAll('.pl-digit>span')];
  let loaded=!document.fonts,shown=-1;
  document.fonts?.load('1em Aeonik').catch(()=>{}).then(()=>{loaded=true;});
  const setCount=value=>{
    if(value===shown)return;shown=value;
    [Math.floor(value/100),Math.floor(value/10)%10,value%10].forEach((digit,i)=>{columns[i].style.transform=`translateY(${-digit*10}%)`;});
  };
  setCount(0);
  return new Promise(resolve=>{
    const start=performance.now();
    function tick(now){
      const elapsed=now-start,t=Math.min(1,elapsed/MIN_MS);
      // Ease toward 100, but hold short of it until the page has actually loaded.
      const progress=Math.min(1-(1-t)**2,loaded||elapsed>MAX_MS?1:.9);
      gsap.set($('.pl-fill'),{scaleX:progress});setCount(Math.round(progress*100));
      if(progress<1){requestAnimationFrame(tick);return;}
      finish();
    }
    function finish(){
      const bar={left:5,top:34,width:110,height:16};
      gsap.timeline({defaults:{ease:'expo.inOut'},onComplete(){root.remove();resolve();}}).timeScale(EXIT_SPEED)
        .set($('.pl-track'),{opacity:0},.12)
        .set([$('.pl-top'),$('.pl-bottom')],{...bar,opacity:1},.12)
        .set($('.pl-fill'),{opacity:0},.12)
        .to($('.pl-top'),{left:28,top:4,width:64,height:14,duration:.6},.12)
        .to($('.pl-bottom'),{left:28,top:66,width:64,height:14,duration:.6},.12)
        .fromTo($('.pl-diag'),{rotation:-36.87,scaleX:0},{rotation:-36.87,scaleX:1,duration:.5,ease:'expo.out'},.42)
        .to(root.querySelector('.pl-count'),{yPercent:120,duration:.55,ease:'expo.in'},.75)
        .to($('.pl-mark'),{scale:.82,opacity:0,duration:.35,ease:'power2.in'},1)
        .add(()=>onReveal(false),1.1)
        .to(root,{yPercent:-100,duration:.95},1.1);
    }
    requestAnimationFrame(tick);
  });
}
