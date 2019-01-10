import { unitsFormats } from '~/config/settings/unitsFormats';

import { pascalToMmHg, pascalToInHg } from './converters';

function convertPressure(pressure, unit) {
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
