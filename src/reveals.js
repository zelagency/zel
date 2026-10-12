import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger,SplitText,ScrambleTextPlugin);
const $$=(s,root=document)=>[...root.querySelectorAll(s)];

// Lines rise out of masks. autoSplit re-splits on resize/font load and replays the
// returned tween in place, so wrapping always matches the current layout.
function riseLines(element,{trigger=element,start='top 88%',duration=1.25,stagger=.09,delay=0,scroll=true}={}){
  return SplitText.create(element,{type:'lines',mask:'lines',linesClass:'split-line',autoSplit:true,
    onSplit:self=>gsap.from(self.lines,{yPercent:115,duration,stagger,delay,ease:'expo.out',
      scrollTrigger:scroll?{trigger,start,once:true}:undefined})});
}

// Hidden until the preloader lifts, so nothing flashes in its final position first.
export function prepareIntro(){
  gsap.set('.header .logo,.header-actions>.pill',{scale:0,transition:'none'});
  gsap.set('.hero-visual',{scale:.92,opacity:0});
  gsap.set('.scroll-cue',{opacity:0,y:20});
  gsap.set('.hero h1',{opacity:0});
}
export function playIntro(){
  gsap.set('.hero h1',{opacity:1});
  const tl=gsap.timeline();
  tl.to('.hero-visual',{scale:1,opacity:1,duration:1.4,ease:'expo.out'},0);
  riseLines('.hero h1',{scroll:false,delay:.25,duration:1.3,stagger:.1});
  tl.to('.header .logo,.header-actions>.pill',{scale:1,duration:.7,ease:'back.out(1.7)',stagger:.07,clearProps:'transform,transition'},.35);
  tl.to('.scroll-cue',{opacity:1,y:0,duration:.9,ease:'expo.out',clearProps:'transform'},.6);
  return tl;
}

export function initReveals(){
  const restore=[];
  $$('.about-title .line,#ideas-title .line').forEach(line=>riseLines(line,{trigger:line.parentElement,stagger:.1}));
  riseLines('#work-title');
  $$('.about-copy>p,.ideas-copy>p,.work-heading>p').forEach(p=>riseLines(p,{duration:1.1,stagger:.05,start:'top 92%'}));
  $$('.project').forEach(project=>{
    const image=project.querySelector('.project-image'),meta=project.querySelector('.project-meta');
    // Cards tilt back in perspective as they enter and settle flat in place.
    gsap.fromTo(image,{rotationX:20,y:110,scale:.93,transformPerspective:1400,transformOrigin:'50% 0%'},
      {rotationX:0,y:0,scale:1,ease:'power2.out',scrollTrigger:{trigger:project,start:'top bottom',end:'top 45%',scrub:.6}});
    riseLines(project.querySelector('.project-title-text'),{trigger:project.querySelector('.project-title'),start:'top 95%',duration:1.1});
    // Tags decode from scrambled characters, left to right; assistive tech reads a static copy.
    const text=meta.textContent;
    meta.innerHTML=`<span class="sr-only"></span><span class="meta-scramble" aria-hidden="true"></span>`;
    meta.firstChild.textContent=text;meta.style.minHeight='1.5em';
    restore.push(()=>{meta.textContent=text;meta.style.minHeight='';});
    ScrollTrigger.create({trigger:meta,start:'top 95%',once:true,onEnter:()=>gsap.to(meta.lastChild,{duration:1.3,ease:'none',
      scrambleText:{text,chars:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789;:=+»',revealDelay:.2,speed:.7}})});
  });
  return ()=>restore.forEach(fn=>fn());
}
