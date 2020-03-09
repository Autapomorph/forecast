import { UnitsFormat } from 'models';
import { unitsFormats } from 'config/unitsFormats';

import { kelvinToCelsius, kelvinToFahrenheit } from './converters';

export function convertTemp(degrees: number, scale: UnitsFormat): number {
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
