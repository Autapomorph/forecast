import uniqBy from 'lodash/uniqBy';
import keyBy from 'lodash/keyBy';

import * as types from './actionTypes';
import WeatherService from '../../services/weather';
import TimezoneService from '../../services/timezone';
import formatCityData from '../../utils/cityData/formatCityData';
import getCityCoords from '../../utils/cityData/getCityCoords';
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

  try {
    const rawCityData = await WeatherService.fetchCity(searchParams);
    const timezoneData = await TimezoneService.fetchTimezoneByCoords(getCityCoords(rawCityData));

    const cityData = formatCityData(rawCityData, timezoneData);
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

  try {
    const rawCitiesData = await WeatherService.fetchCititesByName(searchParams);
    const citiesData = rawCitiesData.list.map(cityData => formatCityData(cityData));
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
