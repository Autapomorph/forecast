import { UnitFormat } from 'models';
import { unitsFormats } from 'config/settings/unitsFormats';

import { pascalToMmHg, pascalToInHg } from './converters';

function convertPressure(pressure: number, unit: UnitFormat): number {
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
