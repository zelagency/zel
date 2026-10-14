import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { projects, projectCover } from './projects.js';
import { PointerTrail } from './pointer-trail.js';
import { initPills, initSoundWave, fillPill, drainPill } from './pills.js';
import { playPreloader } from './intro.js';
import { createPageTransition } from './transition.js';
import { mountPage, videoSource, liteData } from './page.js';
import { contact as zelContact } from './contact.js';
import { briefPdf, briefFileName } from './brief-pdf.js';

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
// Sound starts off, so nothing is downloaded until it is first switched on.
// Safari before iOS 18.4 cannot play Ogg Vorbis, so it gets the AAC copies.
const SOUND_EXT=new Audio().canPlayType('audio/ogg; codecs="vorbis"')?'ogg':'m4a';
const SOUNDS=Object.fromEntries(['music','hover','click'].map(type=>[type,`/assets/${type==='music'?'ambient':type}.${SOUND_EXT}`]));
const audio = {
  enabled: false,
  players: {},
  get(type){
    if(!this.players[type]){const player=this.players[type]=new Audio(SOUNDS[type]);if(type==='music'){player.loop=true;player.volume=.3;}}
    return this.players[type];
  },
  pauseMusic(){this.players.music?.pause();},
  play(type) {
    if(!this.enabled||document.hidden) return;
    const player=this.get(type).cloneNode(); player.volume=type==='hover'?.24:.4;
    player.play().catch(()=>{});
  },
  // The button answers at once; music can take a few seconds to start on a slow connection, and is only rolled
  // back if it fails. `attempt` stops a rejection from an earlier tap (pausing rejects a pending play) undoing a later one.
  attempt:0,
  async toggle(){
    this.enabled=!this.enabled;const attempt=++this.attempt;this.render();
    if(!this.enabled){this.pauseMusic();return;}
    this.get('hover');this.get('click');
    try{await this.get('music').play();}catch{if(attempt===this.attempt&&this.enabled){this.enabled=false;this.render();}}
  },
  render(){
    const sound=$('.sound'),on=this.enabled;
    sound.setAttribute('aria-pressed',String(on));sound.setAttribute('aria-label',on?'Disable sound':'Enable sound');sound.title=on?'Sound on':'Sound off';
    soundWave.set(on);
    if(on)fillPill(sound,undefined,undefined,reduced);else if(!sound.matches(':hover'))drainPill(sound,undefined,undefined,reduced);
  }
};
initPills(()=>reduced);
const soundWave=initSoundWave($('.sound'),()=>reduced);
$('.sound').addEventListener('click',()=>audio.toggle());
document.addEventListener('pointerover',event=>{
  const hit=event.target.closest('a,button');
  if(hit&&!hit.contains(event.relatedTarget))audio.play('hover');
});
document.addEventListener('click',event=>{if(event.target.closest('a,button'))audio.play('click');});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pauseMusic();else if(audio.enabled&&!$('#media-dialog').open)audio.get('music').play().catch(()=>{});});

const menu=$('#menu-dialog'), contact=$('#contact-dialog'), media=$('#media-dialog'), lightbox=$('#lightbox');
$$('dialog').forEach(dialog=>dialog.setAttribute('data-lenis-prevent',''));
menu.insertAdjacentHTML('afterbegin','<a class="menu-logo logo" href="/">ZEL</a><button class="dialog-close pill menu-close" aria-label="Close menu">CLOSE ••</button>');
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

// Routing: pages are swapped in place (the header, sound and dialogs persist) under the
// page transition. Any failure falls back to a normal navigation.
const pageTransition=createPageTransition({isReduced:()=>reduced});
const ROUTES=new Set(['/','/about/','/projects/','/contact/']);
const routeOf=pathname=>pathname.endsWith('/')?pathname:pathname+'/';
const toTop=target=>target==='#main'||target==='#home'||target==='#top';
const jumpNow=target=>{
  if(toTop(target)){lenis?lenis.scrollTo(0,{immediate:true,force:true}):window.scrollTo(0,0);return;}
  lenis?lenis.scrollTo(target,{offset:-80,immediate:true,force:true}):$(target)?.scrollIntoView({behavior:'instant'});
};
const scrollToHash=hash=>{
  if(toTop(hash)){lenis?lenis.scrollTo(0):window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});return true;}
  if(!$(hash))return false;jump(hash);return true;
};
let page=null,currentRoute=routeOf(location.pathname),navigating=false;
function syncNav(){
  $$('#menu-dialog nav a,.site-footer nav a').forEach(link=>{
    if(routeOf(new URL(link.href).pathname)===currentRoute)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
}
function mount(){page=mountPage({root:$('[data-page-root]'),footer:$('.site-footer'),motionQuery,isReduced:()=>reduced,ui:{openProject,openReel,navigate}});}
async function navigate(href,{push=true}={}){
  const url=new URL(href,location.href),route=routeOf(url.pathname);
  if(navigating||pageTransition.running)return;
  if(route===currentRoute){if(menu.open)menu.close();if(!url.hash||!scrollToHash(url.hash))scrollToHash('#main');return;}
  navigating=true;
  const request=fetch(route,{headers:{Accept:'text/html'}}).then(response=>{if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.text();});
  try{
    await pageTransition.cover();
    const doc=new DOMParser().parseFromString(await request,'text/html');
    const nextMain=doc.querySelector('[data-page-root]'),nextFooter=doc.querySelector('.site-footer');
    if(!nextMain)throw new Error('No page content');
    $$('dialog[open]').forEach(dialog=>dialog.close());
    page?.unmount();
    $('[data-page-root]').innerHTML=nextMain.innerHTML;
    if(nextFooter)$('.site-footer').replaceWith(document.importNode(nextFooter,true));
    document.title=doc.title;document.body.dataset.page=doc.body.dataset.page||'';
    const description=doc.querySelector('meta[name="description"]')?.content;
    if(description)$('meta[name="description"]').content=description;
    if(push)history.pushState(null,'',url);
    currentRoute=route;syncNav();
    jumpNow('#main');
    mount();page.prepareIntro();
    ScrollTrigger.refresh();
    if(url.hash)jumpNow(url.hash);
    await pageTransition.reveal({onOpen:()=>page.playIntro()});
  }catch(error){console.error(error);location.href=url.href;}
  finally{navigating=false;}
}
document.addEventListener('click',event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const link=event.target.closest('a[href]');if(!link||link.target||link.hasAttribute('download'))return;
  const url=new URL(link.href,location.href);if(url.origin!==location.origin)return;
  const route=routeOf(url.pathname),inMenu=!!link.closest('#menu-dialog');
  if(route===currentRoute){
    // Same page: anchors scroll smoothly; the menu closes first.
    event.preventDefault();if(menu.open)menu.close();
    if(!url.hash||!scrollToHash(url.hash))scrollToHash('#main');
    return;
  }
  if(!ROUTES.has(route))return;
  event.preventDefault();navigate(url.href);
});
window.addEventListener('popstate',()=>{if(routeOf(location.pathname)!==currentRoute)navigate(location.href,{push:false});});
// Contact triggers live in pages, the footer and the menu, so one delegated listener covers them.
document.addEventListener('click',event=>{if(!event.target.closest('[data-contact]'))return;if(menu.open)menu.close();showDialog(contact);});
$$('[data-close]').forEach(button=>button.addEventListener('click',()=>dismissDialog(button.closest('dialog'))));
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('cancel',event=>{event.preventDefault();dismissDialog(dialog);});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dismissDialog(dialog);}});
  dialog.addEventListener('close',()=>{delete dialog.dataset.opening;unlockScroll();});
});
// Project brief forms (contact dialog and contact page) ask three short steps: what, when, then who.
// Taps come first and contact details last, so starting costs nothing.
function showBriefStep(form,step){
  form.dataset.step=String(step);
  $('[data-brief-count]',form).textContent=String(step);
  $('.brief-error',form).textContent='';
  const current=$(`.brief-step[data-index="${step}"]`,form);
  if(!reduced)current.animate?.([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:380,easing:'cubic-bezier(.22,1,.36,1)'});
  current.querySelector('legend').focus({preventScroll:true});
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-brief-next],[data-brief-back]');if(!button)return;
  const form=button.closest('form[data-brief-form]'),step=Number(form.dataset.step);
  if(button.hasAttribute('data-brief-back')){showBriefStep(form,step-1);return;}
  const missing=step===1&&!form.querySelector('[name="needs"]:checked')?'Pick at least one, so we know where to start.'
    :step===2&&!form.querySelector('[name="timeline"]:checked')?'Pick a launch window, even a rough one.':'';
  if(missing)$('.brief-error',form).textContent=missing;else showBriefStep(form,step+1);
});
const briefUrls=new WeakMap();
document.addEventListener('submit',event=>{
  const form=event.target.closest('form[data-brief-form]');if(!form)return;
  event.preventDefault();const values=new FormData(form);
  if(briefUrls.has(form))URL.revokeObjectURL(briefUrls.get(form));
  const answers={name:values.get('name').trim(),email:values.get('email').trim(),needs:values.getAll('needs'),timeline:values.get('timeline'),notes:values.get('project').trim()};
  const brief=`ZEL — Project brief\n\nName: ${answers.name}\nEmail: ${answers.email}\n\n`+
    `Building: ${answers.needs.join(', ')||'Not given'}\nIdeal launch: ${answers.timeline||'Not given'}\n\n`+
    `Notes\n${answers.notes||'None'}\n`;
  // The email carries the brief as text; the download is the designed PDF.
  const url=URL.createObjectURL(new Blob([briefPdf(answers)],{type:'application/pdf'}));briefUrls.set(form,url);
  const status=$('.form-status',form);
  status.innerHTML='Your brief is ready: <a class="brief-send">email it to us ↗</a> &nbsp;·&nbsp; <a class="brief-download">download the PDF ↗</a>';
  $('.brief-send',status).href=`mailto:${zelContact.email}?subject=${encodeURIComponent(`Project brief from ${answers.name}`)}&body=${encodeURIComponent(brief)}`;
  $('.brief-download',status).href=url;$('.brief-download',status).download=briefFileName(answers.name);
});
media.addEventListener('close',()=>{delete media.dataset.reel;const video=$('video',media);video?.pause();$('.media-dialog-content').replaceChildren();if(audio.enabled)audio.get('music').play().catch(()=>{});});
// The case study leads with every screenshot, customer side first, on a 12-column grid whose rows
// always fill (each shot's span comes from projects.js).
let shots=[];
function renderProject(index){
  const project=projects[index];let n=0;
  shots=project.gallery.flatMap(group=>group.shots.map(shot=>({...shot,group:group.label})));
  const groups=project.gallery.map(group=>`<section class="shots-group"><header class="shots-head"><h3>${group.label}</h3><p>${group.note}</p></header><div class="shots">${group.shots.map(shot=>`<button class="shot shot-${shot.size}" style="--span:${shot.span}" data-shot="${n++}" aria-label="View ${shot.alt}"><img src="${shot.thumb}" alt="" loading="lazy" decoding="async"><span class="shot-caption">${shot.alt}</span><span class="shot-open" aria-hidden="true">↗</span></button>`).join('')}</div></section>`).join('');
  $('.media-dialog-content').innerHTML=`<article class="case-study"><div class="case-heading"><div><h2>${project.title}</h2><p>${project.type}</p></div><a class="pill white" href="${project.url}" target="_blank" rel="noopener">VISIT LIVE SITE ↗</a></div><div class="case-shots">${groups}</div><div class="case-description"><p>${project.description}</p><ul>${project.features.map(feature=>`<li>${feature}</li>`).join('')}</ul></div><button class="case-back" data-back-projects>← Back to all projects</button></article>`;
  $('[data-back-projects]',media).addEventListener('click',renderGallery);
  $('.media-dialog-content').scrollTop=0;
}
// Dialogs open out of whatever was clicked: clipped to its rectangle in the site blue, the dialog
// grows to its full size while settling to its own surface, and its contents rise in behind.
function openFrom(dialog,origin,open){
  const grow=!reduced&&!!dialog.animate&&!!origin;
  // Kept until close: removing it while open would re-enable the CSS entrance and replay it.
  if(grow)dialog.dataset.opening='';
  open();
  if(!grow)return;
  const from=origin.getBoundingClientRect(),to=dialog.getBoundingClientRect(),radius=getComputedStyle(origin).borderTopLeftRadius;
  const inset=[from.top-to.top,to.right-from.right,to.bottom-from.bottom,from.left-to.left].map(v=>`${Math.max(0,v)}px`).join(' ');
  const surface=getComputedStyle(dialog).backgroundColor,blue=getComputedStyle(document.documentElement).getPropertyValue('--blue');
  dialog.animate([
    {clipPath:`inset(${inset} round ${radius})`,backgroundColor:blue},
    {backgroundColor:blue,offset:.3},
    {clipPath:`inset(0px round ${getComputedStyle(dialog).borderTopLeftRadius})`,backgroundColor:surface}
  ],{duration:620,easing:'cubic-bezier(.4,0,.1,1)'});
  [...dialog.children].forEach((child,i)=>child.animate([{opacity:0,transform:'translateY(48px)'},{opacity:1,transform:'none'}],{duration:520,delay:260+i*50,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}));
  try{dialog.animate({opacity:[0,1]},{duration:400,pseudoElement:'::backdrop'});}catch{}
}
function openProject(index,card){
  if(media.open||pageTransition.running)return;
  renderProject(index);openFrom(media,card,()=>showDialog(media));
}

// Screenshot gallery: arrows, ←/→/Home/End, swipe, or the thumbnail strip. Captures taller than
// they are wide (full analytics pages, reports) scroll at full width instead of shrinking to fit.
const stage=$('.lightbox-stage'),stageImage=$('img',stage),strip=$('.lightbox-thumbs');
let current=0;
stageImage.addEventListener('load',()=>{
  const shot=shots[current],tall=stageImage.naturalHeight>stageImage.naturalWidth;
  stage.toggleAttribute('data-scroll',tall&&shot?.size!=='phone'&&shot?.size!=='photo');
});
function showShot(index,direction=0){
  current=Math.max(0,Math.min(shots.length-1,index));const shot=shots[current];
  $('.lightbox-count').textContent=`${String(current+1).padStart(2,'0')} / ${String(shots.length).padStart(2,'0')}`;
  $('.lightbox-group').textContent=shot.group;$('.lightbox-caption').textContent=shot.alt;
  stageImage.src=shot.src;stageImage.alt=shot.alt;stage.scrollTop=0;
  $$('[data-step]',lightbox).forEach(button=>{const to=current+Number(button.dataset.step);button.disabled=to<0||to>=shots.length;});
  const thumbs=[...strip.children];
  thumbs.forEach((button,i)=>button.toggleAttribute('aria-current',i===current));
  thumbs[current]?.scrollIntoView?.({block:'nearest',inline:'center',behavior:reduced?'instant':'smooth'});
  if(direction&&!reduced&&stageImage.animate)stageImage.animate([{opacity:0,transform:`translateX(${direction*40}px)`},{opacity:1,transform:'none'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)'});
  // Warm the neighbours so stepping through feels instant.
  [current-1,current+1].forEach(i=>{if(shots[i])document.createElement('img').src=shots[i].src;});
}
function step(by){if(shots[current+by])showShot(current+by,by);}
media.addEventListener('click',event=>{
  const tile=event.target.closest('[data-shot]');if(!tile||lightbox.open)return;
  strip.innerHTML=shots.map(shot=>`<button aria-label="${shot.alt}"><img src="${shot.thumb}" alt="" loading="lazy" decoding="async"></button>`).join('');
  showShot(Number(tile.dataset.shot));
  openFrom(lightbox,tile,()=>lightbox.showModal());
});
strip.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;const i=[...strip.children].indexOf(button);showShot(i,Math.sign(i-current));});
$$('[data-step]',lightbox).forEach(button=>button.addEventListener('click',()=>step(Number(button.dataset.step))));
lightbox.addEventListener('keydown',event=>{
  const keys={ArrowLeft:()=>step(-1),ArrowRight:()=>step(1),Home:()=>showShot(0,-1),End:()=>showShot(shots.length-1,1)};
  if(keys[event.key]){event.preventDefault();keys[event.key]();}
});
// A horizontal swipe steps; vertical drags stay scrolls. A tap beside the image closes.
let swipe=null,swiped=false;
stage.addEventListener('pointerdown',event=>{swipe={x:event.clientX,y:event.clientY};swiped=false;});
stage.addEventListener('pointerup',event=>{
  if(!swipe)return;const dx=event.clientX-swipe.x,dy=event.clientY-swipe.y;swipe=null;
  if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.2){swiped=true;step(dx<0?1:-1);}
});
stage.addEventListener('pointercancel',()=>{swipe=null;});
stage.addEventListener('click',event=>{if(event.target===stage&&!swiped)dismissDialog(lightbox);});
lightbox.addEventListener('close',()=>media.querySelector(`[data-shot="${current}"]`)?.focus());
function renderGallery(){
  $('.media-dialog-content').innerHTML='<h2>Selected projects</h2><div class="gallery-grid">'+projects.map((project,i)=>`<button data-gallery-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span>${project.title} ↗</span></button>`).join('')+'</div>';
  $$('[data-gallery-project]',media).forEach(button=>button.addEventListener('click',()=>renderProject(Number(button.dataset.galleryProject))));
  $('.media-dialog-content').scrollTop=0;
}
function openReel(){
  const portrait=innerWidth<innerHeight*1.2,cut=portrait?'-4x5':'';
  // The reel just plays: no player chrome, only the close button.
  $('.media-dialog-content').innerHTML=`<video src="/assets/zel-reel${cut}.mp4" poster="/assets/zel-reel${cut}-poster.jpg" playsinline loop aria-label="ZEL reel: we take your business digital"></video>`;
  media.dataset.reel='';showDialog(media);audio.pauseMusic();const video=$('video',media);video.muted=!audio.enabled;
  // Without controls there is no way to start a blocked play, so fall back to muted, and as a last resort show controls.
  video.play().catch(()=>{video.muted=true;video.play().catch(()=>{video.controls=true;});});
}

const progress=$('.scroll-indicator i');
const header=$('.header');
function updateProgress(){header.toggleAttribute('data-scrolled',scrollY>40);const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`translateY(${Math.max(0,(innerHeight*.2-35)*scrollY/Math.max(1,total))}px)`;}
window.addEventListener('scroll',updateProgress,{passive:true});

// Capture every coalesced input sample, plus the browser's prediction for the next one;
// the trail is drawn in the same frame the input arrives (pointer events are rAF-aligned).
const paint=$('#fluid-canvas'), ctx=paint.getContext('2d'), trail=new PointerTrail();let paintRaf=null;
function resetPaint(){if(paintRaf!==null)cancelAnimationFrame(paintRaf);paintRaf=null;trail.clear();ctx?.clearRect(0,0,innerWidth,innerHeight);}
// The backing store is only allocated once a mouse moves, so touch screens never pay for it.
let paintSized=false;
function sizePaint(){resetPaint();if(!paintSized)return;const dpr=Math.min(devicePixelRatio,1.25);paint.width=innerWidth*dpr;paint.height=innerHeight*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);}
paint.width=paint.height=0;window.addEventListener('resize',sizePaint);
window.addEventListener('pointermove',event=>{
  if(!ctx||reduced||document.hidden||event.pointerType!=='mouse'||innerWidth<813)return;
  if(!paintSized){paintSized=true;sizePaint();}
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


// First load: preloader, then the page intro. The page starts at the top so the intro is what is seen.
if(!reduced){window.history.scrollRestoration='manual';window.scrollTo(0,0);lenis?.stop();}
mount();page.prepareIntro({header:true});syncNav();
playPreloader({reduced,onReveal:skipped=>{if(skipped)return;lenis?.start();page.playIntro({header:true});}});
motionQuery.addEventListener('change',event=>{
  reduced=event.matches;
  if(reduced){lenis?.destroy();lenis=null;$$('.ambient-video').forEach(video=>video.pause());resetPaint();}else{startSmoothScroll();if($$('dialog[open]').length)lenis?.stop();$$('.ambient-video').forEach(video=>{if(video.getBoundingClientRect().bottom>0&&video.getBoundingClientRect().top<innerHeight){if(liteData())return;if(!video.src)video.src=videoSource(video);video.play().catch(()=>{});}});}
});
// ScrollTrigger refreshes itself on load (its default autoRefreshEvents); only the progress bar needs a nudge.
window.addEventListener('load',updateProgress);
