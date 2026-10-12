// 1€ filter (Casiez, Roussel & Vogel, CHI 2012): the cutoff rises with speed, so slow
// movement loses quantisation jitter while fast movement keeps almost no lag.
// Smoothing factor for an exponential filter with the given cutoff (Hz) over dt (s).
const alpha=(cutoff,dt)=>1/(1+1/(2*Math.PI*cutoff*dt));

export class PointerTrail {
  constructor({lifetime=620,minCutoff=2.5,beta=.04,derivativeCutoff=12,settle=12,spacing=2,maxPrediction=24,predictionWindow=34}={}) {
    Object.assign(this,{lifetime,minCutoff,beta,derivativeCutoff,settle,spacing,maxPrediction,predictionWindow});
    this.points=[];this.filter=null;this.prediction=null;this.broken=false;
  }
  clear(){this.points.length=0;this.filter=null;this.prediction=null;this.broken=false;}
  // The next input starts a new stroke; the current one keeps retracting meanwhile.
  break(){this.broken=true;this.prediction=null;}
  push(x,y,t){
    if(!Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(t))return;
    let f=this.filter;
    if(f&&t<=f.t)return;
    if(this.broken||!f||t-f.t>120){
      this.clear();
      this.filter={x,y,rawX:x,rawY:y,dx:0,dy:0,t};this.points.push({x,y,t});return;
    }
    const dt=(t-f.t)/1000,ad=alpha(this.derivativeCutoff,dt);
    f.dx+=ad*((x-f.x)/dt-f.dx);f.dy+=ad*((y-f.y)/dt-f.dy);
    const a=alpha(this.minCutoff+this.beta*Math.hypot(f.dx,f.dy),dt);
    f.x+=a*(x-f.x);f.y+=a*(y-f.y);f.rawX=x;f.rawY=y;f.t=t;this.prediction=null;
    // The newest point always follows the filter; it is committed once it has moved far enough.
    const points=this.points,head=points.at(-1),prev=points.at(-2);
    if(prev&&Math.hypot(head.x-prev.x,head.y-prev.y)<this.spacing){head.x=f.x;head.y=f.y;head.t=t;}
    else points.push({x:f.x,y:f.y,t});
    if(points.length>1024)points.splice(0,points.length-1024);
  }
  // Browser-predicted position for the latest input (PointerEvent.getPredictedEvents).
  predict(x,y){
    const f=this.filter;
    if(!f||this.broken||!Number.isFinite(x)||!Number.isFinite(y))return;
    const dx=x-f.rawX,dy=y-f.rawY,length=Math.hypot(dx,dy),scale=length>this.maxPrediction?this.maxPrediction/length:1;
    this.prediction={dx:dx*scale,dy:dy*scale};
  }
  frame(now){
    const points=this.points,head=points.at(-1),start=now-this.lifetime;
    if(!head||head.t<=start){this.clear();return [];}
    while(points.length>2&&points[1].t<=start)points.shift();
    const out=points.map(({x,y,t})=>({x,y,t}));
    // Retract the tail continuously rather than dropping whole points.
    if(out.length>1&&out[0].t<start){
      const a=out[0],b=out[1],k=(start-a.t)/(b.t-a.t);
      out[0]={x:a.x+(b.x-a.x)*k,y:a.y+(b.y-a.y)*k,t:start};
    }
    // Once input pauses, the filter's small residual lag closes over a few milliseconds so the
    // tip comes to rest exactly on the cursor (never past it).
    const f=this.filter,tip=out.at(-1);
    if(f&&head.t===f.t&&now>f.t){
      const remaining=Math.exp(-(now-f.t)/this.settle);
      tip.x=f.rawX+(tip.x-f.rawX)*remaining;tip.y=f.rawY+(tip.y-f.rawY)*remaining;
    }
    // Draw ahead by the browser's prediction to offset one frame of display latency.
    // It fades out quickly once input stops so a stop never leaves the tip past the cursor.
    const weight=this.prediction?Math.max(0,1-(now-head.t)/this.predictionWindow):0;
    if(weight>0&&!this.broken)out.push({x:tip.x+this.prediction.dx*weight,y:tip.y+this.prediction.dy*weight,t:Math.max(head.t,now)});
    return out;
  }
  get active(){return this.points.length>0;}
}
