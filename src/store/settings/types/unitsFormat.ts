import { Action } from 'redux';

import { UnitsFormat } from 'models';

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
  payload: UnitsFormat;
}

export type Actions = ChangeUnitsFormatAction;

/**
 * state
 */
export type State = UnitsFormat;

/**
 * context
 */
export type UnitsFormatContext = UnitsFormat;
