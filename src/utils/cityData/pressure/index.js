import { unitsFormats } from '../../../config/settings';

import { pascalToMmHg, pascalToInHg } from './converters';

function convertPressure(pressure, unit) {
  switch (unit) {
    case unitsFormats.METRIC.pressure.title: {
      return pascalToMmHg(pressure);
    }

    case unitsFormats.IMPERIAL.pressure.title: {
      return pascalToInHg(pressure);
    }

    default: {
      return pressure;
    }
  }
}

export default convertPressure;
