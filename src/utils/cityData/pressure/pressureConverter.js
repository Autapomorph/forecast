import { unitsFormats } from '../../../config/settings';

export function pascalToMmHg(hPa) {
  if (!hPa || Number.isNaN(hPa)) {
    return null;
  }

  return Math.round(hPa * 0.75006375541921);
}

export function pascalToInHg(hPa) {
  if (!hPa || Number.isNaN(hPa)) {
    return null;
  }

  return Math.round((hPa * 0.75006375541921) / 25.4);
}

export function convertPressure(pressure, unit) {
  switch (unit) {
    case unitsFormats.METRIC.pressure.title: {
      return pascalToMmHg(pressure);
    }

    case unitsFormats.IMPERIAL.pressure.title: {
      return pascalToInHg(pressure);
    }

    default: {
      return pressure;
    }
  }
}

export default convertPressure;
