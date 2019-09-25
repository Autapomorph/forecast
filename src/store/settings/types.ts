import { Action } from 'redux';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import { ILocale, UnitFormat } from 'models';

/**
 * action types
 */
// eslint-disable-next-line import/prefer-default-export
export enum Types {
  SETTINGS_CHANGE_LANGUAGE = '@settings/SETTINGS_CHANGE_LANGUAGE',
  SETTINGS_CHANGE_UNITS_FORMAT = '@settings/SETTINGS_CHANGE_UNITS_FORMAT',
}

/**
 * actions
 */
interface ChangeLanguageAction extends Action {
  type: typeof Types.SETTINGS_CHANGE_LANGUAGE;
  payload: ILocale;
}

interface ChangeUnitsFormatAction extends Action {
  type: typeof Types.SETTINGS_CHANGE_UNITS_FORMAT;
  payload: UnitFormat;
}

export type Actions = ChangeLanguageAction | ChangeUnitsFormatAction;

/**
 * state
 */
export interface State {
  readonly language: ILocale;
  readonly unitsFormat: UnitFormat;
}

export type SettingsState = State & PersistPartial;

/**
 * context
 */
export type IUnitsFormatContext = UnitFormat;
