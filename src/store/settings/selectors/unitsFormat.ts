import { UnitsFormat } from 'models';
import { State } from '../types';

export const getCurrentUnitsFormat = (state: State): UnitsFormat => state.unitsFormat;
