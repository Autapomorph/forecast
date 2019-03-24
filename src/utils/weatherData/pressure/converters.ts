export function pascalToMmHg(hPa: number): number {
  if (Number.isNaN(hPa)) {
    throw new Error('"hPa" param is not a number');
  }

  return Math.round(hPa * 0.75006375541921);
}

export function pascalToInHg(hPa: number): number {
  if (Number.isNaN(hPa)) {
    throw new Error('"hPa" param is not a number');
  }

  return Number(((hPa * 0.75006375541921) / 25.4).toFixed(2));
}
