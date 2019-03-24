import { Action } from 'redux';

/* eslint-disable-next-line import/named */
import { ILocale, UnitFormat } from '../../models';

export enum SettingsActionTypes {
  SETTINGS_CHANGE_LANGUAGE = '@settings/SETTINGS_CHANGE_LANGUAGE',
  SETTINGS_CHANGE_UNITS_FORMAT = '@settings/SETTINGS_CHANGE_UNITS_FORMAT',
}

interface ChangeLanguageAction extends Action {
  type: typeof SettingsActionTypes.SETTINGS_CHANGE_LANGUAGE;
  payload: ILocale;
}

interface ChangeUnitsFormatAction extends Action {
  type: typeof SettingsActionTypes.SETTINGS_CHANGE_UNITS_FORMAT;
  payload: UnitFormat;
}

export type SettingsActions = ChangeLanguageAction | ChangeUnitsFormatAction;

export interface SettingsState {
  readonly language: ILocale;
  readonly unitsFormat: UnitFormat;
}

export type IUnitsFormatContextProps = UnitFormat;
