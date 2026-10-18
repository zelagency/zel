import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { transform } from 'esbuild';
import { projects } from '../src/projects.js';
import { damp } from '../src/motion.js';
import { PointerTrail } from '../src/pointer-trail.js';
import { briefPdf, briefFileName } from '../src/brief-pdf.js';

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

// The tip must stay on the cursor at speed: no fixed filter lag or input buffer.
function fastHeadLag(hz){const trail=new PointerTrail();let t=0;for(;t<=400;t+=1000/hz)trail.push(t*1.5,0,t);t-=1000/hz;return t*1.5-trail.frame(t).at(-1).x;}
[125,500,1000].forEach(hz=>assert.ok(Math.abs(fastHeadLag(hz))<4,`Tip within 4px of a 1500px/s pointer at ${hz} Hz polling`));
// After a stop the tip settles exactly on the pointer without overshooting.
const settlingTrail=new PointerTrail();for(let t=0;t<=100;t+=8)settlingTrail.push(Math.min(t,60)*4,0,t);
const headAt=t=>settlingTrail.frame(t).at(-1).x;
assert.ok(headAt(108)<=240&&headAt(140)<=240&&240-headAt(180)<.01,'Settles at actual pointer without overshoot');
// Slow movement with 1px mouse quantisation stays smooth.
const noisyTrail=new PointerTrail();
for(let t=0;t<=300;t+=5)noisyTrail.push(t*.05,t%10===0?1:-1,t);
const jitter=noisyTrail.frame(300).filter(p=>p.t>80&&p.t<295);
assert.ok(Math.max(...jitter.map(p=>Math.abs(p.y)))<.35,'Suppresses slow-speed quantisation jitter');
// Prediction draws ahead while moving, is capped, and is withdrawn once input stops.
const predictedTrail=new PointerTrail();predictedTrail.push(0,0,0);predictedTrail.push(10,0,8);predictedTrail.predict(200,0);
assert.ok(predictedTrail.frame(10).at(-1).x<=10+24,'Prediction is capped');
assert.ok(predictedTrail.frame(10).at(-1).x>10,'Draws ahead while moving');
assert.ok(predictedTrail.frame(60).at(-1).x<=10,'Prediction withdrawn after input stops');

let tilt=0;for(let i=0;i<144;i++)tilt=damp(tilt,1,5,1/144);
assert.ok(Math.abs(tilt-damp(0,1,5,1))<1e-12,'Tilt damping is independent of frame duration');

const html=fs.readFileSync('dist/index.html','utf8');
const dom=new JSDOM(html,{url:'http://localhost:5173',pretendToBeVisual:true});
const {window}=dom;
const motionEnabled=process.argv.includes('--motion');
for(const key of ['window','Window','document','navigator','location','history','DOMParser','AbortController','AbortSignal','Event','KeyboardEvent','HTMLElement','Element','Node','getComputedStyle','requestAnimationFrame','cancelAnimationFrame','HTMLCanvasElement','HTMLVideoElement','HTMLMediaElement','FormData','Blob'])Object.defineProperty(globalThis,key,{value:window[key],configurable:true});
Object.assign(globalThis,{innerWidth:1907,innerHeight:908,scrollY:0,devicePixelRatio:1,matchMedia:query=>({matches:query.includes('prefers-reduced-motion')?(query.includes('no-preference')?motionEnabled:!motionEnabled):true,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}),IntersectionObserver:class{observe(){} disconnect(){}},ResizeObserver:class{observe(){} disconnect(){}},Path2D:class{moveTo(){} lineTo(){}},Audio:window.Audio});
window.matchMedia=globalThis.matchMedia;
window.scrollTo=()=>{};
window.HTMLMediaElement.prototype.play=async()=>{};
window.HTMLMediaElement.prototype.pause=()=>{};
// Calls on the stub context return a stub too, so gradients, patterns and image data chain without a real canvas.
const canvasStub=new Proxy(function(){},{get:(target,key)=>key==='length'?0:canvasStub,apply:()=>canvasStub});
window.HTMLCanvasElement.prototype.getContext=function(type){if(type!=='2d')return null;return new Proxy({},{get:(target,key)=>key in target?target[key]:()=>canvasStub,set:(target,key,value)=>{target[key]=value;return true;}});};
window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new window.Event('close'));};
window.Element.prototype.scrollIntoView=function(){};
window.SVGElement.prototype.getTotalLength=()=>2000;
try{await import('../dist/app.js');}catch(error){console.error(error.stack.split('\n').map(line=>line.slice(0,400)).join('\n'));process.exit(1);}
const $=s=>document.querySelector(s);
// With motion on, project views open once the page transition has covered the screen.
const until=async(test,ms=5000)=>{const end=Date.now()+ms;while(!test()){if(Date.now()>end)throw new Error('Timed out waiting for transition');await new Promise(r=>setTimeout(r,20));}};
const idle=()=>until(()=>!document.querySelector('.page-transition.is-open,.page-transition:popover-open'));
assert.equal(document.querySelectorAll('#hero-visual [data-letter]').length,3,'Three vector letters in hero');
$('#hero-visual').click();assert.equal($('#hero-visual').getAttribute('aria-pressed'),'true');assert.equal($('#hero-visual').dataset.inverted,'true');
$('#hero-visual').click();assert.equal($('#hero-visual').getAttribute('aria-pressed'),'false');assert.equal($('#hero-visual').dataset.inverted,'false');
assert.equal(document.querySelectorAll('.project').length,3,'Three real ZEL projects');
assert.equal($('.project-featured').dataset.projectId,'fogstores','Fogstores is the lead project');
for(const project of projects){
  assert.equal($(`[data-project-id="${project.id}"] .project-title a`).href,project.url,'Correct live project link');
  for(const image of project.gallery.flatMap(group=>group.shots).flatMap(shot=>[{src:shot.src},{src:shot.thumb}]))assert.ok(fs.existsSync(path.join('dist',image.src)),`Missing real project image ${image.src}`);
}
$('.menu-button').click();assert.ok($('#menu-dialog').open);assert.equal($('.menu-button').getAttribute('aria-expanded'),'true');
assert.equal(document.documentElement.style.overflow,'hidden','Root scrolling locks while menu is open');
$('.menu-close').click();assert.ok(!$('#menu-dialog').open);assert.equal(document.body.style.overflow,'');
assert.equal(document.documentElement.style.overflow,'','Root scrolling unlocks after close');
$('.menu-button').click();$('.menu-contact').click();assert.ok($('#contact-dialog').open);assert.equal(document.documentElement.style.overflow,'hidden','Menu-to-contact transition retains root lock');
$('#contact-dialog [data-close]').click();assert.equal(document.documentElement.style.overflow,'');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'true');assert.ok($('.sound').hasAttribute('data-filled'),'Sound on keeps the fluid fill pinned');
$('.sound').click();await new Promise(r=>setTimeout(r,0));assert.equal($('.sound').getAttribute('aria-pressed'),'false');
$('[data-project="0"]').focus();$('[data-project="0"]').click();await until(()=>$('#media-dialog').open);await idle();assert.ok($('#media-dialog').open);assert.equal($('.media-dialog-content h2').textContent,'Fogstores');
assert.equal($('.case-heading a').href,projects[0].url);
$('#media-dialog [data-close]').click();assert.ok(!$('#media-dialog').open);
assert.equal(document.activeElement,$('[data-project="0"]'),'Return focus to project opener');
assert.equal(new URL($('#all-projects').href).pathname,'/projects/','See all projects routes to the projects page');
$('[data-project="0"]').click();await until(()=>$('#media-dialog').open);await idle();$('[data-back-projects]').click();assert.equal(document.querySelectorAll('[data-gallery-project]').length,3,'Case study links back to the gallery');
$('[data-gallery-project="1"]').click();assert.equal($('.media-dialog-content h2').textContent,'Infinity Kitchens');
assert.equal(document.querySelectorAll('.shot').length,projects[1].gallery.flatMap(group=>group.shots).length,'Every Infinity screenshot is in the grid');
$('[data-shot="1"]').click();assert.ok($('#lightbox').open,'A screenshot opens the gallery');assert.equal($('.lightbox-count').textContent,'02 / 07');
$('#lightbox [data-step="1"]').click();assert.equal($('.lightbox-count').textContent,'03 / 07','Next steps forward');
$('#lightbox').dispatchEvent(new window.KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true}));assert.equal($('.lightbox-count').textContent,'02 / 07','Arrow keys step back');
$('#lightbox').dispatchEvent(new window.Event('cancel',{cancelable:true}));assert.ok(!$('#lightbox').open&&$('#media-dialog').open,'Escape closes only the gallery');
$('[data-back-projects]').click();assert.equal(document.querySelectorAll('[data-gallery-project]').length,3);
$('[data-gallery-project="2"]').click();assert.equal($('.media-dialog-content h2').textContent,'BNM Cafe');
assert.equal($('.case-heading a').href,'https://bnm-cafe-rho.vercel.app/menu');
$('#media-dialog').dispatchEvent(new window.Event('cancel',{cancelable:true}));assert.ok(!$('#media-dialog').open,'Escape dismisses case study');
$('[data-reel]').click();assert.ok($('.media-dialog-content video'));$('#media-dialog [data-close]').click();
$('.talk[data-contact]').click();assert.ok($('#contact-dialog').open);
// The brief asks in three steps; each step needs an answer before moving on.
$('#contact-form [data-brief-next]').click();assert.equal($('#contact-form').dataset.step,'1','Step one needs a choice');assert.ok($('#contact-form .brief-error').textContent);
$('#contact-form [name=needs][value=Website]').checked=true;$('#contact-form [data-brief-next]').click();assert.equal($('#contact-form').dataset.step,'2');
$('#contact-form [name=timeline][value="Within 3 months"]').checked=true;$('#contact-form [data-brief-next]').click();assert.equal($('#contact-form').dataset.step,'3');
$('#contact-form [name=name]').value='Test client';$('#contact-form [name=email]').value='test@example.com';$('#contact-form [name=project]').value='Interactive website';
let briefBlob;globalThis.URL.createObjectURL=blob=>{briefBlob=blob;return 'blob:test-brief';};globalThis.URL.revokeObjectURL=()=>{};
$('#contact-form').dispatchEvent(new window.Event('submit',{bubbles:true,cancelable:true}));assert.equal($('.brief-download').getAttribute('download'),'ZEL-project-brief-test-client.pdf');assert.equal(briefBlob.type,'application/pdf');
// The PDF itself: every object and stream sits where the file says, answers are real text, and long notes continue on further pages.
function readPdf(bytes){
  const pdf=Buffer.from(bytes).toString('latin1'),xref=Number(pdf.match(/startxref\n(\d+)/)[1]);assert.ok(pdf.startsWith('%PDF-1.4')&&pdf.startsWith('xref',xref));
  [...pdf.slice(xref).matchAll(/^(\d{10}) 00000 n $/gm)].forEach((entry,i)=>assert.ok(pdf.startsWith(`${i+1} 0 obj`,Number(entry[1])),`PDF object ${i+1} is where the xref says`));
  for(const stream of pdf.matchAll(/\/Length (\d+) >>\nstream\n/g))assert.ok(pdf.startsWith('\nendstream',stream.index+stream[0].length+Number(stream[1])),'PDF stream length matches');
  return pdf;
}
const answers={name:'Test client',email:'test@example.com',needs:['Website','Ordering & payments'],timeline:'In 3–6 months',notes:'Interactive website'};
const shortBrief=readPdf(briefPdf(answers));
assert.ok(shortBrief.includes('(Test client) Tj')&&shortBrief.includes('(In 3\x966 months) Tj'),'Answers are set as text in Windows-1252');
assert.ok(shortBrief.includes('/URI (mailto:test@example.com)')&&shortBrief.includes('/Count 1'),'One page with a working email link');
const longBrief=readPdf(briefPdf({...answers,notes:'A long idea. '.repeat(600)}));
assert.ok(/\/Count [2-9]/.test(longBrief)&&longBrief.includes('(PROJECT BRIEF, CONTINUED) Tj'),'Long notes continue on further pages');
assert.equal(briefFileName('Anaïs Fernández'),'ZEL-project-brief-anais-fernandez.pdf');assert.equal(briefFileName('अम्मार'),'ZEL-project-brief.pdf');
assert.ok(decodeURIComponent($('.brief-send').href).includes('Building: Website'),'Brief email carries the answers');assert.ok($('.brief-send').href.startsWith('mailto:support@zel.agency'));
$('#contact-dialog [data-close]').click();assert.equal(document.body.style.overflow,'');
// Long dialogs scroll inside, so their close buttons never scroll out of reach.
assert.ok($('#contact-dialog>.dialog-close')&&$('#contact-dialog>.dialog-scroll #contact-form'),'Contact close button sits outside its scroller');
assert.ok($('#media-dialog>.dialog-close')&&$('#media-dialog>.media-dialog-content'),'Media close button sits outside its scroller');
// Sounds ship as Ogg plus AAC (Safari before iOS 18.4), and forced dark modes are opted out of.
for(const name of ['ambient','hover','click'])for(const ext of ['ogg','m4a'])assert.ok(fs.existsSync(`dist/assets/${name}.${ext}`),`Missing sound ${name}.${ext}`);
assert.equal($('meta[name="color-scheme"]')?.content,'only light','Opts out of forced dark modes');
for(const element of [...document.querySelectorAll('[src],[href],[data-src],[data-poster]')]){
  for(const attr of ['src','href','data-src','data-poster','data-src-portrait','data-poster-portrait']){const ref=element.getAttribute(attr);if(ref?.startsWith('/')&&!ref.startsWith('//'))assert.ok(fs.existsSync(path.join('dist',new URL(ref,'http://localhost').pathname)),`Missing asset ${ref}`);if(ref?.startsWith('#'))assert.ok(document.querySelector(ref),`Invalid anchor ${ref}`);}
}
await transform(fs.readFileSync('dist/style.css','utf8'),{loader:'css',minify:true});
await transform(fs.readFileSync('dist/projects.css','utf8'),{loader:'css',minify:true});
// Case-study images only appear when a project opens, so check the project data directly.
for(const project of projects)for(const image of [project.cover,...project.gallery.flatMap(group=>group.shots)].filter(Boolean))assert.ok(fs.existsSync(path.join('dist',image.src)),`Missing project image ${image.src}`);
// Every route is a complete page: own content, current menu item and the next page in the footer.
for(const [file,route,next,heading] of [['dist/index.html','/','/about/','We build'],['dist/about/index.html','/about/','/projects/','both sides'],['dist/projects/index.html','/projects/','/contact/','Projects'],['dist/contact/index.html','/contact/','/','Let’s work']]){
  const page=new JSDOM(fs.readFileSync(file,'utf8')).window.document;
  assert.ok(page.querySelector('[data-page-root] h1')?.textContent.includes(heading),`${route} has its heading`);
  assert.equal(page.querySelector('#menu-dialog [aria-current="page"]')?.getAttribute('href'),route,`${route} marks itself current in the menu`);
  assert.equal(page.querySelector('[data-next-page]')?.getAttribute('href'),next,`${route} leads to ${next}`);
  assert.ok(page.querySelector('script[src^="/app.js?v="]'),`${route} loads the versioned app`);
  for(const element of page.querySelectorAll('[src],[href],[data-src],[data-poster]'))for(const attr of ['src','href','data-src','data-poster','data-src-portrait','data-poster-portrait']){
    const ref=element.getAttribute(attr);if(ref?.startsWith('/')&&!ref.startsWith('//'))assert.ok(fs.existsSync(path.join('dist',new URL(ref,'http://localhost').pathname)),`${route}: missing asset ${ref}`);
  }
  for(const element of page.querySelectorAll('[srcset]'))for(const candidate of element.getAttribute('srcset').split(','))assert.ok(fs.existsSync(path.join('dist',candidate.trim().split(' ')[0])),`${route}: missing srcset image ${candidate}`);
  // Search: a unique title and description that fit in a result, an indexable canonical on the public
  // domain, one h1 with no skipped heading levels, described images, and structured data that parses.
  const meta=selector=>page.querySelector(selector)?.getAttribute('content');
  assert.ok(page.title.length>=30&&page.title.length<=60,`${route}: title is ${page.title.length} characters`);
  assert.ok(meta('meta[name="description"]').length>=70&&meta('meta[name="description"]').length<=160,`${route}: description is ${meta('meta[name="description"]').length} characters`);
  assert.equal(page.querySelector('link[rel="canonical"]')?.getAttribute('href'),`https://www.zel.agency${route}`,`${route}: canonical on www.zel.agency`);
  assert.equal(meta('meta[property="og:url"]'),`https://www.zel.agency${route}`,`${route}: og:url matches canonical`);
  assert.ok(meta('meta[name="robots"]').startsWith('index'),`${route}: indexable`);
  assert.ok(fs.existsSync(path.join('dist',new URL(meta('meta[property="og:image"]')).pathname)),`${route}: og:image exists`);
  assert.equal(page.querySelectorAll('h1').length,1,`${route}: exactly one h1`);
  let level=1;for(const heading of page.querySelectorAll('[data-page-root] :is(h1,h2,h3,h4,h5,h6)')){const next=Number(heading.tagName[1]);assert.ok(next<=level+1,`${route}: heading skips from h${level} to h${next} ("${heading.textContent.trim()}")`);level=next;}
  for(const image of page.querySelectorAll('img'))assert.ok(image.hasAttribute('alt'),`${route}: image without alt ${image.getAttribute('src')}`);
  for(const image of page.querySelectorAll('[data-page-root] img'))assert.ok(image.getAttribute('width')&&image.getAttribute('height'),`${route}: image without width/height ${image.getAttribute('src')}`);
  const graph=JSON.parse(page.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
  assert.ok(graph.some(node=>node['@type']==='Organization')&&graph.some(node=>node.url===`https://www.zel.agency${route}`),`${route}: structured data names ZEL and this page`);
  assert.ok(page.querySelectorAll('[data-page-root] a[href^="/"]').length+page.querySelectorAll('.site-footer nav a[href^="/"]').length>=4,`${route}: links to the other pages`);
}
assert.ok(new JSDOM(fs.readFileSync('dist/projects/index.html','utf8')).window.document.querySelectorAll('.project h3').length===projects.length,'Project cards are in the HTML, not only added by script');
const notFound=new JSDOM(fs.readFileSync('dist/404.html','utf8')).window.document;
assert.ok(notFound.querySelector('meta[name="robots"]').content.startsWith('noindex')&&!notFound.querySelector('link[rel="canonical"]'),'404 page stays out of search');
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
for(const route of ['/','/about/','/projects/','/contact/'])assert.ok(sitemap.includes(`<loc>https://www.zel.agency${route}</loc>`),`Sitemap lists ${route}`);
for(const [,src] of sitemap.matchAll(/<image:loc>https:\/\/www\.zel\.agency([^<]+)<\/image:loc>/g))assert.ok(fs.existsSync(path.join('dist',src)),`Sitemap image exists ${src}`);
assert.ok(!sitemap.includes('404'),'Sitemap leaves out the 404 page');
assert.match(fs.readFileSync('dist/robots.txt','utf8'),/^Sitemap: https:\/\/www\.zel\.agency\/sitemap\.xml$/m,'robots.txt points to the sitemap');
assert.doesNotMatch(fs.readFileSync('dist/robots.txt','utf8'),/Disallow: \/\s*$/m,'robots.txt does not block the site');
console.log('PASS: four routed pages; SEO (titles, descriptions, canonicals, one h1, heading order, image alt/sizes, structured data, sitemap, robots.txt, 404); hero colour toggle; project navigation/URLs; dialogs/root scroll lock and restoration; close buttons outside dialog scrollers; sound (Ogg + AAC)/reel/brief; light-only colour scheme; versioned assets; CSS; consistent damping and pointer trajectories at multiple refresh rates; pointer pause/re-entry/expiry.');
dom.window.close();process.exit(0);
