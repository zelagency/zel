import { contact, instagramUrl } from './contact.js';

// The downloadable project brief: an A4 PDF written directly, so no library loads with the page.
// Text is set in Helvetica, which every PDF reader has built in, so no font is embedded; the logo
// is the hero wordmark's letterforms (src/site/pages/home.html).
const W=595.28,H=841.89,M=44,VALUE_X=194,BOTTOM=H-96;
const BLUE=[.102,.184,.984],PAPER=[.941,.945,.98],INK=[0,0,0],GREY=[.333,.337,.416],RULE=[.8,.8,.82];
// Z, E and L as polygons in a 972×400 box.
const LOGO=[[0,0,300,0,300,64,87,336,300,336,300,400,0,400,0,336,213,64,0,64],
  [336,0,636,0,636,64,408,64,408,166,608,166,608,230,408,230,408,336,636,336,636,400,336,400],
  [672,0,744,0,744,336,972,336,972,400,672,400]];
// Helvetica advance widths (thousandths of the type size) for Windows-1252 codes 32–255, from Adobe's metrics.
const WIDTHS=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,500,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500];
// Built-in Helvetica can only show Windows-1252; a zero width marks a code with no character.
const CODES=new Map([...new TextDecoder('windows-1252').decode(Uint8Array.from(WIDTHS,(_,i)=>i+32))].map((ch,i)=>[ch,i+32]).filter(([,code])=>WIDTHS[code-32]));
const encodable=text=>[...text].every(ch=>CODES.has(ch));
const widthOf=(text,size,tracking=0)=>[...text].reduce((sum,ch)=>sum+WIDTHS[(CODES.get(ch)??63)-32]*size/1000+tracking,0)-(text?tracking:0);
const num=v=>+v.toFixed(2);
const rgb=(color,op)=>`${color.join(' ')} ${op}`;
const pdfString=text=>`(${[...text].map(ch=>String.fromCharCode(CODES.get(ch)??63)).join('').replace(/[()\\]/g,'\\$&')})`;
// Document info (title, author) can hold any character as UTF-16.
const infoString=text=>`<FEFF${Array.from({length:text.length},(_,i)=>text.charCodeAt(i).toString(16).padStart(4,'0')).join('')}>`;
// Anything else the visitor types (other scripts, emoji, ₹) is drawn by the browser into an image.
const FONT='Helvetica, Arial, sans-serif';
let rasterContext;
const context=()=>rasterContext??=document.createElement('canvas').getContext('2d');
function measure(text,size){
  if(encodable(text)||!context())return widthOf(text,size);
  rasterContext.font=`${size}px ${FONT}`;return rasterContext.measureText(text).width;
}
// Breaks text into lines that fit, keeping the writer's own line breaks; a word too long for a line is split.
function wrap(text,width,size){
  return text.split('\n').flatMap(paragraph=>{
    const lines=[];let line='';
    for(const word of paragraph.split(' ')){
      const joined=line?`${line} ${word}`:word;
      if(measure(joined,size)<=width){line=joined;continue;}
      if(line)lines.push(line);
      line='';
      for(const ch of word){if(line&&measure(line+ch,size)>width){lines.push(line);line='';}line+=ch;}
    }
    lines.push(line);
    return lines;
  });
}

export function briefFileName(name){
  const slug=name.normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,40).replace(/^-|-$/g,'');
  return `ZEL-project-brief${slug?`-${slug}`:''}.pdf`;
}

export function briefPdf({name,email,needs,timeline,notes,date=new Date()}){
  const pages=[],images=[];let page,y,first;
  const draw=op=>page.ops.push(op);
  function text(value,x,base,size,color,{tracking=0,align,uri}={}){
    const width=widthOf(value,size,tracking);if(align==='right')x-=width;
    draw(`BT ${rgb(color,'rg')} /F1 ${size} Tf ${tracking} Tc ${num(x)} ${num(H-base)} Td ${pdfString(value)} Tj ET`);
    if(uri)page.links.push([x,H-base-size*.25,x+width,H-base+size*.85,uri].map(v=>typeof v==='number'?num(v):v));
    return width;
  }
  // One line of the visitor's own words: Helvetica where it can, the browser's rendering where it cannot.
  function line(value,x,base,size,color,uri){
    if(encodable(value)||!context())return text(value,x,base,size,color,{uri});
    const scale=4,w=Math.ceil(measure(value,size)*scale)+4,h=Math.ceil(size*1.6*scale),ctx=rasterContext;
    ctx.canvas.width=w;ctx.canvas.height=h;
    ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
    ctx.font=`${size*scale}px ${FONT}`;ctx.fillStyle=`rgb(${color.map(v=>v*255)})`;ctx.fillText(value,0,size*1.15*scale);
    images.push({w,h,data:atob(ctx.canvas.toDataURL('image/jpeg',.92).split(',')[1])});
    draw(`q ${num(w/scale)} 0 0 ${num(h/scale)} ${num(x)} ${num(H-base-size*.45)} cm /I${images.length-1} Do Q`);
  }
  function rounded(x,top,w,h,r,color){
    const b=H-top-h,t=H-top,k=r*.4477,at=(...v)=>v.map(num).join(' ');
    draw(`${rgb(color,'rg')} ${at(x+r,b)} m ${at(x+w-r,b)} l ${at(x+w-k,b,x+w,b+k,x+w,b+r)} c ${at(x+w,t-r)} l ${at(x+w,t-k,x+w-k,t,x+w-r,t)} c ${at(x+r,t)} l ${at(x+k,t,x,t-k,x,t-r)} c ${at(x,b+r)} l ${at(x,b+k,x+k,b,x+r,b)} c f`);
  }
  function logo(x,top,height,color){
    const s=height/400;
    draw(`${rgb(color,'rg')} ${LOGO.map(points=>points.map((v,i)=>i%2?`${num(H-top-v*s)} ${i>1?'l':'m'}`:num(x+v*s)).join(' ')).join(' h ')} h f`);
  }
  const rule=top=>draw(`${rgb(RULE,'RG')} .6 w ${M} ${num(H-top)} m ${num(W-M)} ${num(H-top)} l S`);
  function addPage(){page={ops:[],links:[]};pages.push(page);}
  // Long notes run onto further pages, each opening with a small logo.
  function need(height){
    if(y+height<=BOTTOM)return;
    addPage();logo(M,40,14,BLUE);text('PROJECT BRIEF, CONTINUED',W-M,51,8,GREY,{tracking:1,align:'right'});y=84;
  }
  // Sections read as a two-column sheet: the section name on the left, its answers on the right.
  function section(title){
    y+=30;need(70);rule(y);y+=24;first=true;
    text(title,M,y,8.5,INK,{tracking:1.1});
  }
  function field(label,gap=19){
    if(!first)y+=26;first=false;need(45);
    text(label,VALUE_X,y,9,GREY);y+=gap;
  }
  function lines(value,size,leading,color,uri){
    wrap(value,W-M-VALUE_X,size).forEach((content,i)=>{if(i){need(leading);y+=leading;}line(content,VALUE_X,y,size,color,uri);});
  }
  // Answers show as the form's selected choices: ink pills.
  function chips(values){
    let x=VALUE_X;
    for(const value of values){
      const w=widthOf(value,10.5)+24;
      if(x>VALUE_X&&x+w>W-M){x=VALUE_X;y+=30;}
      rounded(x,y-15.3,w,23,11.5,INK);text(value,x+12,y,10.5,PAPER);x+=w+6;
    }
    y+=4;
  }

  addPage();
  const day=date.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  rounded(24,24,W-48,210,16,BLUE);
  text('PROJECT BRIEF',52,58,8.5,PAPER,{tracking:1.1});
  text(day.toUpperCase(),W-52,58,8.5,PAPER,{tracking:1.1,align:'right'});
  logo(52,102,104,PAPER);
  text('Bold ideas,',W-52,187,15,PAPER,{align:'right'});
  text('brought to life.',W-52,206,15,PAPER,{align:'right'});
  y=244;
  section('CONTACT');
  field('Name');lines(name,13,17,INK);
  // A long address shrinks to stay on one line, so it copies whole.
  const emailSize=Math.max(9,Math.min(13,13*(W-M-VALUE_X)/measure(email,13)));
  field('Email');lines(email,emailSize,17,INK,`mailto:${email}`);
  section('THE PROJECT');
  field('What we’re building',25);chips(needs.length?needs:['Not given']);
  field('Ideal launch',25);chips([timeline||'Not given']);
  if(notes){section('NOTES');lines(notes,11,16,INK);}
  // Visitors download the brief when they cannot email it from here, so it says where to send it.
  y+=30;need(80);
  const top=y,send=`mailto:${contact.email}?subject=${encodeURIComponent(`Project brief from ${name}`)}`;
  rounded(24,top,W-48,72,16,PAPER);
  text('NEXT STEP',M,top+30,8.5,BLUE,{tracking:1.1});
  let x=VALUE_X+text('Email this brief to ',VALUE_X,top+30,12,INK);
  text(contact.email,x,top+30,12,BLUE,{uri:send});
  x=VALUE_X+text('or send it to us on Instagram, ',VALUE_X,top+48,12,INK);
  x+=text(`@${contact.instagram}`,x,top+48,12,BLUE,{uri:instagramUrl});
  text('.',x,top+48,12,INK);

  const footer=[[contact.email,`mailto:${contact.email}`],['zel.agency','https://www.zel.agency/'],[`@${contact.instagram}`,instagramUrl]];
  pages.forEach((current,i)=>{
    page=current;rule(H-66);
    logo(M,H-56,9,BLUE);text('Digital agency, Bangalore',M+30,H-47,8.5,GREY);
    let right=W-M;
    for(const [label,uri] of [...footer,...pages.length>1?[[`${i+1} / ${pages.length}`]]:[]].reverse()){right-=widthOf(label,8.5);text(label,right,H-47,8.5,GREY,{uri});right-=18;}
  });

  // Objects 1 and 2 (catalog and page tree) are filled in once the pages exist.
  const objects=['',''],add=body=>objects.push(body),stream=(dict,data)=>`<< ${dict} /Length ${data.length} >>\nstream\n${data}\nendstream`;
  const font=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  const pictures=images.map(({w,h,data},i)=>`/I${i} ${add(stream(`/Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode`,data))} 0 R`);
  const resources=add(`<< /Font << /F1 ${font} 0 R >> /XObject << ${pictures.join(' ')} >> >>`);
  const kids=pages.map(({ops,links})=>{
    const content=add(stream('',ops.join('\n')));
    const annots=links.map(([x1,y1,x2,y2,uri])=>`<< /Type /Annot /Subtype /Link /Rect [${x1} ${y1} ${x2} ${y2}] /Border [0 0 0] /A << /S /URI /URI (${uri.replace(/[^\x21-\x7e]/gu,encodeURIComponent).replace(/[()\\]/g,'\\$&')}) >> >>`);
    return add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources ${resources} 0 R /Contents ${content} 0 R /Annots [${annots.join(' ')}] >>`);
  });
  objects[0]='<< /Type /Catalog /Pages 2 0 R /ViewerPreferences << /DisplayDocTitle true >> >>';
  objects[1]=`<< /Type /Pages /Kids [${kids.map(kid=>`${kid} 0 R`).join(' ')}] /Count ${kids.length} >>`;
  const info=add(`<< /Title ${infoString(`Project brief from ${name}`)} /Author ${infoString(name)} /Creator (zel.agency) >>`);
  let pdf='%PDF-1.4\n%\xe2\xe3\xcf\xd3\n';
  const offsets=objects.map((body,i)=>{const at=pdf.length;pdf+=`${i+1} 0 obj\n${body}\nendobj\n`;return at;});
  const xref=pdf.length;
  pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.map(at=>`${String(at).padStart(10,'0')} 00000 n \n`).join('')}`;
  pdf+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R /Info ${info} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Uint8Array.from(pdf,ch=>ch.charCodeAt(0));
}
