// eslint-disable-next-line import/prefer-default-export
export function mpsToKnots(speed: number): number | null {
  if (!speed || Number.isNaN(speed)) {
    return null;
  }

  return Math.round(speed * 1.94);
}
