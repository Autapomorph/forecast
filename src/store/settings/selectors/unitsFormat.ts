import { UnitFormat } from 'models';
import { State } from '../types';

export const getCurrentUnitsFormat = (state: State): UnitFormat => state.unitsFormat;
