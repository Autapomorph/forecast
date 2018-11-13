import * as settingsSelectors from './settings/selectors';
import * as citiesSelectors from './cities/selectors';
import * as geolocationSelectors from './geolocation/selectors';

/**
 * top-level settings selectors
 */
export const getCurrentLanguage = state => settingsSelectors.getCurrentLanguage(state.settings);

export const getCurrentUnitsFormat = state =>
  settingsSelectors.getCurrentUnitsFormat(state.settings);

/**
 * top-level cities selectors
 */
export const getSelectedCity = state => citiesSelectors.getSelectedCity(state.cities);
export const getIsSelectedCityActive = state =>
  citiesSelectors.getIsSelectedCityActive(state.cities);
export const getIsSelectedCityLoading = state =>
  citiesSelectors.getIsSelectedCityLoading(state.cities);
export const getSelectedCityErrorMessage = state =>
  citiesSelectors.getSelectedCityErrorMessage(state.cities);

export const getCities = state => citiesSelectors.getCities(state.cities);
export const getSearchTerm = state => citiesSelectors.getSearchTerm(state.cities);
export const getIsCitiesActive = state => citiesSelectors.getIsCitiesActive(state.cities);
export const getIsCitiesLoading = state => citiesSelectors.getIsCitiesLoading(state.cities);
export const getCitiesErrorMessage = state => citiesSelectors.getCitiesErrorMessage(state.cities);

export const getFeaturedCities = state => citiesSelectors.getFeaturedCities(state.cities);
export const getIsFeaturedCity = state => citiesSelectors.getIsFeaturedCity(state.cities);

/**
 * top-level geolocation selectors
 */
export const getIsGeolocationLoading = state =>
  geolocationSelectors.getIsLoading(state.geolocation);
export const getGeolocationErrorMessage = state =>
  geolocationSelectors.getErrorMessage(state.geolocation);

/**
 * top-level common selectors
 */
export const getIsAnythingLoading = state =>
  getIsGeolocationLoading(state) || getIsSelectedCityLoading(state) || getIsCitiesLoading(state);
