import { unitsFormats } from '../../../config/settings';

export function mpsToKnots(speed) {
  if (!speed || Number.isNaN(speed)) {
    return null;
  }

  return Math.round(speed * 1.94);
}

export function convertSpeed(speed, scale) {
  switch (scale) {
    case unitsFormats.IMPERIAL.speed.title: {
      return mpsToKnots(speed);
    }

    default: {
      return speed;
    }
  }
}

export default convertSpeed;
