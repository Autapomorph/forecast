import * as settings from './settings/selectors';
import * as cities from './cities/selectors';
import * as geolocation from './geolocation/selectors';
import { RootState as State } from './types';

/**
 * top-level settings selectors
 */
type TGetCurrentLanguage = ReturnType<typeof settings.getCurrentLanguage>;
export const getCurrentLanguage = (state: State): TGetCurrentLanguage =>
  settings.getCurrentLanguage(state.settings);

type TgetCurrentUnitsFormat = ReturnType<typeof settings.getCurrentUnitsFormat>;
export const getCurrentUnitsFormat = (state: State): TgetCurrentUnitsFormat =>
  settings.getCurrentUnitsFormat(state.settings);

/**
 * top-level cities selectors
 */
type TGetSelectedCity = ReturnType<typeof cities.getSelectedCity>;
export const getSelectedCity = (state: State): TGetSelectedCity =>
  cities.getSelectedCity(state.cities);

type TGetIsSelectedCityActive = ReturnType<typeof cities.getIsSelectedCityActive>;
export const getIsSelectedCityActive = (state: State): TGetIsSelectedCityActive =>
  cities.getIsSelectedCityActive(state.cities);

type TGetIsSelectedCityLoading = ReturnType<typeof cities.getIsSelectedCityLoading>;
export const getIsSelectedCityLoading = (state: State): TGetIsSelectedCityLoading =>
  cities.getIsSelectedCityLoading(state.cities);

type TGetSelectedCityErrorMessage = ReturnType<typeof cities.getSelectedCityErrorMessage>;
export const getSelectedCityErrorMessage = (state: State): TGetSelectedCityErrorMessage =>
  cities.getSelectedCityErrorMessage(state.cities);

type TGetCities = ReturnType<typeof cities.getCities>;
export const getCities = (state: State): TGetCities => cities.getCities(state.cities);

type TGetSearchTerm = ReturnType<typeof cities.getSearchTerm>;
export const getSearchTerm = (state: State): TGetSearchTerm => cities.getSearchTerm(state.cities);

type TGetIsCitiesActive = ReturnType<typeof cities.getIsCitiesActive>;
export const getIsCitiesActive = (state: State): TGetIsCitiesActive =>
  cities.getIsCitiesActive(state.cities);

type TGetIsCitiesLoading = ReturnType<typeof cities.getIsCitiesLoading>;
export const getIsCitiesLoading = (state: State): TGetIsCitiesLoading =>
  cities.getIsCitiesLoading(state.cities);

type TGetCitiesErrorMessage = ReturnType<typeof cities.getCitiesErrorMessage>;
export const getCitiesErrorMessage = (state: State): TGetCitiesErrorMessage =>
  cities.getCitiesErrorMessage(state.cities);

type TGetFeaturedCities = ReturnType<typeof cities.getFeaturedCities>;
export const getFeaturedCities = (state: State): TGetFeaturedCities =>
  cities.getFeaturedCities(state.cities);

type TGetIsFeaturedCity = ReturnType<typeof cities.getIsFeaturedCity>;
export const getIsFeaturedCity = (state: State): TGetIsFeaturedCity =>
  cities.getIsFeaturedCity(state.cities);

/**
 * top-level geolocation selectors
 */
type TGetGeoPosition = ReturnType<typeof geolocation.getGeoPosition>;
export const getGeoPosition = (state: State): TGetGeoPosition =>
  geolocation.getGeoPosition(state.geolocation);

type TGetIsGeolocationLoading = ReturnType<typeof geolocation.getIsLoading>;
export const getIsGeolocationLoading = (state: State): TGetIsGeolocationLoading =>
  geolocation.getIsLoading(state.geolocation);

type TGetGeolocationErrorMessage = ReturnType<typeof geolocation.getErrorMessage>;
export const getGeolocationErrorMessage = (state: State): TGetGeolocationErrorMessage =>
  geolocation.getErrorMessage(state.geolocation);

/**
 * top-level common selectors
 */
type TGetIsAnythingLoading = ReturnType<
  typeof getIsGeolocationLoading | typeof getIsSelectedCityLoading | typeof getIsCitiesLoading
>;
export const getIsAnythingLoading = (state: State): TGetIsAnythingLoading =>
  getIsGeolocationLoading(state) || getIsSelectedCityLoading(state) || getIsCitiesLoading(state);
