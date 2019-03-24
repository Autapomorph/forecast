import { unitsFormats } from '../../../config/settings/unitsFormats';
/* eslint-disable-next-line import/named */
import { UnitFormat } from '../../../models';

import { pascalToMmHg, pascalToInHg } from './converters';

function convertPressure(pressure: number, unit: UnitFormat): number | null {
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
