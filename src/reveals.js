import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger,SplitText,ScrambleTextPlugin);
const $$=(s,root=document)=>[...root.querySelectorAll(s)];

// Lines rise out of masks. autoSplit re-splits on resize/font load and replays the
// returned tween in place, so wrapping always matches the current layout.
function riseLines(element,{trigger=element,start='top 88%',duration=1.25,stagger=.09,delay=0,scroll=true}={}){
  if(!element)return;
  return SplitText.create(element,{type:'lines',mask:'lines',linesClass:'splitline',autoSplit:true,
    onSplit:self=>gsap.from(self.lines,{yPercent:115,duration,stagger,delay,ease:'expo.out',
      scrollTrigger:scroll?{trigger,start,once:true}:undefined})});
}
// Headings made of .line spans rise line by line; plain headings split into lines.
function riseHeading(heading,options){
  const lines=$$(':scope>.line',heading);
  if(lines.length)lines.forEach(line=>riseLines(line,{trigger:heading,stagger:.1,...options}));
  else riseLines(heading,options);
}

// Elements, not a selector: intros run in a context scoped to the page root.
// Skip empty lists so pages without a hero or scroll cue do not trigger GSAP warnings.
const set=(targets,vars)=>{if(targets.length)gsap.set(targets,vars);};
const headerEls=()=>[...document.querySelectorAll('.header .logo,.header-actions>.pill')];
// Hidden until the curtain lifts, so nothing flashes in its final position first.
export function prepareIntro(root,{header=false}={}){
  if(header)set(headerEls(),{scale:0,transition:'none'});
  set($$('.hero-visual',root),{scale:.92,opacity:0});
  set($$('.scroll-cue',root),{opacity:0,y:20});
  set($$('[data-intro-lines]',root),{opacity:0});
}
export function playIntro(root,{header=false}={}){
  const tl=gsap.timeline();
  $$('[data-intro-lines]',root).forEach(heading=>{gsap.set(heading,{opacity:1});riseHeading(heading,{scroll:false,delay:.2,duration:1.3});});
  const visual=$$('.hero-visual',root),cue=$$('.scroll-cue',root);
  if(visual.length)tl.to(visual,{scale:1,opacity:1,duration:1.4,ease:'expo.out'},0);
  if(header)tl.to(headerEls(),{scale:1,duration:.7,ease:'back.out(1.7)',stagger:.07,clearProps:'transform,transition'},.35);
  if(cue.length)tl.to(cue,{opacity:1,y:0,duration:.9,ease:'expo.out',clearProps:'transform'},.6);
  return tl;
}

export function initReveals(root){
  const restore=[];
  $$('[data-reveal-heading]',root).forEach(heading=>riseHeading(heading));
  $$('[data-reveal-lines]',root).forEach(p=>riseLines(p,{duration:1.1,stagger:.05,start:'top 92%'}));
  // Lists and cards settle up into place.
  $$('.service-list>li,.principles>article,.contact-steps>li',root).forEach((item,i)=>gsap.from(item,{y:50,opacity:0,duration:1.1,ease:'expo.out',delay:(i%4)*.06,scrollTrigger:{trigger:item,start:'top 92%',once:true}}));
  $$('.project',root).forEach(project=>{
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
