import { UnitsFormats } from 'models';

export const unitsFormats: UnitsFormats = {
  STANDART: 'standart',
  METRIC: 'metric',
  IMPERIAL: 'imperial',
};

export const defaultUnitsFormat = unitsFormats.METRIC;
export const availableUnitsFormats = [unitsFormats.METRIC, unitsFormats.IMPERIAL];
