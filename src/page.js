import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, projectCover } from './projects.js';
import { damp } from './motion.js';
import { initHero } from './hero.js';
import { initReveals, prepareIntro, playIntro } from './reveals.js';
import { initConfetti } from './confetti.js';
import { initNextPage } from './next-page.js';

const projectCard=(project,i,featured)=>`<article class="project ${featured?'project-featured':''}" data-project-id="${project.id}"><button class="project-image" data-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span class="project-arrow" aria-hidden="true">↗</span></button><p class="project-meta">${project.tags}</p><div class="project-title"><h3><span class="project-title-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg></span><span class="project-title-text">${project.title}</span></h3><a href="${project.url}" target="_blank" rel="noopener" aria-label="Visit ${project.title} live website">VISIT SITE ↗</a></div><p class="project-summary">${project.description}</p></article>`;

// Everything owned by one page: built when it mounts, fully torn down before the next one.
export function mountPage({root,footer,motionQuery,isReduced,ui}){
  const $=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
  const controller=new AbortController(),{signal}=controller,cleanups=[];

  const grid=$('#project-grid');
  if(grid){const all=grid.dataset.layout==='all';grid.innerHTML=projects.map((project,i)=>projectCard(project,i,!all&&i===0)).join('');}
  $$('[data-project-count]').forEach(element=>{element.textContent=String(projects.length).padStart(2,'0');});
  root.addEventListener('click',event=>{
    const project=event.target.closest('[data-project]');if(project){ui.openProject(Number(project.dataset.project));return;}
    if(event.target.closest('[data-reel]'))ui.openReel();
  },{signal});

  // Load only the video loops that are approaching the screen.
  const videos=$$('.ambient-video');
  const videoObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
    if(isIntersecting&&!isReduced()){if(!target.src){target.addEventListener('loadedmetadata',()=>{if(target.dataset.start)target.currentTime=Number(target.dataset.start);},{once:true});target.src=target.dataset.src;}target.play().catch(()=>{});}else target.pause();
  }));
  videos.forEach(video=>videoObserver.observe(video));
  // Decorative loops share the same visibility lifecycle as the video loops.
  const loops=$$('.marquee>div,.device-orb'),visibleLoops=new Set();
  const syncLoops=()=>loops.forEach(element=>{element.style.animationPlayState=!isReduced()&&!document.hidden&&visibleLoops.has(element)?'running':'paused';});
  const loopObserver=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{isIntersecting?visibleLoops.add(target):visibleLoops.delete(target);});syncLoops();});
  loops.forEach(element=>loopObserver.observe(element));syncLoops();
  document.addEventListener('visibilitychange',syncLoops,{signal});
  motionQuery.addEventListener('change',syncLoops,{signal});
  cleanups.push(()=>{videoObserver.disconnect();loopObserver.disconnect();videos.forEach(video=>video.pause());});

  cleanups.push(initHero(motionQuery,root));
  cleanups.push(initConfetti($('.confetti'),{isReduced}));
  cleanups.push(initNextPage(footer?.querySelector('[data-next-page]'),{navigate:ui.navigate}));

  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
    if($('.hero h1'))gsap.to($('.hero h1'),{y:-70,ease:'none',scrollTrigger:{trigger:$('.hero'),start:'top top',end:'bottom top',scrub:1}});
    const restoreReveals=initReveals(root);
    $$('.ribbon path').forEach(path=>{const length=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:path.closest('section'),start:'top 90%',end:'bottom 70%',scrub:1.2}});});
    $$('.flower-frame').forEach(frame=>gsap.from(frame,{y:90,rotation:-3,ease:'none',scrollTrigger:{trigger:frame.parentElement,start:'top bottom',end:'bottom 30%',scrub:1}}));
    if($('.reel-frame'))gsap.from($('.reel-frame'),{scale:.86,ease:'power1.inOut',scrollTrigger:{trigger:$('.reel'),start:'top bottom',end:'top 5%',scrub:1}});
    // The laptop turns through the section while its lid opens on the hinge.
    if($('.laptop')){
      gsap.fromTo($('.laptop'),{rotationY:18},{rotationY:-12,ease:'none',scrollTrigger:{trigger:$('.ideas-content'),start:'top bottom',end:'bottom 30%',scrub:1}});
      gsap.fromTo($('.laptop-lid'),{rotationX:-84},{rotationX:8,ease:'power1.inOut',scrollTrigger:{trigger:$('.device-scene'),start:'center bottom',end:'center 50%',scrub:1}});
    }
    return restoreReveals;
  });
  mm.add('(min-width: 813px) and (prefers-reduced-motion: no-preference)',()=>{
    if($('.reel-pin'))ScrollTrigger.create({trigger:$('.reel-pin'),start:'top 5%',end:'+=100%',pin:true,anticipatePin:1});
  });
  // Reel cursor follower and magnetic pills share one frame-damped ticker.
  mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
    const local=new AbortController(),opts={signal:local.signal};
    const reel=$('.reel-frame'),cursor=$('.reel-cursor');
    const follower={inside:false,ready:false,x:0,y:0,clientX:0,clientY:0,rotation:0};
    let cursorX,cursorY,cursorRotation;
    if(reel&&cursor){
      gsap.set(cursor,{xPercent:-50,yPercent:-50,x:0,y:0});
      cursorX=gsap.quickSetter(cursor,'x','px');cursorY=gsap.quickSetter(cursor,'y','px');cursorRotation=gsap.quickSetter(cursor,'rotation','deg');
      reel.addEventListener('pointerenter',event=>{follower.inside=true;follower.ready=false;follower.clientX=event.clientX;follower.clientY=event.clientY;},opts);
      reel.addEventListener('pointermove',event=>{follower.clientX=event.clientX;follower.clientY=event.clientY;},opts);
      reel.addEventListener('pointerleave',()=>{follower.inside=false;follower.ready=false;delete reel.dataset.pointerInside;},opts);
    }
    const buttons=new Set();
    [...document.querySelectorAll('.pill')].forEach(button=>{
      const state={button,inside:false,x:0,y:0,clientX:0,clientY:0,setX:gsap.quickSetter(button,'x','px'),setY:gsap.quickSetter(button,'y','px')};
      button.addEventListener('pointerenter',event=>{state.inside=true;state.clientX=event.clientX;state.clientY=event.clientY;buttons.add(state);},opts);
      button.addEventListener('pointermove',event=>{state.clientX=event.clientX;state.clientY=event.clientY;},opts);
      button.addEventListener('pointerleave',()=>{state.inside=false;},opts);
      button.addEventListener('focus',()=>{state.inside=false;buttons.add(state);},opts);
    });
    function tick(time,deltaMs){
      if(document.hidden)return;
      const dt=Math.min(deltaMs/1000,.05);
      // Read geometry before any transform writes; compensate for existing transforms.
      const reelRect=follower.inside?reel.getBoundingClientRect():null;
      const reelWidth=reelRect?reel.offsetWidth:1,reelHeight=reelRect?reel.offsetHeight:1;
      const plans=[...buttons].map(state=>({state,rect:state.inside?state.button.getBoundingClientRect():null}));
      if(reelRect){
        const x=(follower.clientX-reelRect.left)*reelWidth/(reelRect.width||1);
        const y=(follower.clientY-reelRect.top)*reelHeight/(reelRect.height||1);
        const oldX=follower.x;
        if(!follower.ready){follower.x=x;follower.y=y;follower.rotation=0;follower.ready=true;}
        else{follower.x=damp(follower.x,x,22,dt);follower.y=damp(follower.y,y,22,dt);follower.rotation=damp(follower.rotation,gsap.utils.clamp(-10,10,(follower.x-oldX)/(dt||1)/100),12,dt);}
        cursorX(follower.x);cursorY(follower.y);cursorRotation(follower.rotation);reel.dataset.pointerInside='true';
      }
      plans.forEach(({state,rect})=>{
        const targetX=rect?gsap.utils.clamp(-5,5,(state.clientX-(rect.left+rect.width/2-state.x))*.09):0;
        const targetY=rect?gsap.utils.clamp(-4,4,(state.clientY-(rect.top+rect.height/2-state.y))*.12):0;
        state.x=damp(state.x,targetX,18,dt);state.y=damp(state.y,targetY,18,dt);
        if(!state.inside&&Math.abs(state.x)+Math.abs(state.y)<.02){state.x=0;state.y=0;buttons.delete(state);}
        state.setX(state.x);state.setY(state.y);
      });
    }
    gsap.ticker.add(tick);
    window.addEventListener('blur',()=>{follower.inside=false;if(reel)delete reel.dataset.pointerInside;buttons.forEach(state=>{state.inside=false;});},opts);
    return ()=>{local.abort();gsap.ticker.remove(tick);buttons.forEach(state=>{state.setX(0);state.setY(0);});buttons.clear();if(reel)delete reel.dataset.pointerInside;};
  });

  // The page intro runs inside its own context so leaving the page reverts it too.
  const intro=gsap.context(()=>{},root);
  return {
    prepareIntro(options){if(!isReduced())intro.add(()=>prepareIntro(root,options));},
    playIntro(options){if(!isReduced())intro.add(()=>playIntro(root,options));},
    unmount(){controller.abort();intro.revert();mm.revert();cleanups.forEach(cleanup=>cleanup?.());}
  };
}
