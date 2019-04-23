import { IUnitsFormats } from 'models';

export const unitsFormats: IUnitsFormats = {
  STANDART: 'standart',
  METRIC: 'metric',
  IMPERIAL: 'imperial',
};

export const defaultUnitsFormat = unitsFormats.METRIC;
export const availableUnitsFormats = [unitsFormats.METRIC, unitsFormats.IMPERIAL];
