import { City } from 'models';
import { Actions, Types } from '../types';

export const addCityToFeatured = (city: City): Actions => ({
  type: Types.FEATURED_CITY_ADD,
  payload: city,
});

export const removeCityFromFeatured = (cityId: City['id']): Actions => ({
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
