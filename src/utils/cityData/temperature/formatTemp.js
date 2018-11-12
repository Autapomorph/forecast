import { unitsFormats } from '../../../config/settings';

export function cToF(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees * 1.8 + 32);
}

export function fToC(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round((degrees - 32) / 1.8);
}

export function kToC(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees - 273);
}

export function kToF(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(1.8 * (degrees - 273) + 32);
}

export function convertTemp(degrees, scale) {
  switch (scale) {
    case unitsFormats.METRIC.temp.title: {
      return kToC(degrees);
    }

    case unitsFormats.IMPERIAL.temp.title: {
      return kToF(degrees);
    }

    default: {
      return degrees;
    }
  }
}
