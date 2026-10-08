// Resample real pointer history by time, not by input-event or display frequency.
export class PointerTrail {
  constructor({lifetime=620,delay=20,step=1000/120}={}) {
    this.lifetime=lifetime;this.delay=delay;this.step=step;this.samples=[];
  }
  clear(){this.samples.length=0;}
  push(x,y,t){
    if(!Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(t))return;
    const last=this.samples.at(-1);
    if(last&&t<last.t)return;
    if(last&&t-last.t>120)this.clear();
    if(last&&t===last.t){last.x=x;last.y=y;return;}
    this.samples.push({x,y,t});
    if(this.samples.length>768)this.samples.splice(0,this.samples.length-768);
  }
  frame(now){
    const samples=this.samples,last=samples.at(-1);
    if(!last||now-last.t>=this.lifetime){this.clear();return [];}
    while(samples.length>2&&samples[1].t<now-this.lifetime)samples.shift();
    const start=Math.max(samples[0].t,now-this.lifetime);
    const end=Math.min(now-this.delay,last.t);
    if(end<=start)return [];
    const points=[];let index=0;
    const sample=t=>{
      while(index<samples.length-2&&samples[index+1].t<t)index++;
      const a=samples[index],b=samples[Math.min(index+1,samples.length-1)];
      const ratio=Math.max(0,Math.min(1,(t-a.t)/(b.t-a.t||1)));
      points.push({x:a.x+(b.x-a.x)*ratio,y:a.y+(b.y-a.y)*ratio,t});
    };
    sample(start);
    for(let t=Math.ceil(start/this.step)*this.step;t<end;t+=this.step)if(t>start)sample(t);
    sample(end);return points;
  }
  get active(){return this.samples.length>0;}
}
