import { unitsFormats } from '~/config/settings/unitsFormats';

import { mpsToKnots } from './converters';

export function convertSpeed(speed, scale) {
  switch (scale) {
    case unitsFormats.IMPERIAL: {
      return mpsToKnots(speed);
    }

    default: {
      return speed;
    }
  }
}

export default convertSpeed;
