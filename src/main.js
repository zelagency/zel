import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { projects, projectCover } from './projects.js';
import { FIXED_STEP, damp, stepBody } from './motion.js';

gsap.registerPlugin(ScrollTrigger);
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
$('#project-grid').innerHTML = projects.map((project,i)=>`<article class="project ${i===0?'project-featured':''}" data-project-id="${project.id}"><button class="project-image" data-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span class="project-arrow" aria-hidden="true">↗</span></button><p class="project-meta">${project.tags}</p><div class="project-title"><h3>${project.title}</h3><a href="${project.url}" target="_blank" rel="noopener" aria-label="Visit ${project.title} live website">VISIT SITE ↗</a></div><p class="project-summary">${project.description}</p></article>`).join('');

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
    $('.sound').setAttribute('aria-pressed',String(this.enabled));
    $('.sound').setAttribute('aria-label',this.enabled?'Disable sound':'Enable sound');
    $('.sound').title=this.enabled?'Sound on':'Sound off';
  }
};
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
const lockScroll=()=>{lenis?.stop();document.body.style.overflow='hidden';};
const unlockScroll=()=>{if($$('dialog[open]').length)return;lenis?.start();document.body.style.overflow='';previousFocus?.focus();};
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
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=link.getAttribute('href');if(!$(target))return;
  event.preventDefault();if(menu.open){menu.close();}jump(target);
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
function openProject(index){renderProject(index);showDialog(media);}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(Number(button.dataset.project))));
function renderGallery(){
  $('.media-dialog-content').innerHTML='<h2>Selected projects</h2><div class="gallery-grid">'+projects.map((project,i)=>`<button data-gallery-project="${i}" aria-label="Explore ${project.title}">${projectCover(project)}<span>${project.title} ↗</span></button>`).join('')+'</div>';
  $$('[data-gallery-project]',media).forEach(button=>button.addEventListener('click',()=>renderProject(Number(button.dataset.galleryProject))));
  media.scrollTop=0;
}
$('#all-projects').addEventListener('click',()=>{renderGallery();showDialog(media);});
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
  gsap.from('.hero h1',{y:30,opacity:.65,duration:1.15,ease:'power3.out'});
  gsap.from('.hero-visual',{scale:.97,duration:1.5,ease:'power3.out'});
  gsap.to('.hero h1',{y:-70,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  $$('.about-title .line').forEach((line,i)=>gsap.from(line,{x:i?-90:100,rotate:i?1.2:-1.2,ease:'power2.out',scrollTrigger:{trigger:'.about',start:'top 85%',end:'top 20%',scrub:1}}));
  $$('.ribbon path').forEach(path=>{const length=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:path.closest('section'),start:'top 90%',end:'bottom 70%',scrub:1.2}});});
  gsap.from('.flower-frame',{y:90,rotation:-3,ease:'none',scrollTrigger:{trigger:'.about-content',start:'top bottom',end:'bottom 30%',scrub:1}});
  gsap.from('.reel-frame',{scale:.86,ease:'power1.inOut',scrollTrigger:{trigger:'.reel',start:'top bottom',end:'top 5%',scrub:1}});
  $$('.project-image').forEach(image=>gsap.from(image,{y:32,ease:'power2.out',scrollTrigger:{trigger:image,start:'top 95%',end:'top 55%',scrub:.6}}));
  $$('#ideas-title .line').forEach((line,i)=>gsap.from(line,{x:i===1?-65:65,ease:'power1.out',scrollTrigger:{trigger:'#ideas',start:'top 90%',end:'top 10%',scrub:1}}));
  gsap.fromTo('.device',{rotationY:15,rotationX:12,rotationZ:-5},{rotationY:-7,rotationX:0,rotationZ:2,ease:'none',scrollTrigger:{trigger:'.ideas-content',start:'top bottom',end:'bottom 30%',scrub:1}});
  return ()=>{};
});
mm.add('(min-width: 813px) and (prefers-reduced-motion: no-preference)',()=>{
  ScrollTrigger.create({trigger:'.reel-pin',start:'top 5%',end:'+=100%',pin:true,anticipatePin:1});
});

mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
  const cleanups=[];
  function listen(element,type,handler){element.addEventListener(type,handler);cleanups.push(()=>element.removeEventListener(type,handler));}
  const reel=$('.reel-frame'), cursor=$('.reel-cursor');
  gsap.set(cursor,{xPercent:-50,yPercent:-50,x:0,y:0});
  const cursorX=gsap.quickTo(cursor,'x',{duration:.32,ease:'power3.out'});
  const cursorY=gsap.quickTo(cursor,'y',{duration:.32,ease:'power3.out'});
  const cursorRotation=gsap.quickTo(cursor,'rotation',{duration:.5,ease:'power3.out'});
  listen(reel,'pointermove',event=>{
    const rect=reel.getBoundingClientRect();
    cursorX(event.clientX-rect.left);cursorY(event.clientY-rect.top);
    cursorRotation(gsap.utils.clamp(-12,12,(event.movementX||0)*.4));
  });
  $$('.pill').forEach(button=>{
    let rect;
    const x=gsap.quickTo(button,'x',{duration:.45,ease:'power3.out'});
    const y=gsap.quickTo(button,'y',{duration:.45,ease:'power3.out'});
    listen(button,'pointerenter',()=>{rect=button.getBoundingClientRect();});
    listen(button,'pointermove',event=>{
      if(!rect||event.pointerType!=='mouse')return;
      x((event.clientX-rect.left-rect.width/2)*.12);y((event.clientY-rect.top-rect.height/2)*.16);
    });
    listen(button,'pointerleave',()=>{x(0);y(0);rect=null;});
    listen(button,'focus',()=>{x(0);y(0);});
  });
  return ()=>cleanups.forEach(cleanup=>cleanup());
});

// Decorative loops share the same visibility lifecycle as the video loops.
const loopElements=$$('.marquee>div,.device-orb');
const visibleLoops=new Set();
function syncLoops(){loopElements.forEach(element=>{element.style.animationPlayState=!reduced&&!document.hidden&&visibleLoops.has(element)?'running':'paused';});}
const loopObserver=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{isIntersecting?visibleLoops.add(target):visibleLoops.delete(target);});syncLoops();});
loopElements.forEach(element=>loopObserver.observe(element));syncLoops();
document.addEventListener('visibilitychange',()=>{syncLoops();$$('.ambient-video').forEach(video=>{if(document.hidden)video.pause();else if(!reduced){const rect=video.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight&&video.src)video.play().catch(()=>{});}});});
const progress=$('.scroll-indicator i');
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`translateY(${Math.max(0,(innerHeight*.2-35)*scrollY/Math.max(1,total))}px)`;}
window.addEventListener('scroll',updateProgress,{passive:true});

// Iridescent pointer paint. Each point fades out; no persistent drawing surface.
const paint=$('#fluid-canvas'), ctx=paint.getContext('2d');let trail=[], paintRaf;
function sizePaint(){const dpr=Math.min(devicePixelRatio,1.25);paint.width=innerWidth*dpr;paint.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
sizePaint();window.addEventListener('resize',sizePaint);
window.addEventListener('pointermove',event=>{
  if(reduced||event.pointerType!=='mouse'||innerWidth<813||event.target.closest('.hero-visual,.media-frame,dialog,.project-image'))return;
  const now=performance.now(),previous=trail.at(-1);
  if(previous&&now-previous.t<16)return;
  trail.push({x:event.clientX,y:event.clientY,t:now});if(trail.length>40)trail.shift();if(!paintRaf)paintRaf=requestAnimationFrame(drawPaint);
});
function drawPaint(now){
  ctx.clearRect(0,0,innerWidth,innerHeight);trail=trail.filter(p=>now-p.t<750);
  if(reduced||document.hidden){trail=[];paintRaf=null;return;}
  if(trail.length>2){
    for(let layer=0;layer<4;layer++){
      const first=trail[0],last=trail.at(-1),color=['#acdfff','#eaccc0','#b9fff4','#ffffff'][layer];
      const gradient=ctx.createLinearGradient(first.x,first.y,last.x+.01,last.y+.01);
      gradient.addColorStop(0,'transparent');gradient.addColorStop(1,color);
      ctx.lineWidth=42-layer*8;ctx.lineCap='round';ctx.lineJoin='round';ctx.shadowBlur=layer===0?12:0;
      ctx.strokeStyle=gradient;ctx.shadowColor=color;ctx.globalAlpha=(1-(now-last.t)/750)*.16;
      ctx.beginPath();ctx.moveTo(first.x,first.y+layer*3);
      for(let i=1;i<trail.length-1;i++){
        const p=trail[i],next=trail[i+1];ctx.quadraticCurveTo(p.x,p.y+layer*3,(p.x+next.x)/2,(p.y+next.y)/2+layer*3);
      }
      ctx.lineTo(last.x,last.y+layer*3);ctx.stroke();
    }
    ctx.globalAlpha=1;ctx.shadowBlur=0;
  }
  paintRaf=trail.length?requestAnimationFrame(drawPaint):null;
}

// A custom 3D sculpture, with hollow rounded cylinders and damped pointer physics.
function initHero(){
  const canvas=$('#hero-canvas'), host=$('#hero-visual');
  let renderer;
  try {renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});}catch{return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.83;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(0,0,14);
  const pmrem=new THREE.PMREMGenerator(renderer), room=new RoomEnvironment();
  const env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();pmrem.dispose();
  scene.add(new THREE.AmbientLight(0xffffff,.3));
  const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-4,7,9);scene.add(key);
  const rim=new THREE.DirectionalLight(0x6274ff,2);rim.position.set(5,-2,-4);scene.add(rim);
  const fill=new THREE.DirectionalLight(0xffffff,1.5);fill.position.set(7,3,1);scene.add(fill);
  const materials=[
    new THREE.MeshStandardMaterial({color:0x08090b,metalness:.45,roughness:.29,envMapIntensity:.45}),
    new THREE.MeshStandardMaterial({color:0x1114c4,metalness:.35,roughness:.26,envMapIntensity:.5}),
    new THREE.MeshStandardMaterial({color:0xd9d9df,metalness:.4,roughness:.32,envMapIntensity:.65})
  ];
  const profile=[new THREE.Vector2(.17,-.8),new THREE.Vector2(.43,-.8),new THREE.Vector2(.49,-.76),new THREE.Vector2(.5,-.69),new THREE.Vector2(.5,.69),new THREE.Vector2(.49,.76),new THREE.Vector2(.43,.8),new THREE.Vector2(.17,.8),new THREE.Vector2(.14,.74),new THREE.Vector2(.14,-.74),new THREE.Vector2(.17,-.8)];
  const cylinder=new THREE.LatheGeometry(profile,40);
  const core=new THREE.SphereGeometry(.51,20,16);
  const horizontal=cylinder.clone().rotateZ(Math.PI/2),depth=cylinder.clone().rotateX(Math.PI/2);
  const sculpture=mergeGeometries([cylinder,horizontal,depth,core]);
  cylinder.dispose();horizontal.dispose();depth.dispose();core.dispose();
  const cluster=new THREE.Group();scene.add(cluster);const pieces=[];
  const batches=materials.map(material=>{
    const mesh=new THREE.InstancedMesh(sculpture,material,48);mesh.count=0;mesh.frustumCulled=false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);cluster.add(mesh);return mesh;
  });
  let seed=209;const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
  for(let z=0;z<3;z++)for(let y=0;y<4;y++)for(let x=0;x<4;x++){
    if(random()<.13)continue;
    const piece=new THREE.Object3D(), batch=batches[z===2?0:Math.floor(random()*3)];
    const scale=.85+random()*.18;piece.scale.setScalar(scale);
    piece.position.set((x-1.5)*1.65+(random()-.5)*.9,(y-1.5)*1.63+(random()-.5)*.7,(z-1)*1.45);
    piece.rotation.set(random()*3,random()*3,random()*3);
    piece.userData={origin:piece.position.clone(),rotation:piece.rotation.clone(),v:new THREE.Vector3(),spin:new THREE.Vector3((random()-.5)*.05,(random()-.5)*.05,(random()-.5)*.05),phase:random()*6,batch,index:batch.count++};
    pieces.push(piece);
  }
  cluster.rotation.z=-.12;
  const pointer=new THREE.Vector2(), eased=new THREE.Vector2(), raycaster=new THREE.Raycaster();
  let visible=true,last=0,time=0,accumulator=0,dragging=false,dragDistance=0,burst=0,burstTarget=0,raf=null,contextLost=false;
  const lastPointer=new THREE.Vector2(),dragOffset=new THREE.Vector2(),impulse=new THREE.Vector3();
  function upload(){pieces.forEach(piece=>{piece.updateMatrix();piece.userData.batch.setMatrixAt(piece.userData.index,piece.matrix);});batches.forEach(batch=>{batch.instanceMatrix.needsUpdate=true;batch.boundingSphere=null;});}
  function schedule(){if(visible&&!document.hidden&&!motionQuery.matches&&!contextLost&&raf===null){last=0;raf=requestAnimationFrame(frame);}}
  function syncFrame(){if(raf!==null){cancelAnimationFrame(raf);raf=null;}accumulator=0;schedule();}
  function resize(){const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();cluster.scale.setScalar(camera.aspect<1.2?.64:1.12);upload();renderer.render(scene,camera);}
  new ResizeObserver(resize).observe(host);resize();
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;syncFrame();}).observe(host);
  document.addEventListener('visibilitychange',syncFrame);
  host.addEventListener('pointermove',event=>{
    const r=host.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-((event.clientY-r.top)/r.height*2-1));
    if(dragging&&!reduced){const dx=event.clientX-lastPointer.x,dy=event.clientY-lastPointer.y;dragOffset.x+=dx*.004;dragOffset.y+=dy*.002;dragDistance+=Math.abs(dx)+Math.abs(dy);lastPointer.set(event.clientX,event.clientY);}
  });
  host.addEventListener('pointerdown',event=>{dragging=true;dragDistance=0;lastPointer.set(event.clientX,event.clientY);});
  window.addEventListener('pointerup',()=>{dragging=false;});
  host.addEventListener('pointerleave',()=>{pointer.set(0,0);dragging=false;});
  host.addEventListener('click',()=>{
    if(reduced||dragDistance>8)return;
    raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(cluster.children,true)[0];
    const center=hit?.point||new THREE.Vector3(0,0,1);const local=cluster.worldToLocal(center.clone());
    pieces.forEach(piece=>{impulse.copy(piece.position).sub(local);impulse.z+=2;impulse.normalize().multiplyScalar(5.4+random()*3.6);piece.userData.v.add(impulse);});burstTarget=1;
  });
  function frame(now){
    raf=null;const dt=last?Math.min((now-last)/1000,.05):FIXED_STEP;last=now;
    if(!visible||document.hidden||motionQuery.matches||contextLost)return;
    accumulator+=dt;
    while(accumulator>=FIXED_STEP-1e-10){time+=FIXED_STEP;pieces.forEach(piece=>stepBody(piece,time));accumulator-=FIXED_STEP;}
    eased.x=damp(eased.x,pointer.x,5,dt);eased.y=damp(eased.y,pointer.y,5,dt);
    burst=damp(burst,burstTarget,15,dt);burstTarget=damp(burstTarget,0,3,dt);
    if(!dragging){dragOffset.x=damp(dragOffset.x,0,1.8,dt);dragOffset.y=damp(dragOffset.y,0,1.8,dt);}
    cluster.rotation.y=damp(cluster.rotation.y,eased.x*.24+dragOffset.x,dragging?12:4,dt);
    cluster.rotation.x=damp(cluster.rotation.x,-eased.y*.12+dragOffset.y,dragging?12:4,dt);
    pieces.forEach(piece=>{
      const d=piece.userData;
      piece.rotation.x=d.rotation.x+Math.sin(time*.2+d.phase)*.09+burst*d.spin.x*8;
      piece.rotation.y=d.rotation.y+Math.cos(time*.22+d.phase)*.1;
    });
    upload();renderer.render(scene,camera);raf=requestAnimationFrame(frame);
  }
  renderer.render(scene,camera);canvas.classList.add('ready');$('.hero-fallback').style.visibility='hidden';
  schedule();
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;syncFrame();canvas.classList.remove('ready');$('.hero-fallback').style.visibility='visible';});
  canvas.addEventListener('webglcontextrestored',()=>{contextLost=false;upload();renderer.render(scene,camera);canvas.classList.add('ready');$('.hero-fallback').style.visibility='hidden';schedule();});
  motionQuery.addEventListener('change',()=>{syncFrame();renderer.render(scene,camera);});
}
initHero();
motionQuery.addEventListener('change',event=>{
  reduced=event.matches;
  syncLoops();
  if(reduced){lenis?.destroy();lenis=null;$$('.ambient-video').forEach(video=>video.pause());trail=[];ctx.clearRect(0,0,innerWidth,innerHeight);}else{startSmoothScroll();if($$('dialog[open]').length)lenis?.stop();$$('.ambient-video').forEach(video=>{if(video.getBoundingClientRect().bottom>0&&video.getBoundingClientRect().top<innerHeight){if(!video.src)video.src=video.dataset.src;video.play().catch(()=>{});}});}
});
window.addEventListener('load',()=>{ScrollTrigger.refresh();updateProgress();});
