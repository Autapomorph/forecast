import { unitsFormats } from '../../../config/settings/unitsFormats';
/* eslint-disable-next-line import/named */
import { UnitFormat } from '../../../models';

import { mpsToKnots } from './converters';

export function convertSpeed(speed: number, scale: UnitFormat): number | null {
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
