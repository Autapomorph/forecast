/* eslint-disable import/named */
import { SettingsState as State } from './types';
import { ILocale, UnitFormat } from '../../models';

export const getCurrentLanguage = (state: State): ILocale => state.language;

export const getCurrentUnitsFormat = (state: State): UnitFormat => state.unitsFormat;
