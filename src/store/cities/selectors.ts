import { ICity, IWeather } from 'models';
import { State } from './types/index';

// city selectors
export const getSelectedCity = (state: State): (ICity & IWeather) | null => state.selectedCity.data;
export const getIsSelectedCityActive = (state: State): boolean => state.selectedCity.active;
export const getIsSelectedCityLoading = (state: State): boolean => state.selectedCity.loading;
export const getSelectedCityErrorMessage = (state: State): string | null =>
  state.selectedCity.errorMessage;

// cities selectors
export const getCities = (state: State): ICity[] => state.cities.data;
export const getSearchTerm = (state: State): string => state.cities.searchTerm;
export const getIsCitiesActive = (state: State): boolean => state.cities.active;
export const getIsCitiesLoading = (state: State): boolean => state.cities.loading;
export const getCitiesErrorMessage = (state: State): string | null => state.cities.errorMessage;

// featured cities selectors
export const getFeaturedCities = (state: State): ICity[] => state.featuredCities.data;
export const getIsFeaturedCity = (state: State): ((cityId: number) => boolean) => (
  cityId: number,
): boolean => state.featuredCities.data.some(city => city.id === cityId);
