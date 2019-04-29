import { ILocale, UnitFormat } from 'models';
import { State } from './types';

export const getCurrentLanguage = (state: State): ILocale => state.language;

export const getCurrentUnitsFormat = (state: State): UnitFormat => state.unitsFormat;
