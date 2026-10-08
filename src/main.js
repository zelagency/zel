import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = motionQuery.matches;
const projects = [
  ['oryzo_ai','Oryzo AI','Concept • Web • Design • Development • 3D • Animation'],
  ['atlas_motion','Atlas Motion','Concept • Web • Design • Development • 3D • Animation'],
  ['devin_ai','Devin AI','Web • Design • Development • 3D'],
  ['of_the_oak','Of The Oak','Web • Design • Development • 3D • Animation'],
  ['everswap','Everswap','Concept • Web • Design • Development • 3D • Animation'],
  ['porsche_dream_machine','Porsche: Dream Machine','Concept • 3D Illustration • Motion • Video'],
  ['synthetic_human','Synthetic Human','Web • Design • Development • 3D'],
  ['spatial_fusion','Spatial Fusion','Web • Design • Development • 3D'],
  ['spaace','Spaace','Web • Design • Development • 3D'],
  ['ddd_2024','DDD 2024','Web • Design • Development • 3D'],
  ['choo_choo_world','Choo Choo World','Concept • Web • Game Design • 3D'],
  ['soda_experience','Soda Experience','AR • Development • 3D']
];
$('#project-grid').innerHTML = projects.map(([id,title,tags],i)=>`<article class="project"><button class="project-image" data-project="${i}" aria-label="Explore ${title}, visual reference"><img src="/assets/${id}.webp" alt="${title} — immersive digital visual by Lusion" width="1000" height="650" loading="lazy" decoding="async"><span class="project-arrow" aria-hidden="true">↗</span></button><p class="project-meta">${tags}</p><h3 class="project-title">${title}<small>VISUAL REFERENCE</small></h3></article>`).join('');

// Smooth scroll is deliberately slow enough to give the visual sequence room.
let lenis;
if (!reduced) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time*1000));
  gsap.ticker.lagSmoothing(0);
}
const jump = target => lenis ? lenis.scrollTo(target,{offset:0}) : $(target)?.scrollIntoView({behavior:reduced?'instant':'smooth'});
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
function closeMenu(){menu.close();$('.menu-button').setAttribute('aria-expanded','false');unlockScroll();}
$('.menu-button').addEventListener('click',()=>{showDialog(menu);$('.menu-button').setAttribute('aria-expanded','true');});
$('.menu-close').addEventListener('click',closeMenu);
menu.addEventListener('close',()=>{$('.menu-button').setAttribute('aria-expanded','false');unlockScroll();});
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const target=link.getAttribute('href');if(!$(target))return;
  event.preventDefault();if(menu.open)closeMenu();jump(target);
}));
$$('[data-contact]').forEach(button=>button.addEventListener('click',()=>{if(menu.open)closeMenu();showDialog(contact);}));
$$('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
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
function openProject(index){
  const [id,title]=projects[index];
  $('.media-dialog-content').innerHTML=`<img src="/assets/${id}.webp" alt="${title} visual reference"><h2>${title}</h2><p class="media-credit">Visual reference by Lusion. Shown here as a design study, rather than ZEL client work.<br><a href="https://lusion.co/projects/${id}" target="_blank" rel="noopener">Explore the original project ↗</a></p>`;
  showDialog(media);
}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(Number(button.dataset.project))));
$('#all-projects').addEventListener('click',()=>{
  $('.media-dialog-content').innerHTML='<h2>Explore the visual collection</h2><div class="gallery-grid">'+projects.map(([id,title],i)=>`<button data-gallery-project="${i}"><img src="/assets/${id}.webp" alt="${title}" loading="lazy"><span>${title} ↗</span></button>`).join('')+'</div><p class="media-credit">Reference imagery by Lusion · ZEL visual study</p>';
  showDialog(media);
  $$('[data-gallery-project]',media).forEach(button=>button.addEventListener('click',()=>{
    const [id,title]=projects[Number(button.dataset.galleryProject)];
    $('.media-dialog-content').innerHTML=`<img src="/assets/${id}.webp" alt="${title}"><h2>${title}</h2><p class="media-credit">Visual reference by Lusion.<br><a href="https://lusion.co/projects/${id}" target="_blank" rel="noopener">Explore the original project ↗</a></p>`;
  }));
});
$$('[data-reel]').forEach(button=>button.addEventListener('click',()=>{
  $('.media-dialog-content').innerHTML='<video src="/assets/reel.mp4" controls playsinline loop aria-label="Lusion creative reference reel"></video><p class="media-credit">Creative reference reel by <a href="https://lusion.co/" target="_blank" rel="noopener">Lusion</a> · ZEL visual study</p>';
  showDialog(media);audio.music.pause();const video=$('video',media);video.muted=!audio.enabled;video.play().catch(()=>{});
}));

// Load only the video loops that are approaching the screen.
const videoObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  if(isIntersecting&&!reduced){if(!target.src){target.addEventListener('loadedmetadata',()=>{if(target.dataset.start)target.currentTime=Number(target.dataset.start);},{once:true});target.src=target.dataset.src;}target.play().catch(()=>{});}else target.pause();
}),{rootMargin:'150px'});
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
  gsap.from('.reel-frame',{scale:.86,borderRadius:50,ease:'power1.inOut',scrollTrigger:{trigger:'.reel',start:'top bottom',end:'top 5%',scrub:1}});
  $$('.project-image').forEach(image=>gsap.from(image,{y:55,rotateX:4,ease:'power2.out',scrollTrigger:{trigger:image,start:'top 95%',end:'top 55%',scrub:.6}}));
  $$('#ideas-title .line').forEach((line,i)=>gsap.from(line,{x:i===1?-65:65,ease:'power1.out',scrollTrigger:{trigger:'#ideas',start:'top 90%',end:'top 10%',scrub:1}}));
  gsap.fromTo('.device',{rotationY:15,rotationX:12,rotationZ:-5},{rotationY:-7,rotationX:0,rotationZ:2,ease:'none',scrollTrigger:{trigger:'.ideas-content',start:'top bottom',end:'bottom 30%',scrub:1}});
  return ()=>{};
});

const reel=$('.reel-frame'), cursor=$('.reel-cursor');
reel.addEventListener('pointermove',event=>{
  if(reduced)return;const rect=reel.getBoundingClientRect();
  gsap.to(cursor,{x:event.clientX-rect.left,y:event.clientY-rect.top,rotation:(event.movementX||0)*.5,duration:.35,ease:'power2.out',overwrite:true});
});
$$('.pill').forEach(button=>{
  button.addEventListener('pointermove',event=>{
    if(reduced||event.pointerType!=='mouse')return;const r=button.getBoundingClientRect();
    gsap.to(button,{x:(event.clientX-r.left-r.width/2)*.12,y:(event.clientY-r.top-r.height/2)*.2,duration:.35,ease:'power3.out',overwrite:true});
  });
  button.addEventListener('pointerleave',()=>gsap.to(button,{x:0,y:0,duration:.5,ease:'power3.out',overwrite:true}));
});
const progress=$('.scroll-indicator i');
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`translateY(${Math.max(0,(innerHeight*.2-35)*scrollY/Math.max(1,total))}px)`;}
window.addEventListener('scroll',updateProgress,{passive:true});

// Iridescent pointer paint. Each point fades out; no persistent drawing surface.
const paint=$('#fluid-canvas'), ctx=paint.getContext('2d');let trail=[], paintRaf;
function sizePaint(){const dpr=Math.min(devicePixelRatio,1.5);paint.width=innerWidth*dpr;paint.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
sizePaint();window.addEventListener('resize',sizePaint);
window.addEventListener('pointermove',event=>{
  if(reduced||event.pointerType!=='mouse'||innerWidth<813||event.target.closest('.hero-visual,.media-frame,dialog,.project-image'))return;
  trail.push({x:event.clientX,y:event.clientY,t:performance.now()});if(trail.length>75)trail.shift();if(!paintRaf)paintRaf=requestAnimationFrame(drawPaint);
});
function drawPaint(now){
  ctx.clearRect(0,0,innerWidth,innerHeight);trail=trail.filter(p=>now-p.t<950);
  if(trail.length>2){
    for(let layer=0;layer<4;layer++){
      ctx.lineWidth=42-layer*8;ctx.lineCap='round';ctx.lineJoin='round';ctx.shadowBlur=layer===0?18:6;
      for(let i=1;i<trail.length;i++){
        const p=trail[i],prev=trail[i-1],alpha=(1-(now-p.t)/950)*.12;
        const color=['#acdfff','#eaccc0','#b9fff4','#ffffff'][layer];ctx.strokeStyle=color;ctx.shadowColor=color;ctx.globalAlpha=alpha;
        ctx.beginPath();ctx.moveTo(prev.x,prev.y+layer*3);ctx.lineTo(p.x,p.y+layer*3);ctx.stroke();
      }
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
  const cluster=new THREE.Group();scene.add(cluster);const pieces=[];
  let seed=209;const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
  for(let z=0;z<3;z++)for(let y=0;y<4;y++)for(let x=0;x<4;x++){
    if(random()<.13)continue;
    const piece=new THREE.Group(), material=materials[z===2?0:(Math.floor(random()*3))];
    for(let axis=0;axis<3;axis++){
      const mesh=new THREE.Mesh(cylinder,material);if(axis===1)mesh.rotation.z=Math.PI/2;if(axis===2)mesh.rotation.x=Math.PI/2;piece.add(mesh);
    }
    piece.add(new THREE.Mesh(core,material));
    const scale=.85+random()*.18;piece.scale.setScalar(scale);
    piece.position.set((x-1.5)*1.65+(random()-.5)*.9,(y-1.5)*1.63+(random()-.5)*.7,(z-1)*1.45);
    piece.rotation.set(random()*3,random()*3,random()*3);
    piece.userData={origin:piece.position.clone(),rotation:piece.rotation.clone(),v:new THREE.Vector3(),spin:new THREE.Vector3((random()-.5)*.05,(random()-.5)*.05,(random()-.5)*.05),phase:random()*6};
    cluster.add(piece);pieces.push(piece);
  }
  cluster.rotation.z=-.12;
  const pointer=new THREE.Vector2(), eased=new THREE.Vector2(), raycaster=new THREE.Raycaster();
  let visible=true,last=performance.now(),time=0,dragging=false,lastPointer=new THREE.Vector2(),burst=0;
  function resize(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();cluster.scale.setScalar(camera.aspect<1.2?.64:1.12);if(reduced)renderer.render(scene,camera);}
  new ResizeObserver(resize).observe(host);resize();
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;},{rootMargin:'100px'}).observe(host);
  host.addEventListener('pointermove',event=>{
    const r=host.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-((event.clientY-r.top)/r.height*2-1));
    if(dragging&&!reduced){cluster.rotation.y+=(event.clientX-lastPointer.x)*.004;cluster.rotation.x+=(event.clientY-lastPointer.y)*.002;lastPointer.set(event.clientX,event.clientY);}
  });
  host.addEventListener('pointerdown',event=>{dragging=true;lastPointer.set(event.clientX,event.clientY);});
  window.addEventListener('pointerup',()=>{dragging=false;});
  host.addEventListener('pointerleave',()=>{pointer.set(0,0);dragging=false;});
  host.addEventListener('click',()=>{
    if(reduced)return;
    raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(cluster.children,true)[0];
    const center=hit?.point||new THREE.Vector3(0,0,1);const local=cluster.worldToLocal(center.clone());
    pieces.forEach(piece=>{const delta=piece.position.clone().sub(local);delta.z+=2;delta.normalize().multiplyScalar(.09+random()*.06);piece.userData.v.add(delta);});burst=1;
  });
  function frame(now){
    requestAnimationFrame(frame);const dt=Math.min((now-last)/1000,.033);last=now;
    if(!visible||document.hidden||reduced)return;
    time+=dt;eased.lerp(pointer,.04);burst*=.96;
    if(!dragging){cluster.rotation.y+=(eased.x*.24-cluster.rotation.y)*.025;cluster.rotation.x+=(-eased.y*.12-cluster.rotation.x)*.025;}
    pieces.forEach(piece=>{
      const d=piece.userData;
      const target=d.origin.clone();target.y+=Math.sin(time*.55+d.phase)*.08;
      d.v.add(target.sub(piece.position).multiplyScalar(.012));d.v.multiplyScalar(.93);piece.position.add(d.v);
      piece.rotation.x=d.rotation.x+Math.sin(time*.2+d.phase)*.09+burst*d.spin.x*8;
      piece.rotation.y=d.rotation.y+Math.cos(time*.22+d.phase)*.1;
    });
    renderer.render(scene,camera);
  }
  renderer.render(scene,camera);canvas.classList.add('ready');$('.hero-fallback').style.visibility='hidden';
  requestAnimationFrame(frame);
  canvas.addEventListener('webglcontextlost',()=>{canvas.classList.remove('ready');$('.hero-fallback').style.visibility='visible';});
  motionQuery.addEventListener('change',()=>{if(reduced)renderer.render(scene,camera);});
}
initHero();
motionQuery.addEventListener('change',event=>{
  reduced=event.matches;
  if(reduced){lenis?.destroy();lenis=null;$$('.ambient-video').forEach(video=>video.pause());trail=[];ctx.clearRect(0,0,innerWidth,innerHeight);}else{$$('.ambient-video').forEach(video=>{if(video.getBoundingClientRect().bottom>0&&video.getBoundingClientRect().top<innerHeight){if(!video.src)video.src=video.dataset.src;video.play().catch(()=>{});}});}
});
window.addEventListener('load',()=>{ScrollTrigger.refresh();updateProgress();});
