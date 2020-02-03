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
type TGetCity = ReturnType<typeof cities.getCity>;
export const getCity = (state: State): TGetCity => cities.getCity(state.cities);

type TGetIsCityActive = ReturnType<typeof cities.getIsCityActive>;
export const getIsCityActive = (state: State): TGetIsCityActive =>
  cities.getIsCityActive(state.cities);

type TGetIsCityLoading = ReturnType<typeof cities.getIsCityLoading>;
export const getIsCityLoading = (state: State): TGetIsCityLoading =>
  cities.getIsCityLoading(state.cities);

type TGetCityErrorMessage = ReturnType<typeof cities.getCityErrorMessage>;
export const getCityErrorMessage = (state: State): TGetCityErrorMessage =>
  cities.getCityErrorMessage(state.cities);

type TGetCities = ReturnType<typeof cities.getCities>;
export const getCities = (state: State): TGetCities => cities.getCities(state.cities);

type TGetTotalCount = ReturnType<typeof cities.getTotalCount>;
export const getTotalCount = (state: State): TGetTotalCount => cities.getTotalCount(state.cities);

type TGetOffset = ReturnType<typeof cities.getOffset>;
export const getOffset = (state: State): TGetOffset => cities.getOffset(state.cities);

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

type TGetFeatured = ReturnType<typeof cities.getFeatured>;
export const getFeatured = (state: State): TGetFeatured => cities.getFeatured(state.cities);

type TGetIsFeatured = ReturnType<typeof cities.getIsFeatured>;
export const getIsFeatured = (state: State): TGetIsFeatured => cities.getIsFeatured(state.cities);

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
  typeof getIsGeolocationLoading | typeof getIsCityLoading | typeof getIsCitiesLoading
>;
export const getIsAnythingLoading = (state: State): TGetIsAnythingLoading =>
  getIsGeolocationLoading(state) || getIsCityLoading(state) || getIsCitiesLoading(state);
