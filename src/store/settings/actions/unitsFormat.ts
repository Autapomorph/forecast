import { UnitsFormat } from 'models';
import { Actions, Types } from '../types';

export const changeUnitsFormat = (unitsFormat: UnitsFormat): Actions => ({
  type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: unitsFormat,
});
