import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { transform } from 'esbuild';
import { projects } from '../src/projects.js';
import { FIXED_STEP, damp, stepBody } from '../src/motion.js';
import { PointerTrail } from '../src/pointer-trail.js';

function pointerReplay(fps){
  const trail=new PointerTrail();let inputTime=0;
  for(let frame=0;frame<=fps;frame++){
    const now=frame*1000/fps;
    while(inputTime<=now+1e-8){trail.push(100+inputTime*.4,200+Math.sin(inputTime/150)*60,inputTime);inputTime+=1000/240;}
    trail.frame(now);
  }
  return trail.frame(1000);
}
const pointer60=pointerReplay(60),pointer144=pointerReplay(144);
assert.equal(pointer60.length,pointer144.length,'Same trail length across display rates');
pointer60.forEach((point,i)=>assert.ok(Math.hypot(point.x-pointer144[i].x,point.y-pointer144[i].y)<.001,'Same curved trajectory at 60 and 144 Hz'));
const interruptedTrail=new PointerTrail();interruptedTrail.push(0,0,0);interruptedTrail.push(20,20,20);interruptedTrail.push(500,500,500);interruptedTrail.push(520,520,520);
assert.ok(interruptedTrail.frame(550).every(point=>point.x>=500),'No streak connecting across a pause');
assert.equal(interruptedTrail.frame(1200).length,0,'Trail disappears after inactivity');assert.ok(!interruptedTrail.active);

// A scatter must settle along the same path on different display refresh rates.
function simulate(fps){
  const body={position:{x:0,y:0,z:0},userData:{origin:{x:0,y:0,z:0},v:{x:8,y:5,z:6},phase:0}};
  let time=0,accumulator=0;
  for(let frame=0;frame<fps*4;frame++){
    accumulator+=1/fps;
    while(accumulator>=FIXED_STEP-1e-10){time+=FIXED_STEP;stepBody(body,time);accumulator-=FIXED_STEP;}
    assert.ok(Object.values(body.position).every(Number.isFinite),'Finite scatter positions');
  }
  return body.position;
}
const baseline=simulate(60);
for(const fps of [120,144])for(const axis of ['x','y','z'])assert.ok(Math.abs(simulate(fps)[axis]-baseline[axis])<1e-9,`Consistent spring at ${fps}Hz`);
assert.ok(Math.abs(baseline.x)<.001&&Math.abs(baseline.z)<.001,'Scatter returns to its origin');
let tilt=0;for(let i=0;i<144;i++)tilt=damp(tilt,1,5,1/144);
assert.ok(Math.abs(tilt-damp(0,1,5,1))<1e-12,'Tilt damping is independent of frame duration');

const html=fs.readFileSync('dist/index.html','utf8');
const dom=new JSDOM(html,{url:'http://localhost:5173',pretendToBeVisual:true});
const {window}=dom;
const motionEnabled=process.argv.includes('--motion');
for(const key of ['window','Window','document','navigator','HTMLElement','Element','Node','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','HTMLCanvasElement','HTMLVideoElement','HTMLMediaElement','FormData','Blob'])Object.defineProperty(globalThis,key,{value:window[key],configurable:true});
Object.assign(globalThis,{innerWidth:1907,innerHeight:908,scrollY:0,devicePixelRatio:1,matchMedia:query=>({matches:query.includes('prefers-reduced-motion')?(query.includes('no-preference')?motionEnabled:!motionEnabled):true,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}),IntersectionObserver:class{observe(){} disconnect(){}},ResizeObserver:class{observe(){} disconnect(){}},Audio:window.Audio});
window.matchMedia=globalThis.matchMedia;
window.scrollTo=()=>{};
window.HTMLMediaElement.prototype.play=async()=>{};
window.HTMLMediaElement.prototype.pause=()=>{};
window.HTMLCanvasElement.prototype.getContext=function(type){if(type!=='2d')return null;return{setTransform(){},clearRect(){}};};
window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new window.Event('close'));};
window.Element.prototype.scrollIntoView=function(){};
window.SVGElement.prototype.getTotalLength=()=>2000;
try{await import('../dist/app.js');}catch(error){console.error(error.stack.split('\n').map(line=>line.slice(0,400)).join('\n'));process.exit(1);}
const $=s=>document.querySelector(s);
assert.equal(document.querySelectorAll('.project').length,3,'Three real ZEL projects');
assert.equal($('.project-featured').dataset.projectId,'fogstores','Fogstores is the lead project');
for(const project of projects){
  assert.equal($(`[data-project-id="${project.id}"] .project-title a`).href,project.url,'Correct live project link');
  for(const image of project.images)assert.ok(fs.existsSync(path.join('dist',image.src)),`Missing real project image ${image.src}`);
}
$('.menu-button').click();assert.ok($('#menu-dialog').open);assert.equal($('.menu-button').getAttribute('aria-expanded'),'true');
assert.equal(document.documentElement.style.overflow,'hidden','Root scrolling locks while menu is open');
$('.menu-close').click();assert.ok(!$('#menu-dialog').open);assert.equal(document.body.style.overflow,'');
assert.equal(document.documentElement.style.overflow,'','Root scrolling unlocks after close');
$('.menu-button').click();$('.menu-contact').click();assert.ok($('#contact-dialog').open);assert.equal(document.documentElement.style.overflow,'hidden','Menu-to-contact transition retains root lock');
$('#contact-dialog [data-close]').click();assert.equal(document.documentElement.style.overflow,'');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'true');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'false');
$('[data-project="0"]').focus();$('[data-project="0"]').click();assert.ok($('#media-dialog').open);assert.equal($('.media-dialog-content h2').textContent,'Fogstores');
assert.equal($('.case-heading a').href,projects[0].url);
$('#media-dialog [data-close]').click();assert.ok(!$('#media-dialog').open);
assert.equal(document.activeElement,$('[data-project="0"]'),'Return focus to project opener');
$('#all-projects').click();assert.equal(document.querySelectorAll('[data-gallery-project]').length,3);
$('[data-gallery-project="1"]').click();assert.equal($('.media-dialog-content h2').textContent,'Infinity Kitchens');
assert.equal(document.querySelectorAll('.case-screens img').length,2);
$('[data-back-projects]').click();assert.equal(document.querySelectorAll('[data-gallery-project]').length,3);
$('[data-gallery-project="2"]').click();assert.equal($('.media-dialog-content h2').textContent,'BNM Cafe');
assert.equal($('.case-heading a').href,'https://bnm-cafe-rho.vercel.app/menu');
$('#media-dialog').dispatchEvent(new window.Event('cancel',{cancelable:true}));assert.ok(!$('#media-dialog').open,'Escape dismisses case study');
$('[data-reel]').click();assert.ok($('.media-dialog-content video'));$('#media-dialog [data-close]').click();
$('[data-contact]').click();assert.ok($('#contact-dialog').open);
$('#contact-form [name=name]').value='Test client';$('#contact-form [name=email]').value='test@example.com';$('#contact-form [name=project]').value='Interactive website';
globalThis.URL.createObjectURL=()=> 'blob:test-brief';globalThis.URL.revokeObjectURL=()=>{};
$('#contact-form').dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));assert.equal($('.brief-download').getAttribute('download'),'ZEL-project-brief.txt');
$('#contact-dialog [data-close]').click();assert.equal(document.body.style.overflow,'');
for(const element of [...document.querySelectorAll('[src],[href],[data-src]')]){
  for(const attr of ['src','href','data-src']){const ref=element.getAttribute(attr);if(ref?.startsWith('/')&&!ref.startsWith('//'))assert.ok(fs.existsSync(path.join('dist',new URL(ref,'http://localhost').pathname)),`Missing asset ${ref}`);if(ref?.startsWith('#'))assert.ok(document.querySelector(ref),`Invalid anchor ${ref}`);}
}
await transform(fs.readFileSync('dist/style.css','utf8'),{loader:'css',minify:true});
await transform(fs.readFileSync('dist/projects.css','utf8'),{loader:'css',minify:true});
console.log('PASS: project navigation/URLs; dialogs/root scroll lock and restoration; sound/reel/brief; versioned assets; CSS; consistent scatter and pointer trajectories at multiple refresh rates; pointer pause/re-entry/expiry.');
dom.window.close();process.exit(0);
