import { City, Weather } from 'models';
import { State } from '../types';

export const getCity = (state: State): (City & Weather) | null => state.city.data;
export const getIsCityActive = (state: State): boolean => state.active === 'city';
export const getIsCityLoading = (state: State): boolean => state.city.loading;
export const getCityErrorMessage = (state: State): string | null => state.city.errorMessage;
