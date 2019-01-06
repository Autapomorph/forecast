import * as types from '../actionTypes';

export const addCityToFeatured = city => ({
  type: types.FEATURED_CITY_ADD,
  payload: {
    city,
  },
});

export const removeCityFromFeatured = cityId => ({
  type: types.FEATURED_CITY_REMOVE,
  payload: {
    cityId,
  },
});

export const clearFeaturedCities = () => ({
  type: types.FEATURED_CITIES_CLEAR,
});

export const reorderFeaturedCities = (prevIndex, nextIndex) => ({
  type: types.FEATURED_CITIES_REORDER,
  payload: {
    prevIndex,
    nextIndex,
  },
});
