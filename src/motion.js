// A fixed simulation step prevents a different spring response at 60/120/144Hz.
export const FIXED_STEP = 1 / 120;
export function damp(value,target,rate,dt) {
  return target+(value-target)*Math.exp(-rate*dt);
}
export function stepBody(body,time,dt=FIXED_STEP) {
  const {position,userData:d}=body;
  const targetY=d.origin.y+Math.sin(time*.55+d.phase)*.08;
  d.v.x+=((d.origin.x-position.x)*42-d.v.x*13)*dt;
  d.v.y+=((targetY-position.y)*42-d.v.y*13)*dt;
  d.v.z+=((d.origin.z-position.z)*42-d.v.z*13)*dt;
  position.x+=d.v.x*dt;position.y+=d.v.y*dt;position.z+=d.v.z*dt;
}
