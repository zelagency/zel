import { build } from 'esbuild';
import { readFileSync,writeFileSync,mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { projects, projectGrid } from '../src/projects.js';
import { contact, instagramUrl } from '../src/contact.js';

await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', outfile: 'dist/app.js', target: ['es2022'], legalComments: 'eof' });

// The one public address. Canonical tags, the sitemap, link previews and structured data all use it,
// so search engines credit www.zel.agency rather than the Vercel address (which vercel.json redirects here).
export const site='https://www.zel.agency';
// Google Search Console's HTML-tag method: paste the content="…" value from Search Console here.
// Leave it empty when the property is verified by DNS instead.
const googleSiteVerification='';

// Each route is the shared layout plus its own content; the footer ends in a "next page" band.
// Titles stay under 60 characters and descriptions under 160, so search results show them whole.
export const pages=[
  {page:'home',route:'/',out:'dist/index.html',type:'WebPage',
    title:'ZEL — Web Design & Development Agency in Bangalore',
    description:'ZEL designs and builds custom websites, online stores, ordering systems and business dashboards in Bangalore, turning ambitious ideas into reality.'},
  {page:'about',route:'/about/',out:'dist/about/index.html',type:'AboutPage',name:'About',
    title:'About ZEL — Websites and Business Systems, Bangalore',
    description:'ZEL builds both sides of the counter: the storefronts customers see and the POS, kitchen and admin systems teams run on, on one source of truth.'},
  {page:'projects',route:'/projects/',out:'dist/projects/index.html',type:'CollectionPage',name:'Projects',
    title:'Projects — Ecommerce, Ordering and POS Builds | ZEL',
    description:'Selected ZEL work: the Fogstores fashion store, the Infinity Kitchens cloud-kitchen platform and the BNM Cafe ordering and POS system.'},
  {page:'contact',route:'/contact/',out:'dist/contact/index.html',type:'ContactPage',name:'Contact',
    title:'Contact ZEL — Start Your Website or App Project',
    description:'Tell ZEL about your website, online store or app. Answer three quick questions and get a project brief to email us or download.'},
];
// Not a route: Vercel serves it for any missing URL, with a 404 status. It is kept out of search and the sitemap.
const notFound={page:'404',route:'/404/',out:'dist/404.html',type:'WebPage',noindex:true,
  title:'Page not found — ZEL',description:'This page does not exist. Explore ZEL’s work, studio and contact page instead.'};

const labels={home:'Home',about:'About us',projects:'Projects',contact:'Contact'};
const contactLinks=[`<a href="mailto:${contact.email}">${contact.email}</a>`,
  `<a href="${instagramUrl}" target="_blank" rel="noopener">Instagram @${contact.instagram}&nbsp;↗</a>`].join('');
const ogImage={url:`${site}/assets/og-zel.png`,width:1200,height:630,alt:'ZEL — We build unique digital solutions, turning ambitious ideas into reality. www.zel.agency'};

// Structured data (schema.org), one @graph per page: who ZEL is, the site, and what this page is.
const organization={'@type':'Organization','@id':`${site}/#organization`,name:'ZEL',alternateName:'ZEL Agency',url:`${site}/`,
  logo:{'@type':'ImageObject','@id':`${site}/#logo`,url:`${site}/assets/logo.png`,width:512,height:512,caption:'ZEL'},
  image:{'@id':`${site}/#logo`},email:contact.email,
  description:'ZEL is a digital agency in Bangalore that designs and builds custom websites, online stores, ordering and POS systems, and business dashboards.',
  slogan:'Bold ideas, brought to life.',
  address:{'@type':'PostalAddress',addressLocality:'Bangalore',addressRegion:'Karnataka',addressCountry:'IN'},
  areaServed:{'@type':'Country',name:'India'},
  knowsAbout:['Web design','Web development','Ecommerce development','Online ordering systems','Point of sale (POS) systems','Admin dashboards','UX/UI design','Next.js','Supabase'],
  hasOfferCatalog:{'@type':'OfferCatalog',name:'Digital services',itemListElement:['Website design and development','Ecommerce store development','Online ordering and payments','Dashboards and admin systems','Website redesign']
    .map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name,provider:{'@id':`${site}/#organization`}}}))},
  sameAs:[instagramUrl],
  contactPoint:[{'@type':'ContactPoint',email:contact.email,contactType:'sales',areaServed:'IN'}]};
const website={'@type':'WebSite','@id':`${site}/#website`,url:`${site}/`,name:'ZEL',description:'Web design and development agency in Bangalore',publisher:{'@id':`${site}/#organization`},inLanguage:'en-IN'};
function schema(page){
  const url=site+page.route,graph=[organization,website];
  const webPage={'@type':page.type,'@id':`${url}#webpage`,url,name:page.title,description:page.description,isPartOf:{'@id':`${site}/#website`},
    about:{'@id':`${site}/#organization`},primaryImageOfPage:{'@type':'ImageObject',url:ogImage.url},inLanguage:'en-IN'};
  if(page.route!=='/'){
    webPage.breadcrumb={'@id':`${url}#breadcrumb`};
    graph.push({'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:`${site}/`},{'@type':'ListItem',position:2,name:page.name,item:url}]});
  }
  if(page.page==='projects')webPage.mainEntity={'@type':'ItemList',itemListElement:projects.map((project,i)=>({'@type':'ListItem',position:i+1,item:{
    '@type':'CreativeWork',name:project.title,genre:project.type,description:project.description,url:project.url,
    image:site+(project.cover?.src||project.gallery[0].shots[0].src),creator:{'@id':`${site}/#organization`},keywords:project.tags.split(' • ').join(', ')}}))};
  graph.push(webPage);
  // `<` is escaped so no text in the data can close the script element early.
  return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c');
}

// Hash the text with line endings normalised, so a Windows checkout (CRLF) and CI (LF) agree.
const hashOf=file=>createHash('sha256').update(readFileSync(file,'utf8').replaceAll('\r\n','\n')).digest('hex').slice(0,12);
const versions=Object.fromEntries(['app.js','style.css','projects.css'].map(asset=>[asset,hashOf(`dist/${asset}`)]));
const layout=readFileSync('src/site/layout.html','utf8');
// The brief form appears twice (contact dialog and contact page), so it is written once.
const briefForm=readFileSync('src/site/brief-form.html','utf8').trimEnd();

function footer(next){
  const live=projects.map(project=>`<a href="${project.url}" target="_blank" rel="noopener">${project.title}&nbsp;↗</a>`).join('');
  return `  <footer class="site-footer">
    <div class="footer-grid section">
      <div class="footer-brand"><a class="footer-logo" href="/">ZEL</a><p>Bold ideas, brought to life.</p></div>
      <nav class="footer-col" aria-label="Footer"><span class="footer-label">EXPLORE</span>${pages.map(p=>`<a href="${p.route}">${labels[p.page]}</a>`).join('')}</nav>
      <div class="footer-col"><span class="footer-label">LIVE WORK</span>${live}</div>
      <div class="footer-col footer-contact"><span class="footer-label">CONTACT</span>${contactLinks}</div>
      <div class="footer-col"><span class="footer-label">START A PROJECT</span><p>Have an idea worth building?</p><button class="pill dark" data-contact>LET’S TALK <span class="small-dot">•</span></button></div>
    </div>
    <div class="footer-bottom section"><span>© 2026 ZEL</span><a href="#main">BACK TO TOP ↑</a></div>
    <a class="next-page" href="${next.route}" data-next-page><span class="next-hint">KEEP SCROLLING<br>TO LEARN MORE</span><span class="next-title">${labels[next.page]}</span><span class="next-label">NEXT PAGE <i><b></b><b></b></i></span></a>
  </footer>`;
}

const escapeAttr=text=>text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function render(page,next){
  const content=readFileSync(`src/site/pages/${page.page}.html`,'utf8').trimEnd();
  let html=layout
    .replaceAll('{{title}}',escapeAttr(page.title)).replaceAll('{{description}}',escapeAttr(page.description)).replace('{{page}}',page.page)
    .replaceAll('{{url}}',site+page.route).replaceAll('{{site}}',site)
    .replace('{{robots}}',page.noindex?'noindex, follow':'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    .replace('{{verification}}',googleSiteVerification&&!page.noindex?`<meta name="google-site-verification" content="${escapeAttr(googleSiteVerification)}">\n  `:'')
    .replaceAll('{{og-image}}',ogImage.url).replaceAll('{{og-image-alt}}',escapeAttr(ogImage.alt))
    .replace('{{main}}',content.replace('{{project-grid}}',projectGrid(page.page==='projects')))
    .replace('{{footer}}',footer(next))
    .replaceAll('{{brief-form}}',briefForm)
    .replaceAll('{{contact-links}}',contactLinks).replace('{{schema}}',schema(page))
    .replaceAll(`<a href="${page.route}">`,`<a href="${page.route}" aria-current="page">`);
  // A missing page has no canonical address of its own.
  if(page.noindex)html=html.replace(/\n  <link rel="canonical"[^>]*>/,'').replace(/\n  <meta property="og:url"[^>]*>/,'');
  for(const [asset,hash] of Object.entries(versions))html=html.replaceAll(`/${asset}"`,`/${asset}?v=${hash}"`);
  const leftover=html.match(/\{\{[a-z-]+\}\}/);if(leftover)throw new Error(`${page.out}: unfilled ${leftover[0]}`);
  mkdirSync(dirname(page.out),{recursive:true});writeFileSync(page.out,html);
}
pages.forEach((page,i)=>render(page,pages[(i+1)%pages.length]));
render(notFound,pages[0]);

// Sitemap: every route, with the date its content last changed in git (left out when the history is
// missing, as a guessed date is worse than none) and the images each page shows, for image search.
function lastModified(files){
  try{return execFileSync('git',['log','-1','--format=%cs','--',...files],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim();}catch{return '';}
}
const shared=['src/site/layout.html','src/site/brief-form.html','scripts/build.mjs'];
const pageImages={
  home:['/assets/projects/fogstores-haze-laptop.webp','/assets/projects/fogstores-streetwear.webp','/assets/projects/infinity-hero.webp','/assets/projects/bnm-menu.webp'],
  projects:projects.flatMap(project=>project.gallery.flatMap(group=>group.shots).map(shot=>shot.src)),
};
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page=>{
  const date=lastModified([`src/site/pages/${page.page}.html`,'src/projects.js',...shared]);
  const images=(pageImages[page.page]||[]).map(src=>`\n    <image:image><image:loc>${site}${src}</image:loc></image:image>`).join('');
  return `  <url>\n    <loc>${site}${page.route}</loc>${date?`\n    <lastmod>${date}</lastmod>`:''}${images}\n  </url>`;
}).join('\n')}
</urlset>
`;
writeFileSync('dist/sitemap.xml',sitemap);
writeFileSync('dist/robots.txt',`# Everything on ZEL is public. Crawlers may fetch scripts, styles and images too, so they can render pages as visitors see them.
User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`);
console.log(`Built ZEL → dist/ (${pages.map(p=>p.route).join(' ')} + 404, sitemap.xml, robots.txt)`);
