import { UnitsFormat } from 'models';
import { unitsFormats } from 'config/unitsFormats';
import { mpsToKnots } from './converters';

export function convertSpeed(speed: number, scale: UnitsFormat): number {
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
