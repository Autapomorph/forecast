import { SettingsState as State } from './types';
/* eslint-disable-next-line import/named */
import { ILocale, UnitFormat } from '../../models';

export const getCurrentLanguage = (state: State): ILocale => state.language;

export const getCurrentUnitsFormat = (state: State): UnitFormat => state.unitsFormat;
