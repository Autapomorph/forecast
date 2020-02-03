import { City } from 'models';
import { State } from '../types';

export const getCities = (state: State): City[] => state.cities.data;
export const getTotalCount = (state: State): number => state.cities.totalCount;
export const getOffset = (state: State): number => state.cities.offset;
export const getSearchTerm = (state: State): string => state.cities.searchTerm;
export const getIsCitiesActive = (state: State): boolean => state.active === 'cities';
export const getIsCitiesLoading = (state: State): boolean => state.cities.loading;
export const getCitiesErrorMessage = (state: State): string | null => state.cities.errorMessage;
