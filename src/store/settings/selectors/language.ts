import { Locale } from 'models';
import { State } from '../types';

export const getCurrentLanguage = (state: State): Locale => state.language;
