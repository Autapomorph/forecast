import { UnitFormat } from 'models';
import { Actions, Types } from '../types';

export const changeUnitsFormat = (unitsFormat: UnitFormat): Actions => ({
  type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: unitsFormat,
});
