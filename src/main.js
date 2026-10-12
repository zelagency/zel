import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { projects, projectCover } from './projects.js';
import { damp } from './motion.js';
import { initHero } from './hero.js';
import { PointerTrail } from './pointer-trail.js';
import { initPills, initSoundWave, fillPill, drainPill } from './pills.js';
import { playPreloader } from './intro.js';
import { prepareIntro, playIntro, initReveals } from './reveals.js';
import { createPageTransition } from './transition.js';

gsap.registerPlugin(ScrollTrigger);
// Mobile browser bars resize the viewport while scrolling; refreshing then makes pins jump.
ScrollTrigger.config({ignoreMobileResize:true});
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = motionQuery.matches;
// Dialog focus restoration should not add a keyboard ring after a pointer click.
document.documentElement.dataset.inputMode='pointer';
document.addEventListener('pointerdown',()=>{document.documentElement.dataset.inputMode='pointer';},{capture:true,passive:true});
document.addEventListener('keydown',event=>{
  if(!event.metaKey&&!event.ctrlKey&&!event.altKey)document.documentElement.dataset.inputMode='keyboard';
},{capture:true});
$('#project-grid').innerHTML = projects.map((project,i)=>`<article class="project ${i===0?'project-featured':''}" data-project-id="${project.id}"><button class="project-image" data-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span class="project-arrow" aria-hidden="true">↗</span></button><p class="project-meta">${project.tags}</p><div class="project-title"><h3><span class="project-title-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg></span><span class="project-title-text">${project.title}</span></h3><a href="${project.url}" target="_blank" rel="noopener" aria-label="Visit ${project.title} live website">VISIT SITE ↗</a></div><p class="project-summary">${project.description}</p></article>`).join('');

// Smooth scroll is deliberately slow enough to give the visual sequence room.
let lenis;
function startSmoothScroll() {
  if(lenis||reduced)return;
  lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, easing:t=>1-Math.pow(1-t,4) });
  lenis.on('scroll',ScrollTrigger.update);
}
startSmoothScroll();
gsap.ticker.add(time=>lenis?.raf(time*1000));
const jump = target => lenis ? lenis.scrollTo(target,{offset:target==='#home'?0:-80}) : $(target)?.scrollIntoView({behavior:reduced?'instant':'smooth'});
const audio = {
  enabled: false,
  music: new Audio('/assets/ambient.ogg'),
  hover: new Audio('/assets/hover.ogg'),
  click: new Audio('/assets/click.ogg'),
  play(type) {
    if(!this.enabled||document.hidden) return;
    const player=this[type].cloneNode(); player.volume=type==='hover'?.24:.4;
    player.play().catch(()=>{});
  },
  async toggle(){
    this.enabled=!this.enabled;
    if(this.enabled){try{await this.music.play();}catch{this.enabled=false;}}else this.music.pause();
    const sound=$('.sound');sound.setAttribute('aria-pressed',String(this.enabled));
    soundWave.set(this.enabled);
    if(this.enabled)fillPill(sound,undefined,undefined,reduced);else if(!sound.matches(':hover'))drainPill(sound,undefined,undefined,reduced);
    $('.sound').setAttribute('aria-label',this.enabled?'Disable sound':'Enable sound');
    $('.sound').title=this.enabled?'Sound on':'Sound off';
  }
};
initPills(()=>reduced);
const soundWave=initSoundWave($('.sound'),()=>reduced);
audio.music.loop=true;audio.music.volume=.3;
$('.sound').addEventListener('click',()=>audio.toggle());
document.addEventListener('pointerover',event=>{
  const hit=event.target.closest('a,button');
  if(hit&&!hit.contains(event.relatedTarget))audio.play('hover');
});
document.addEventListener('click',event=>{if(event.target.closest('a,button'))audio.play('click');});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.music.pause();else if(audio.enabled&&!$('#media-dialog').open)audio.music.play().catch(()=>{});});

const menu=$('#menu-dialog'), contact=$('#contact-dialog'), media=$('#media-dialog');
$$('dialog').forEach(dialog=>dialog.setAttribute('data-lenis-prevent',''));
menu.insertAdjacentHTML('afterbegin','<a class="menu-logo logo" href="#home">ZEL</a><button class="dialog-close pill menu-close" aria-label="Close menu">CLOSE ••</button>');
let previousFocus;
const lockScroll=()=>{lenis?.stop();document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';};
const unlockScroll=()=>{if($$('dialog[open]').length)return;document.documentElement.style.overflow='';document.body.style.overflow='';lenis?.start();previousFocus?.focus({preventScroll:true});};
function showDialog(dialog){
  previousFocus=document.activeElement;
  dialog.showModal();lockScroll();
}
function dismissDialog(dialog){
  if(!dialog.open||dialog.dataset.closing)return;
  if(reduced||!dialog.animate){dialog.close();return;}
  dialog.dataset.closing='true';
  const exit=dialog.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(18px)'}],{duration:180,easing:'cubic-bezier(.4,0,1,1)'});
  exit.finished.catch(()=>{}).then(()=>{delete dialog.dataset.closing;dialog.close();});
}
function closeMenu(){dismissDialog(menu);$('.menu-button').setAttribute('aria-expanded','false');}
$('.menu-button').addEventListener('click',()=>{showDialog(menu);$('.menu-button').setAttribute('aria-expanded','true');});
$('.menu-close').addEventListener('click',closeMenu);
menu.addEventListener('close',()=>{$('.menu-button').setAttribute('aria-expanded','false');unlockScroll();});
const pageTransition=createPageTransition({isReduced:()=>reduced});
// Menu navigation behaves like a page change: the jump happens under the transition.
const jumpNow=target=>lenis?lenis.scrollTo(target,{offset:target==='#home'?0:-80,immediate:true,force:true}):$(target)?.scrollIntoView({behavior:'instant'});
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=link.getAttribute('href');if(!$(target))return;
  event.preventDefault();
  if(menu.open&&menu.contains(link))pageTransition.run(()=>{menu.close();jumpNow(target);});
  else{if(menu.open)menu.close();jump(target);}
}));
$$('[data-contact]').forEach(button=>button.addEventListener('click',()=>{if(menu.open)menu.close();showDialog(contact);}));
$$('[data-close]').forEach(button=>button.addEventListener('click',()=>dismissDialog(button.closest('dialog'))));
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('cancel',event=>{event.preventDefault();dismissDialog(dialog);});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dismissDialog(dialog);}});
  dialog.addEventListener('close',unlockScroll);
});
let briefUrl;
$('#contact-form').addEventListener('submit',event=>{
  event.preventDefault();const values=new FormData(event.target);
  if(briefUrl)URL.revokeObjectURL(briefUrl);
  const brief=`ZEL — Project brief\n\nName: ${values.get('name')}\nEmail: ${values.get('email')}\n\nProject\n${values.get('project')}\n`;
  briefUrl=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
  $('.form-status').innerHTML='Your project brief is ready to download. <br><a class="brief-download" download="ZEL-project-brief.txt">Download your brief ↗</a>';
  $('.brief-download').href=briefUrl;
});
media.addEventListener('close',()=>{const video=$('video',media);video?.pause();$('.media-dialog-content').replaceChildren();if(audio.enabled)audio.music.play().catch(()=>{});});
function renderProject(index){
  const project=projects[index];
  $('.media-dialog-content').innerHTML=`<article class="case-study"><div class="case-heading"><div><h2>${project.title}</h2><p>${project.type}</p></div><a class="pill white" href="${project.url}" target="_blank" rel="noopener">VISIT LIVE SITE ↗</a></div><div class="case-cover">${projectCover(project)}</div><div class="case-description"><p>${project.description}</p><ul>${project.features.map(feature=>`<li>${feature}</li>`).join('')}</ul></div><div class="case-screens">${project.images.map(image=>`<figure><img src="${image.src}" alt="${image.alt}" loading="lazy"><figcaption>${image.alt}</figcaption></figure>`).join('')}</div><button class="case-back" data-back-projects>← Back to all projects</button></article>`;
  $('[data-back-projects]',media).addEventListener('click',renderGallery);
  media.scrollTop=0;
}
function openProject(index){pageTransition.run(()=>{renderProject(index);showDialog(media);pageTransition.raise();});}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(Number(button.dataset.project))));
function renderGallery(){
  $('.media-dialog-content').innerHTML='<h2>Selected projects</h2><div class="gallery-grid">'+projects.map((project,i)=>`<button data-gallery-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span>${project.title} ↗</span></button>`).join('')+'</div>';
  $$('[data-gallery-project]',media).forEach(button=>button.addEventListener('click',()=>renderProject(Number(button.dataset.galleryProject))));
  media.scrollTop=0;
}
$('#all-projects').addEventListener('click',()=>pageTransition.run(()=>{renderGallery();showDialog(media);pageTransition.raise();}));
$$('[data-reel]').forEach(button=>button.addEventListener('click',()=>{
  $('.media-dialog-content').innerHTML='<video src="/assets/reel.mp4" controls playsinline loop aria-label="Lusion creative reference reel"></video><p class="media-credit">Creative reference reel by <a href="https://lusion.co/" target="_blank" rel="noopener">Lusion</a> · ZEL visual study</p>';
  showDialog(media);audio.music.pause();const video=$('video',media);video.muted=!audio.enabled;video.play().catch(()=>{});
}));

// Load only the video loops that are approaching the screen.
const videoObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  if(isIntersecting&&!reduced){if(!target.src){target.addEventListener('loadedmetadata',()=>{if(target.dataset.start)target.currentTime=Number(target.dataset.start);},{once:true});target.src=target.dataset.src;}target.play().catch(()=>{});}else target.pause();
}),{rootMargin:'0px'});
$$('.ambient-video').forEach(video=>videoObserver.observe(video));

// Animation contexts revert themselves when reduced motion is enabled.
const mm=gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.to('.hero h1',{y:-70,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  const restoreReveals=initReveals();
  $$('.ribbon path').forEach(path=>{const length=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:path.closest('section'),start:'top 90%',end:'bottom 70%',scrub:1.2}});});
  gsap.from('.flower-frame',{y:90,rotation:-3,ease:'none',scrollTrigger:{trigger:'.about-content',start:'top bottom',end:'bottom 30%',scrub:1}});
  gsap.from('.reel-frame',{scale:.86,ease:'power1.inOut',scrollTrigger:{trigger:'.reel',start:'top bottom',end:'top 5%',scrub:1}});
  gsap.fromTo('.device',{rotationY:15,rotationX:12,rotationZ:-5},{rotationY:-7,rotationX:0,rotationZ:2,ease:'none',scrollTrigger:{trigger:'.ideas-content',start:'top bottom',end:'bottom 30%',scrub:1}});
  return restoreReveals;
});
mm.add('(min-width: 813px) and (prefers-reduced-motion: no-preference)',()=>{
  ScrollTrigger.create({trigger:'.reel-pin',start:'top 5%',end:'+=100%',pin:true,anticipatePin:1});
});

mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
  const cleanups=[];
  function listen(element,type,handler){element.addEventListener(type,handler);cleanups.push(()=>element.removeEventListener(type,handler));}
  const reel=$('.reel-frame'), cursor=$('.reel-cursor');
  gsap.set(cursor,{xPercent:-50,yPercent:-50,x:0,y:0});
  const cursorX=gsap.quickSetter(cursor,'x','px'),cursorY=gsap.quickSetter(cursor,'y','px');
  const cursorRotation=gsap.quickSetter(cursor,'rotation','deg');
  const follower={inside:false,ready:false,x:0,y:0,clientX:0,clientY:0,rotation:0};
  listen(reel,'pointerenter',event=>{follower.inside=true;follower.ready=false;follower.clientX=event.clientX;follower.clientY=event.clientY;});
  listen(reel,'pointermove',event=>{
    follower.clientX=event.clientX;follower.clientY=event.clientY;
  });
  listen(reel,'pointerleave',()=>{follower.inside=false;follower.ready=false;delete reel.dataset.pointerInside;});
  const buttons=new Set();
  $$('.pill').forEach(button=>{
    const state={button,inside:false,x:0,y:0,clientX:0,clientY:0,setX:gsap.quickSetter(button,'x','px'),setY:gsap.quickSetter(button,'y','px')};
    listen(button,'pointerenter',event=>{state.inside=true;state.clientX=event.clientX;state.clientY=event.clientY;buttons.add(state);});
    listen(button,'pointermove',event=>{
      state.clientX=event.clientX;state.clientY=event.clientY;
    });
    listen(button,'pointerleave',()=>{state.inside=false;});
    listen(button,'focus',()=>{state.inside=false;buttons.add(state);});
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
  listen(window,'blur',()=>{follower.inside=false;delete reel.dataset.pointerInside;buttons.forEach(state=>{state.inside=false;});});
  return ()=>{cleanups.forEach(cleanup=>cleanup());gsap.ticker.remove(tick);buttons.forEach(state=>{state.setX(0);state.setY(0);});buttons.clear();delete reel.dataset.pointerInside;};
});

// Decorative loops share the same visibility lifecycle as the video loops.
const loopElements=$$('.marquee>div,.device-orb');
const visibleLoops=new Set();
function syncLoops(){loopElements.forEach(element=>{element.style.animationPlayState=!reduced&&!document.hidden&&visibleLoops.has(element)?'running':'paused';});}
const loopObserver=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{isIntersecting?visibleLoops.add(target):visibleLoops.delete(target);});syncLoops();});
loopElements.forEach(element=>loopObserver.observe(element));syncLoops();
document.addEventListener('visibilitychange',()=>{syncLoops();$$('.ambient-video').forEach(video=>{if(document.hidden)video.pause();else if(!reduced){const rect=video.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight&&video.src)video.play().catch(()=>{});}});});
const progress=$('.scroll-indicator i');
const header=$('.header');
function updateProgress(){header.toggleAttribute('data-scrolled',scrollY>40);const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`translateY(${Math.max(0,(innerHeight*.2-35)*scrollY/Math.max(1,total))}px)`;}
window.addEventListener('scroll',updateProgress,{passive:true});

// Capture every coalesced input sample, plus the browser's prediction for the next one;
// the trail is drawn in the same frame the input arrives (pointer events are rAF-aligned).
const paint=$('#fluid-canvas'), ctx=paint.getContext('2d'), trail=new PointerTrail();let paintRaf=null;
function resetPaint(){if(paintRaf!==null)cancelAnimationFrame(paintRaf);paintRaf=null;trail.clear();ctx?.clearRect(0,0,innerWidth,innerHeight);}
function sizePaint(){resetPaint();const dpr=Math.min(devicePixelRatio,1.25);paint.width=innerWidth*dpr;paint.height=innerHeight*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);}
sizePaint();window.addEventListener('resize',sizePaint);
window.addEventListener('pointermove',event=>{
  if(!ctx||reduced||document.hidden||event.pointerType!=='mouse'||innerWidth<813)return;
  // Over media the trail stops taking input and retracts instead of vanishing.
  if(event.target.closest('.hero-visual,.media-frame,dialog,.project-image')){trail.break();return;}
  const now=performance.now(),samples=event.getCoalescedEvents?.();
  for(const sample of samples?.length?samples:[event]){
    const timestamp=Math.abs(now-sample.timeStamp)<10000?sample.timeStamp:now;
    trail.push(sample.clientX,sample.clientY,timestamp);
  }
  const predicted=event.getPredictedEvents?.().at(-1);
  if(predicted)trail.predict(predicted.clientX,predicted.clientY);
  if(paintRaf===null)paintRaf=requestAnimationFrame(drawPaint);
},{passive:true});
window.addEventListener('blur',resetPaint);
document.documentElement.addEventListener('pointerleave',()=>trail.break());
document.addEventListener('visibilitychange',resetPaint);
// Each colour band is the original 18% layer stack composited over white. Drawing the bands
// opaque lets overlapping segments merge seamlessly; on the multiply-blended canvas, white is
// invisible, so mixing toward white fades a band out along the trail.
const trailBands=(()=>{
  let colour=[255,255,255];
  return [[173,207,255,34,-3],[230,200,220,27,-1],[185,255,244,20,1],[255,255,255,13,3]].map(([r,g,b,width,offset])=>{
    colour=colour.map((c,i)=>c+([r,g,b][i]-c)*.18);return {colour,width,offset};
  });
})();
const TRAIL_STEPS=32;
function drawPaint(now){
  paintRaf=null;ctx.clearRect(0,0,innerWidth,innerHeight);
  if(reduced||document.hidden){resetPaint();return;}
  const points=trail.frame(now),count=points.length;
  if(count>1){
    // Age drives both width and colour: the tip is strongest, the tail thins and fades.
    const life=points.map(p=>Math.max(0,1-(now-p.t)/trail.lifetime));
    const normals=points.map((p,i)=>{
      const a=points[Math.max(0,i-1)],b=points[Math.min(count-1,i+1)],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy)||1;
      return {x:-dy/length,y:dx/length};
    });
    ctx.lineCap='round';ctx.lineJoin='round';
    for(const {colour,width,offset} of trailBands){
      const at=i=>{const taper=Math.sqrt(life[i]);return {x:points[i].x+normals[i].x*offset*taper,y:points[i].y+normals[i].y*offset*taper};};
      const mid=i=>{const a=at(i),b=at(i+1);return {x:(a.x+b.x)/2,y:(a.y+b.y)/2};};
      // Quadratic segments through midpoints; consecutive segments in the same step share a stroke.
      let step=-1,from=at(0);
      for(let i=0;i<count-1;i++){
        const control=i?at(i):null,to=i<count-2?mid(i):at(i+1);
        const u=(life[i]+life[i+1])/2,next=Math.round(u*TRAIL_STEPS);
        if(next!==step){
          if(step>0)ctx.stroke();
          step=next;const s=step/TRAIL_STEPS,strength=s*(2-s);
          ctx.lineWidth=width*Math.sqrt(s);
          ctx.strokeStyle=`rgb(${colour.map(c=>Math.round(255+(c-255)*strength)).join()})`;
          ctx.beginPath();ctx.moveTo(from.x,from.y);
        }
        control?ctx.quadraticCurveTo(control.x,control.y,to.x,to.y):ctx.lineTo(to.x,to.y);
        from=to;
      }
      if(step>0)ctx.stroke();
    }
  }
  if(trail.active)paintRaf=requestAnimationFrame(drawPaint);
}

initHero(motionQuery);
// Preloader, then the hero intro. The page starts at the top so the intro is what is seen.
if(!reduced){window.history.scrollRestoration='manual';window.scrollTo(0,0);prepareIntro();lenis?.stop();}
playPreloader({reduced,onReveal:skipped=>{if(skipped)return;lenis?.start();playIntro();}});
motionQuery.addEventListener('change',event=>{
  reduced=event.matches;
  syncLoops();
  if(reduced){lenis?.destroy();lenis=null;$$('.ambient-video').forEach(video=>video.pause());resetPaint();}else{startSmoothScroll();if($$('dialog[open]').length)lenis?.stop();$$('.ambient-video').forEach(video=>{if(video.getBoundingClientRect().bottom>0&&video.getBoundingClientRect().top<innerHeight){if(!video.src)video.src=video.dataset.src;video.play().catch(()=>{});}});}
});
window.addEventListener('load',()=>{ScrollTrigger.refresh();updateProgress();});
