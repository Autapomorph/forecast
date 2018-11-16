import { unitsFormats } from '../../../config/settings';

import { mpsToKnots } from './converters';

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
