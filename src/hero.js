import { damp } from './motion.js';

// A responsive, vector-only wordmark. No shaders, textures, or 3D scene required.
export function initHero(motionQuery){
  const host=document.querySelector('#hero-visual');
  const svg=host.querySelector('.kinetic-word');
  const letters=[...host.querySelectorAll('[data-letter]')];
  if(!svg||letters.length!==3)return;
  const widths=[300,300,300],targetWidths=[300,300,300];
  let pointerX=.5,pointerY=.5,inside=false,visible=true,frameId=null,last=0,shiftY=0;

  function targets(){
    const weights=[0,1,2].map(i=>inside?1+.65*Math.exp(-Math.pow((pointerX-(i+.5)/3)/.22,2)):1);
    const sum=weights.reduce((a,b)=>a+b,0);
    weights.forEach((weight,i)=>targetWidths[i]=900*weight/sum);
  }
  function draw(){
    let x=64;
    letters.forEach((letter,i)=>{letter.setAttribute('transform',`translate(${x.toFixed(3)} ${(60+shiftY).toFixed(3)}) scale(${(widths[i]/300).toFixed(5)} 1)`);x+=widths[i]+36;});
  }
  function frame(now){
    frameId=null;
    if(!visible||document.hidden||motionQuery.matches)return;
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    const targetY=inside?(pointerY-.5)*18:0;
    let distance=Math.abs(shiftY-targetY);
    shiftY=damp(shiftY,targetY,12,dt);
    widths.forEach((width,i)=>{widths[i]=damp(width,targetWidths[i],12,dt);distance+=Math.abs(width-targetWidths[i]);});
    draw();
    if(distance>.03)frameId=requestAnimationFrame(frame);
  }
  function schedule(){if(frameId===null&&visible&&!document.hidden&&!motionQuery.matches){last=0;frameId=requestAnimationFrame(frame);}}
  function reset(){
    if(frameId!==null)cancelAnimationFrame(frameId);
    frameId=null;inside=false;shiftY=0;last=0;
    widths.fill(300);targetWidths.fill(300);draw();
  }
  host.addEventListener('pointermove',event=>{
    if(event.pointerType!=='mouse'||motionQuery.matches)return;
    const rect=svg.getBoundingClientRect();
    pointerX=Math.max(0,Math.min(1,(event.clientX-rect.left)/Math.max(1,rect.width)));
    pointerY=Math.max(0,Math.min(1,(event.clientY-rect.top)/Math.max(1,rect.height)));
    inside=true;targets();schedule();
  },{passive:true});
  host.addEventListener('pointerleave',()=>{inside=false;targets();schedule();});
  host.addEventListener('click',()=>{
    const inverted=host.dataset.inverted!=='true';
    host.dataset.inverted=String(inverted);host.setAttribute('aria-pressed',String(inverted));
  });
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(!visible)reset();}).observe(host);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
  window.addEventListener('blur',reset);
  motionQuery.addEventListener('change',reset);
  draw();
}
