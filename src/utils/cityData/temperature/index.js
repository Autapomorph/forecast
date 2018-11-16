import { unitsFormats } from '../../../config/settings';

import { kelvinToCelsius, kelvinToFahrenheit } from './converters';

export function convertTemp(degrees, scale) {
  switch (scale) {
    case unitsFormats.METRIC.temp.title: {
      return kelvinToCelsius(degrees);
    }

    case unitsFormats.IMPERIAL.temp.title: {
      return kelvinToFahrenheit(degrees);
    }

    default: {
      return degrees;
    }
  }
}

export default convertTemp;
