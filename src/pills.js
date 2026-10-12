import gsap from 'gsap';
import { damp } from './motion.js';

// Direction-aware fluid fill: a blue disc grows from where the pointer enters a pill and
// drains out toward where it leaves. A pinned pill (sound on) stays filled.
const FILLABLE='.pill:not(.menu-button)';
const isPinned=pill=>pill.matches('.sound[aria-pressed="true"]');

function fillOf(pill){
  let fill=pill.querySelector(':scope>.pill-fill');
  if(!fill){
    fill=document.createElement('span');fill.className='pill-fill';fill.setAttribute('aria-hidden','true');
    pill.prepend(fill);pill.dataset.fluid='';gsap.set(fill,{scale:0});
  }
  return fill;
}
// Pointer position inside the pill (centre when none), and the diameter that covers the
// whole pill from there, plus a little for the anti-aliased edge.
function locate(pill,clientX,clientY){
  const rect=pill.getBoundingClientRect();
  const x=clientX===undefined?rect.width/2:gsap.utils.clamp(0,rect.width,clientX-rect.left);
  const y=clientY===undefined?rect.height/2:gsap.utils.clamp(0,rect.height,clientY-rect.top);
  return {x,y,size:2*Math.hypot(Math.max(x,rect.width-x),Math.max(y,rect.height-y))+4};
}
export function fillPill(pill,clientX,clientY,reduced){
  const fill=fillOf(pill),{x,y,size}=locate(pill,clientX,clientY);
  pill.dataset.filled='';
  // A fresh fill starts at the entry point; re-entering mid-drain flows from where it is.
  if(gsap.getProperty(fill,'scale')<.01)gsap.set(fill,{x:x-size/2,y:y-size/2});
  gsap.set(fill,{width:size,height:size});
  gsap.to(fill,{x:x-size/2,y:y-size/2,scale:1,duration:reduced?0:.6,ease:'power3.out',overwrite:true});
}
export function drainPill(pill,clientX,clientY,reduced){
  if(isPinned(pill))return;
  const fill=fillOf(pill),{x,y}=locate(pill,clientX,clientY),size=gsap.getProperty(fill,'width');
  delete pill.dataset.filled;
  // Carry the disc's centre to the exit point as it shrinks, so it drains out of that edge.
  gsap.to(fill,{x:x-size/2,y:y-size/2,scale:0,duration:reduced?0:.55,ease:'power2.inOut',overwrite:true});
}

export function initPills(isReduced){
  const hoverQuery=matchMedia('(hover: hover) and (pointer: fine)');
  document.addEventListener('pointerover',event=>{
    if(event.pointerType!=='mouse'||!hoverQuery.matches)return;
    const pill=event.target.closest?.(FILLABLE);
    if(pill&&!pill.contains(event.relatedTarget))fillPill(pill,event.clientX,event.clientY,isReduced());
  },{passive:true});
  document.addEventListener('pointerout',event=>{
    if(event.pointerType!=='mouse')return;
    const pill=event.target.closest?.(FILLABLE);
    if(pill&&!pill.contains(event.relatedTarget))drainPill(pill,event.clientX,event.clientY,isReduced());
  },{passive:true});
  // Keyboard focus gets the same treatment, from the centre.
  document.addEventListener('focusin',event=>{
    const pill=event.target.closest?.(FILLABLE);
    if(pill&&document.documentElement.dataset.inputMode==='keyboard')fillPill(pill,undefined,undefined,isReduced());
  });
  document.addEventListener('focusout',event=>{
    const pill=event.target.closest?.(FILLABLE);
    if(pill&&pill.dataset.filled!==undefined&&!pill.matches(':hover'))drainPill(pill,undefined,undefined,isReduced());
  });
}

// Sound icon: a travelling wave while sound is on, easing flat when it is off.
export function initSoundWave(button,isReduced){
  const path=button.querySelector('path');
  let amplitude=0,target=0,phase=0,frame=null,last=0;
  function draw(){
    let d='';
    for(let i=0;i<=22;i++){
      const u=i/22,y=14-amplitude*6.5*Math.sin(u*Math.PI*2+phase)*Math.sin(u*Math.PI);
      d+=`${i?'L':'M'}${(3+i).toFixed(1)} ${y.toFixed(2)}`;
    }
    path.setAttribute('d',d);
  }
  function tick(now){
    frame=null;
    if(document.hidden)return;
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    amplitude=damp(amplitude,target,7,dt);
    if(Math.abs(amplitude-target)<.002)amplitude=target;
    if(!isReduced())phase-=dt*7;
    draw();
    if(amplitude>0&&!isReduced()||amplitude!==target)frame=requestAnimationFrame(tick);
  }
  function start(){if(frame===null){last=0;frame=requestAnimationFrame(tick);}}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&(amplitude>0||amplitude!==target))start();});
  return {
    set(on){
      target=on?1:0;
      if(isReduced()){amplitude=target;draw();return;}
      start();
    }
  };
}
