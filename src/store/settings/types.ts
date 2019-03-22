/* eslint-disable import/named */
import { ILocale, UnitFormat } from '../../models';

// eslint-disable-next-line import/prefer-default-export
export interface SettingsState {
  readonly language: ILocale;
  readonly unitsFormat: UnitFormat;
}
