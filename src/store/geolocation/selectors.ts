import { ICoords } from 'models';
import { GeolocationState as State } from './types';

export const getGeoPosition = (state: State): ICoords | null => state.data;
export const getIsLoading = (state: State): boolean => state.loading;
export const getErrorMessage = (state: State): string | null => state.errorMessage;
