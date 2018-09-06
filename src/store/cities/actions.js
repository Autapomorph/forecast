import uniqBy from 'lodash/uniqBy';
import keyBy from 'lodash/keyBy';

import * as types from './actionTypes';
import WeatherService from '../../services/weather';
import { resetGeolocation } from '../geolocation/actions';
import { getIsAnythingLoading } from '../rootSelectors';

// city actions
export const fetchCityRequest = () => ({
  type: types.CITY_FETCH_REQUEST,
});

export const fetchCitySuccess = cityData => ({
  type: types.CITY_FETCH_SUCCESS,
  payload: {
    cityData,
  },
});

export const fetchCityFailure = error => ({
  type: types.CITY_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchCity = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCityRequest());
  dispatch(resetGeolocation());

  try {
    const cityData = await WeatherService.fetchCity(searchParams);
    dispatch(fetchCitySuccess(cityData));
  } catch (error) {
    dispatch(fetchCityFailure(error));
  }
};

// cities actions
export const fetchCitiesByNameRequest = () => ({
  type: types.CITIES_FETCH_REQUEST,
});

export const fetchCitiesByNameSuccess = cities => ({
  type: types.CITIES_FETCH_SUCCESS,
  payload: {
    cities,
  },
});

export const fetchCitiesByNameFailure = error => ({
  type: types.CITIES_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchCititesByName = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest());
  dispatch(resetGeolocation());

  try {
    const citiesData = await WeatherService.fetchCititesByName(searchParams);
    const uniqCitiesById = uniqBy(citiesData, 'id');
    const citiesById = keyBy(uniqCitiesById, 'id');
    dispatch(fetchCitiesByNameSuccess(citiesById));
  } catch (error) {
    dispatch(fetchCitiesByNameFailure(error));
  }
};

// featured citites actions
export const addCityToFeatured = city => ({
  type: types.FEATURED_CITY_ADD,
  payload: {
    city: {
      ...city,
      timestamp: Date.now(),
    },
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
