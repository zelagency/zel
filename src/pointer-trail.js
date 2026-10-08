// Exact first-order response to a linearly moving target, in milliseconds.
// Filtering input history (rather than each render) keeps refresh rates equivalent.
function filtered(from, target, velocity, dt, smoothing) {
  const decay=Math.exp(-dt/smoothing);
  return target+velocity*(dt-smoothing)+(from-target+velocity*smoothing)*decay;
}

export class PointerTrail {
  constructor({lifetime=620,delay=6,step=1000/240,smoothing=18}={}) {
    this.lifetime=lifetime;this.delay=delay;this.step=step;this.smoothing=smoothing;this.samples=[];
  }
  clear(){this.samples.length=0;}
  push(x,y,t){
    if(!Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(t))return;
    let last=this.samples.at(-1);
    if(last&&t<last.t)return;
    if(last&&t-last.t>120){this.clear();last=undefined;}
    if(last&&t===last.t){last.x=x;last.y=y;return;}
    const dt=last?t-last.t:0;
    this.samples.push({x,y,t,
      fx:last?filtered(last.fx,last.x,(x-last.x)/dt,dt,this.smoothing):x,
      fy:last?filtered(last.fy,last.y,(y-last.y)/dt,dt,this.smoothing):y});
    if(this.samples.length>768)this.samples.splice(0,this.samples.length-768);
  }
  frame(now){
    const samples=this.samples,last=samples.at(-1);
    if(!last||now-last.t>=this.lifetime){this.clear();return [];}
    while(samples.length>2&&samples[1].t<now-this.lifetime)samples.shift();
    const start=Math.max(samples[0].t,now-this.lifetime);
    // Continue settling toward the last real position when events pause; never
    // extrapolate velocity past it, which would overshoot stops and tight turns.
    const end=now-this.delay;
    if(end<=start)return [];
    const points=[];let index=0;
    const sample=t=>{
      while(index<samples.length-1&&samples[index+1].t<t)index++;
      const a=samples[index],b=samples[Math.min(index+1,samples.length-1)];
      const dt=Math.max(0,t-a.t),span=b.t-a.t;
      points.push({
        x:filtered(a.fx,a.x,span?(b.x-a.x)/span:0,dt,this.smoothing),
        y:filtered(a.fy,a.y,span?(b.y-a.y)/span:0,dt,this.smoothing),t});
    };
    sample(start);
    for(let t=Math.ceil(start/this.step)*this.step;t<end;t+=this.step)if(t>start)sample(t);
    sample(end);return points;
  }
  get active(){return this.samples.length>0;}
  opacity(now){return Math.max(0,1-(now-(this.samples.at(-1)?.t??-Infinity))/this.lifetime);}
}
