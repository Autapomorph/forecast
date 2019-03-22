/* eslint-disable import/named */
import { unitsFormats } from '../../../config/settings/unitsFormats';
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
