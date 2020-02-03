import { Action } from 'redux';

import { UnitFormat } from 'models';

/**
 * action types
 */
export enum Types {
  SETTINGS_CHANGE_UNITS_FORMAT = '@settings/SETTINGS_CHANGE_UNITS_FORMAT',
}

/**
 * actions
 */
interface ChangeUnitsFormatAction extends Action {
  type: typeof Types.SETTINGS_CHANGE_UNITS_FORMAT;
  payload: UnitFormat;
}

export type Actions = ChangeUnitsFormatAction;

/**
 * state
 */
export type State = UnitFormat;

/**
 * context
 */
export type UnitsFormatContext = UnitFormat;
