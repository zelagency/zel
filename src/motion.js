// Exponential smoothing preserves its response across display refresh rates.
export function damp(value,target,rate,dt) {
  return target+(value-target)*Math.exp(-rate*dt);
}
