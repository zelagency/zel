import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger,SplitText,ScrambleTextPlugin);
const $$=(s,root=document)=>[...root.querySelectorAll(s)];

// Lines rise out of masks. autoSplit re-splits on resize/font load and replays the
// returned tween in place, so wrapping always matches the current layout.
// aria:'none' leaves the split text readable as it is: the default puts aria-label on spans and
// paragraphs, which is invalid ARIA there, and hides the real words.
function riseLines(element,{trigger=element,start='top 88%',duration=1.25,stagger=.09,delay=0,scroll=true}={}){
  if(!element)return;
  return SplitText.create(element,{type:'lines',mask:'lines',linesClass:'splitline',autoSplit:true,aria:'none',
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

// `context` is the page's gsap.matchMedia context: reveals built later are added to it, so leaving the page reverts them too.
export function initReveals(root,context){
  const restore=[];
  // Splitting text into lines measures layout, so each text reveal is built only once its element is within a
  // screen of view (still hidden below the fold); a page pays for what is read, not all of it at load.
  const builds=new Map();
  const near=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
    const build=builds.get(target);if(!isIntersecting||!build)return;
    near.unobserve(target);builds.delete(target);context.add(build);
  }),{rootMargin:'0px 0px 100% 0px'});
  const whenNear=(element,build)=>{if(element){builds.set(element,build);near.observe(element);}};
  restore.push(()=>{near.disconnect();builds.clear();});
  $$('[data-reveal-heading]',root).forEach(heading=>whenNear(heading,()=>riseHeading(heading)));
  $$('[data-reveal-lines]',root).forEach(p=>whenNear(p,()=>riseLines(p,{duration:1.1,stagger:.05,start:'top 92%'})));
  // Lists and cards settle up into place.
  // Statements ink in word by word (inline image chips included) as they scroll through.
  $$('[data-reveal-words]',root).forEach(p=>whenNear(p,()=>SplitText.create(p,{type:'words',wordsClass:'word',autoSplit:true,aria:'none',
    onSplit:()=>gsap.fromTo(p.querySelectorAll('.word,.chip'),{opacity:.14},{opacity:1,stagger:.1,ease:'none',
      scrollTrigger:{trigger:p,start:'top 80%',end:'bottom 50%',scrub:true}})})));
  // Ledger figures count up once; the markup keeps the final value for no-JS and reduced motion.
  $$('[data-count]',root).forEach(element=>{
    const value=Number(element.dataset.count),state={n:0};if(!value)return;
    element.textContent='0';restore.push(()=>{element.textContent=String(value);});
    ScrollTrigger.create({trigger:element,start:'top 92%',once:true,onEnter:()=>gsap.to(state,{n:value,duration:1.8,ease:'expo.out',
      onUpdate:()=>{element.textContent=String(Math.round(state.n));}})});
  });
  $$('.service-list>li,.rule,.contact-steps>li,.stat',root).forEach((item,i)=>gsap.from(item,{y:50,opacity:0,duration:1.1,ease:'expo.out',delay:(i%4)*.06,scrollTrigger:{trigger:item,start:'top 92%',once:true}}));
  // The pledge strikes out each excuse as it passes, then signs its name and stamps it.
  $$('.rule-excuse s',root).forEach(strike=>gsap.fromTo(strike,{backgroundSize:'0% .09em',color:'#000000b3'},{backgroundSize:'100% .09em',color:'#0000006b',ease:'none',
    scrollTrigger:{trigger:strike,start:'top 82%',end:'top 52%',scrub:.6}}));
  $$('.pledge-sign',root).forEach(sign=>{
    const write=gsap.timeline({scrollTrigger:{trigger:sign,start:'top 85%',end:'top 40%',scrub:.6}});
    $$('.signature path',sign).forEach(path=>{const length=path.getTotalLength();write.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',duration:length});});
    gsap.fromTo(sign.querySelector('.stamp'),{opacity:0,scale:1.9,rotation:-38},{opacity:1,scale:1,rotation:-12,duration:.55,ease:'back.out(2.2)',
      scrollTrigger:{trigger:sign,start:'top 40%',toggleActions:'play none none reverse'}});
  });
  $$('.project',root).forEach(project=>whenNear(project,()=>{
    const image=project.querySelector('.project-image'),meta=project.querySelector('.project-meta');
    // Cards tilt back in perspective as they enter and settle flat in place.
    gsap.fromTo(image,{rotationX:20,y:110,scale:.93,transformPerspective:1400,transformOrigin:'50% 0%'},
      {rotationX:0,y:0,scale:1,ease:'power2.out',scrollTrigger:{trigger:project,start:'top bottom',end:'top 45%',scrub:.6}});
    riseLines(project.querySelector('.project-title-text'),{trigger:project.querySelector('.project-title'),start:'top 95%',duration:1.1});
    // Tags decode from scrambled characters, left to right; assistive tech reads a static copy. An invisible copy
    // holds the line's final height and the scramble is laid over it, so its changing wrap never moves the page.
    const text=meta.textContent;
    meta.innerHTML=`<span class="sr-only"></span><span class="meta-ghost" aria-hidden="true"></span><span class="meta-scramble" aria-hidden="true"></span>`;
    meta.firstChild.textContent=text;meta.children[1].textContent=text;
    restore.push(()=>{meta.textContent=text;});
    ScrollTrigger.create({trigger:meta,start:'top 95%',once:true,onEnter:()=>gsap.to(meta.lastChild,{duration:1.3,ease:'none',
      scrambleText:{text,chars:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789;:=+»',revealDelay:.2,speed:.7}})});
  }));
  return ()=>restore.forEach(fn=>fn());
}
