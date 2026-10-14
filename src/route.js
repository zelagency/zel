import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// A dotted trail threads the waypoints ([data-route-point], in DOM order) and draws itself as the
// page scrolls; each waypoint lights up as the trail reaches it. Reduced motion shows it complete.
export function initRoute(map){
  const svg=map?.querySelector('.route');
  if(!svg)return;
  const points=[...map.querySelectorAll('[data-route-point]')];
  svg.innerHTML='<defs><mask id="route-reveal" maskUnits="userSpaceOnUse"><path class="route-mask"/></mask></defs><path class="route-ghost"/><path class="route-line" mask="url(#route-reveal)"/><circle class="route-tip" r="7"/>';
  const [mask,ghost,line]=svg.querySelectorAll('path'),tip=svg.querySelector('.route-tip');
  let total=0,stops=[],progress=0;
  // Offsets ignore transforms, so the cards' entrance animations cannot bend the trail.
  const centre=element=>{
    let x=element.offsetWidth/2,y=element.offsetHeight/2;
    for(let node=element;node&&node!==map;node=node.offsetParent){x+=node.offsetLeft;y+=node.offsetTop;}
    return {x,y};
  };
  function render(p){
    progress=p;const drawn=total*p;
    mask.style.strokeDashoffset=String(total-drawn);
    const moving=p>0&&p<1;tip.style.opacity=moving?'1':'0';
    if(moving){const {x,y}=line.getPointAtLength(drawn);tip.setAttribute('cx',x);tip.setAttribute('cy',y);}
    points.forEach((point,i)=>point.toggleAttribute('data-reached',p>0&&drawn>=stops[i]-1));
  }
  function layout(){
    const width=map.offsetWidth,height=map.offsetHeight,at=points.map(centre);
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('width',width);svg.setAttribute('height',height);
    let d=`M${at[0].x} ${at[0].y}`;stops=[0];
    at.slice(1).forEach((b,i)=>{
      const a=at[i],reach=(b.y-a.y)*.55;
      // Leaves and arrives vertically, so it swings across between sides; stacked waypoints (phones) bow out alternately instead.
      const bow=Math.abs(b.x-a.x)<8?(i%2?-1:1)*Math.min(24,width*.04):0;
      d+=` C${a.x+bow} ${a.y+reach} ${b.x+bow} ${b.y-reach} ${b.x} ${b.y}`;
      line.setAttribute('d',d);stops.push(line.getTotalLength());
    });
    for(const path of [mask,ghost])path.setAttribute('d',d);
    total=stops.at(-1);mask.style.strokeDasharray=`${total} ${total}`;
    render(progress);
  }
  const resize=new ResizeObserver(layout);resize.observe(map);
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
    const state={p:0};render(0);
    gsap.to(state,{p:1,ease:'none',onUpdate:()=>render(state.p),scrollTrigger:{trigger:map,start:'top 65%',end:'bottom 65%',scrub:.8}});
  });
  mm.add('(prefers-reduced-motion: reduce)',()=>render(1));
  return ()=>{resize.disconnect();mm.revert();svg.replaceChildren();points.forEach(point=>point.removeAttribute('data-reached'));};
}
