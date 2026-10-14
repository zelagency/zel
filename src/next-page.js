import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Footer "next page" band: its bar fills as the band scrolls into view; once the page
// bottom is reached, continuing to scroll (wheel, or a finger dragging up) fills the accent
// bar and moves to the next page.
export function initNextPage(link,{navigate}){
  if(!link)return ()=>{};
  const [fill,pull]=link.querySelectorAll('.next-label b');
  let progress=0,pulled=0,idle=null,sent=false,touchY=null;
  const render=()=>{fill.style.transform=`scaleX(${progress})`;pull.style.transform=`scaleX(${pulled})`;};
  const trigger=ScrollTrigger.create({trigger:link,start:'top bottom',end:'bottom bottom',onUpdate:self=>{progress=self.progress;if(progress<.98)pulled=0;render();}});
  const controller=new AbortController(),{signal}=controller;
  // `distance` is how far past the bottom it takes to fill the bar.
  const pullBy=(delta,distance)=>{
    const atBottom=window.scrollY+innerHeight>=document.documentElement.scrollHeight-4;
    if(!atBottom||delta<=0||sent||document.documentElement.style.overflow==='hidden')return;
    pulled=Math.min(1,pulled+delta/distance);render();
    clearTimeout(idle);idle=setTimeout(()=>{if(!sent){pulled=0;render();}},800);
    if(pulled>=1){sent=true;navigate(link.href);}
  };
  window.addEventListener('wheel',event=>pullBy(event.deltaY,700),{passive:true,signal});
  // Touch screens have no wheel: only a finger dragging up counts, not a fling's momentum.
  window.addEventListener('touchstart',event=>{touchY=event.touches[0].clientY;},{passive:true,signal});
  window.addEventListener('touchmove',event=>{
    if(touchY===null)return;
    const y=event.touches[0].clientY;pullBy(touchY-y,300);touchY=y;
  },{passive:true,signal});
  for(const type of ['touchend','touchcancel'])window.addEventListener(type,()=>{touchY=null;},{passive:true,signal});
  render();
  return ()=>{controller.abort();clearTimeout(idle);trigger.kill();};
}
