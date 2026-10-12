import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Footer "next page" band: its bar fills as the band scrolls into view; once the page
// bottom is reached, continuing to scroll fills the accent bar and moves to the next page.
export function initNextPage(link,{navigate}){
  if(!link)return ()=>{};
  const [fill,pull]=link.querySelectorAll('.next-label b');
  let progress=0,pulled=0,idle=null,sent=false;
  const render=()=>{fill.style.transform=`scaleX(${progress})`;pull.style.transform=`scaleX(${pulled})`;};
  const trigger=ScrollTrigger.create({trigger:link,start:'top bottom',end:'bottom bottom',onUpdate:self=>{progress=self.progress;if(progress<.98)pulled=0;render();}});
  const controller=new AbortController(),{signal}=controller;
  window.addEventListener('wheel',event=>{
    const atBottom=window.scrollY+innerHeight>=document.documentElement.scrollHeight-4;
    if(!atBottom||event.deltaY<=0||sent||document.documentElement.style.overflow==='hidden')return;
    pulled=Math.min(1,pulled+event.deltaY/700);render();
    clearTimeout(idle);idle=setTimeout(()=>{if(!sent){pulled=0;render();}},800);
    if(pulled>=1){sent=true;navigate(link.href);}
  },{passive:true,signal});
  render();
  return ()=>{controller.abort();clearTimeout(idle);trigger.kill();};
}
