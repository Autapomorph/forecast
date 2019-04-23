import { UnitFormat } from 'models';
import { unitsFormats } from 'config/settings/unitsFormats';
import { mpsToKnots } from './converters';

export function convertSpeed(speed: number, scale: UnitFormat): number {
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
