import { UnitsFormat } from 'models';
import { unitsFormats } from 'config/unitsFormats';

import { pascalToMmHg, pascalToInHg } from './converters';

function convertPressure(pressure: number, unit: UnitsFormat): number {
  switch (unit) {
    case unitsFormats.METRIC: {
      return pascalToMmHg(pressure);
    }

    case unitsFormats.IMPERIAL: {
      return pascalToInHg(pressure);
    }

    default: {
      return pressure;
    }
  }
}

export default convertPressure;
