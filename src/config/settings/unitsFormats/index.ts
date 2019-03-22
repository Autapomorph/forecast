import { IUnitsFormats } from '../../../models';

export const unitsFormats: IUnitsFormats = {
  STANDART: 'standart',
  METRIC: 'metric',
  IMPERIAL: 'imperial',
};

export const defaultUnitsFormat: string = unitsFormats.METRIC;
export const availableUnitsFormats: string[] = [unitsFormats.METRIC, unitsFormats.IMPERIAL];
