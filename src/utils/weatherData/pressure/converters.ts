export function pascalToMmHg(hPa: number): number | null {
  if (!hPa || Number.isNaN(hPa)) {
    return null;
  }

  return Math.round(hPa * 0.75006375541921);
}

export function pascalToInHg(hPa: number): number | null {
  if (!hPa || Number.isNaN(hPa)) {
    return null;
  }

  return Number(((hPa * 0.75006375541921) / 25.4).toFixed(2));
}
