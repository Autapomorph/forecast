export function mpsToKnots(speed: number): number {
  if (Number.isNaN(speed)) {
    throw new Error('"speed" param is not a number');
  }

  return Math.round(speed * 1.94);
}
