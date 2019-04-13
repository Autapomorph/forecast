import { unitsFormats } from '../../../config/settings/unitsFormats';
import { UnitFormat } from '../../../models';

import { kelvinToCelsius, kelvinToFahrenheit } from './converters';

export function convertTemp(degrees: number, scale: UnitFormat): number {
  switch (scale) {
    case unitsFormats.METRIC: {
      return kelvinToCelsius(degrees);
    }

    case unitsFormats.IMPERIAL: {
      return kelvinToFahrenheit(degrees);
    }

    default: {
      return degrees;
    }
  }
}

export default convertTemp;
