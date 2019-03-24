/* eslint-disable import/named */
import { CitiesActions as Actions, CitiesActionTypes as Types } from '../types/index';
import { ICity } from '../../../models';

export const addCityToFeatured = (city: ICity): Actions => ({
  type: Types.FEATURED_CITY_ADD,
  payload: city,
});

export const removeCityFromFeatured = (cityId: ICity['id']): Actions => ({
  type: Types.FEATURED_CITY_REMOVE,
  payload: cityId,
});

export const clearFeaturedCities = (): Actions => ({
  type: Types.FEATURED_CITIES_CLEAR,
});

export const reorderFeaturedCities = (prevIndex: number, nextIndex: number): Actions => ({
  type: Types.FEATURED_CITIES_REORDER,
  payload: {
    prevIndex,
    nextIndex,
  },
});
