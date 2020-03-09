function checkSpeed(speed: number): void {
  if (Number.isNaN(speed)) {
    throw new TypeError('`speed` param is not a number');
  }

  if (speed < 0) {
    throw new RangeError('`speed` param is below zero');
  }
}

export function mpsToKnots(speed: number): number {
  checkSpeed(speed);
  return Math.round(speed * 1.94);
}
