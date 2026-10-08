import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { transform } from 'esbuild';

const html=fs.readFileSync('dist/index.html','utf8');
const dom=new JSDOM(html,{url:'http://localhost:5173',pretendToBeVisual:true});
const {window}=dom;
for(const key of ['window','document','navigator','HTMLElement','Element','Node','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','HTMLCanvasElement','HTMLVideoElement','HTMLMediaElement','FormData','Blob'])Object.defineProperty(globalThis,key,{value:window[key],configurable:true});
Object.assign(globalThis,{innerWidth:1907,innerHeight:908,scrollY:0,devicePixelRatio:1,matchMedia:query=>({matches:query.includes('reduce')&&!query.includes('no-preference'),addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}),IntersectionObserver:class{observe(){} disconnect(){}},ResizeObserver:class{observe(){} disconnect(){}},Audio:window.Audio});
window.matchMedia=globalThis.matchMedia;
window.scrollTo=()=>{};
window.HTMLMediaElement.prototype.play=async()=>{};
window.HTMLMediaElement.prototype.pause=()=>{};
window.HTMLCanvasElement.prototype.getContext=function(type){if(type!=='2d')return null;return{setTransform(){},clearRect(){}};};
window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new window.Event('close'));};
window.Element.prototype.scrollIntoView=function(){};
await import('../dist/app.js');
const $=s=>document.querySelector(s);
assert.equal(document.querySelectorAll('.project').length,12,'Complete reference collection');
$('.menu-button').click();assert.ok($('#menu-dialog').open);assert.equal($('.menu-button').getAttribute('aria-expanded'),'true');
$('.menu-close').click();assert.ok(!$('#menu-dialog').open);assert.equal(document.body.style.overflow,'');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'true');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'false');
$('[data-project="0"]').click();assert.ok($('#media-dialog').open);assert.equal($('.media-dialog-content h2').textContent,'Oryzo AI');
$('#media-dialog [data-close]').click();assert.ok(!$('#media-dialog').open);
$('#all-projects').click();assert.equal(document.querySelectorAll('[data-gallery-project]').length,12);
$('[data-gallery-project="11"]').click();assert.equal($('.media-dialog-content h2').textContent,'Soda Experience');
$('#media-dialog [data-close]').click();
$('[data-reel]').click();assert.ok($('.media-dialog-content video'));$('#media-dialog [data-close]').click();
$('[data-contact]').click();assert.ok($('#contact-dialog').open);
$('#contact-form [name=name]').value='Test client';$('#contact-form [name=email]').value='test@example.com';$('#contact-form [name=project]').value='Interactive website';
globalThis.URL.createObjectURL=()=> 'blob:test-brief';globalThis.URL.revokeObjectURL=()=>{};
$('#contact-form').dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));assert.equal($('.brief-download').getAttribute('download'),'ZEL-project-brief.txt');
$('#contact-dialog [data-close]').click();assert.equal(document.body.style.overflow,'');
for(const element of [...document.querySelectorAll('[src],[href],[data-src]')]){
  for(const attr of ['src','href','data-src']){const ref=element.getAttribute(attr);if(ref?.startsWith('/')&&!ref.startsWith('//'))assert.ok(fs.existsSync(path.join('dist',ref)),`Missing asset ${ref}`);if(ref?.startsWith('#'))assert.ok(document.querySelector(ref),`Invalid anchor ${ref}`);}
}
await transform(fs.readFileSync('dist/style.css','utf8'),{loader:'css',minify:true});
console.log('PASS: 12 project assets; menu and scroll lock; sound toggle; project and gallery navigation; reel playback dialog; contact brief download; internal anchors; CSS parsing.');
dom.window.close();process.exit(0);
