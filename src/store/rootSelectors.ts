import * as settingsSelectors from './settings/selectors';
import * as citiesSelectors from './cities/selectors';
import * as geolocationSelectors from './geolocation/selectors';
import { RootState as State } from './types';
/* eslint-disable-next-line import/named */
import { UnitFormat, ILocale, ICity, IWeather } from '../models';

/**
 * top-level settings selectors
 */
export const getCurrentLanguage = (state: State): ILocale =>
  settingsSelectors.getCurrentLanguage(state.settings);

export const getCurrentUnitsFormat = (state: State): UnitFormat =>
  settingsSelectors.getCurrentUnitsFormat(state.settings);

/**
 * top-level cities selectors
 */
export const getSelectedCity = (state: State): ICity & IWeather | null =>
  citiesSelectors.getSelectedCity(state.cities);
export const getIsSelectedCityActive = (state: State): boolean =>
  citiesSelectors.getIsSelectedCityActive(state.cities);
export const getIsSelectedCityLoading = (state: State): boolean =>
  citiesSelectors.getIsSelectedCityLoading(state.cities);
export const getSelectedCityErrorMessage = (state: State): string | null =>
  citiesSelectors.getSelectedCityErrorMessage(state.cities);

export const getCities = (state: State): ICity[] => citiesSelectors.getCities(state.cities);
export const getSearchTerm = (state: State): string => citiesSelectors.getSearchTerm(state.cities);
export const getIsCitiesActive = (state: State): boolean =>
  citiesSelectors.getIsCitiesActive(state.cities);
export const getIsCitiesLoading = (state: State): boolean =>
  citiesSelectors.getIsCitiesLoading(state.cities);
export const getCitiesErrorMessage = (state: State): string | null =>
  citiesSelectors.getCitiesErrorMessage(state.cities);

export const getFeaturedCities = (state: State): ICity[] =>
  citiesSelectors.getFeaturedCities(state.cities);
export const getIsFeaturedCity = (state: State): ((cityId: number) => boolean) =>
  citiesSelectors.getIsFeaturedCity(state.cities);

/**
 * top-level geolocation selectors
 */
export const getIsGeolocationLoading = (state: State): boolean =>
  geolocationSelectors.getIsLoading(state.geolocation);
export const getGeolocationErrorMessage = (state: State): string | null =>
  geolocationSelectors.getErrorMessage(state.geolocation);

/**
 * top-level common selectors
 */
export const getIsAnythingLoading = (state: State): boolean =>
  getIsGeolocationLoading(state) || getIsSelectedCityLoading(state) || getIsCitiesLoading(state);
