import { GeolocationState as State } from './types';
import { ICoords } from '../../models';

export const getGeolocation = (state: State): ICoords | null => state.data;
export const getIsLoading = (state: State): boolean => state.loading;
export const getErrorMessage = (state: State): string | null => state.errorMessage;
