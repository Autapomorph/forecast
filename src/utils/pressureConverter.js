export function pascalToHg(hPa) {
  if (!hPa || Number.isNaN(hPa)) {
    return null;
  }

  return Math.round(hPa * 0.75006375541921);
}

export function hgToPascal(mmHg) {
  if (!mmHg || Number.isNaN(mmHg)) {
    return null;
  }

  return Math.round(mmHg * 1.33322);
}
