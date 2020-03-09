function checkPressure(pressure: number): void {
  if (Number.isNaN(pressure)) {
    throw new TypeError('`pressure` param is not a number');
  }

  if (pressure < 0) {
    throw new RangeError('`pressure` param is below zero');
  }
}

export function pascalToMmHg(hPa: number): number {
  checkPressure(hPa);
  return Math.round(hPa * 0.75006375541921);
}

export function pascalToInHg(hPa: number): number {
  checkPressure(hPa);
  return Number(((hPa * 0.75006375541921) / 25.4).toFixed(2));
}
