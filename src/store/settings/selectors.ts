import { Locale, UnitFormat } from 'models';
import { State } from './types';

export const getCurrentLanguage = (state: State): Locale => state.language;

export const getCurrentUnitsFormat = (state: State): UnitFormat => state.unitsFormat;
