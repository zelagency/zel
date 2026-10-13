import { build } from 'esbuild';
import { readFileSync,writeFileSync,mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { projects } from '../src/projects.js';

await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', outfile: 'dist/app.js', target: ['es2022'], legalComments: 'eof' });

// Each route is the shared layout plus its own content; the footer ends in a "next page" band.
export const pages=[
  {page:'home',route:'/',out:'dist/index.html',title:'ZEL — Bold Ideas, Brought to Life',description:'ZEL builds unique digital solutions for businesses and bold thinkers. Custom websites, commerce platforms and tools that turn ambitious ideas into reality.'},
  {page:'about',route:'/about/',out:'dist/about/index.html',title:'About — ZEL',description:'ZEL builds both sides of the counter: the storefronts customers see and the POS, kitchen and admin systems teams run on, on one source of truth.'},
  {page:'projects',route:'/projects/',out:'dist/projects/index.html',title:'Projects — ZEL',description:'Selected ZEL projects across fashion, food and digital experiences: Fogstores, Infinity Kitchens and BNM Cafe.'},
  {page:'contact',route:'/contact/',out:'dist/contact/index.html',title:'Contact — ZEL',description:'Start a project with ZEL. Describe your idea and prepare a project brief.'},
];
const labels={home:'Home',about:'About us',projects:'Projects',contact:'Contact'};
// Hash the text with line endings normalised, so a Windows checkout (CRLF) and CI (LF) agree.
const hashOf=file=>createHash('sha256').update(readFileSync(file,'utf8').replaceAll('\r\n','\n')).digest('hex').slice(0,12);
const versions=Object.fromEntries(['app.js','style.css','projects.css'].map(asset=>[asset,hashOf(`dist/${asset}`)]));
const layout=readFileSync('src/site/layout.html','utf8');

function footer(next){
  const live=projects.map(project=>`<a href="${project.url}" target="_blank" rel="noopener">${project.title} ↗</a>`).join('');
  return `  <footer class="site-footer">
    <div class="footer-grid section">
      <div class="footer-brand"><a class="footer-logo" href="/">ZEL</a><p>Bold ideas, brought to life.</p></div>
      <nav class="footer-col" aria-label="Footer"><span class="footer-label">EXPLORE</span>${pages.map(p=>`<a href="${p.route}">${labels[p.page]}</a>`).join('')}</nav>
      <div class="footer-col"><span class="footer-label">LIVE WORK</span>${live}</div>
      <div class="footer-col"><span class="footer-label">START A PROJECT</span><p>Have an idea worth building?</p><button class="pill dark" data-contact>LET’S TALK <span class="small-dot">•</span></button></div>
    </div>
    <div class="footer-bottom section"><span>© 2026 ZEL</span><a href="#main">BACK TO TOP ↑</a></div>
    <a class="next-page" href="${next.route}" data-next-page><span class="next-hint">KEEP SCROLLING<br>TO LEARN MORE</span><span class="next-title">${labels[next.page]}</span><span class="next-label">NEXT PAGE <i><b></b><b></b></i></span></a>
  </footer>`;
}

pages.forEach((page,i)=>{
  const next=pages[(i+1)%pages.length];
  let html=layout
    .replace('{{title}}',page.title).replace('{{description}}',page.description).replace('{{page}}',page.page)
    .replace('{{main}}',readFileSync(`src/site/pages/${page.page}.html`,'utf8').trimEnd())
    .replace('{{footer}}',footer(next))
    .replaceAll(`<a href="${page.route}">`,`<a href="${page.route}" aria-current="page">`);
  for(const [asset,hash] of Object.entries(versions))html=html.replaceAll(`/${asset}"`,`/${asset}?v=${hash}"`);
  mkdirSync(dirname(page.out),{recursive:true});writeFileSync(page.out,html);
});
console.log(`Built ZEL → dist/ (${pages.map(p=>p.route).join(' ')})`);
