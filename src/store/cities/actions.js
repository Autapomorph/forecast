import uniqBy from 'lodash/uniqBy';
import keyBy from 'lodash/keyBy';

import * as types from './actionTypes';
import WeatherService from '../../services/weather';
import TimezoneService from '../../services/timezone';
import formatCityData from '../../utils/cityData/formatCityData';
import getCityCoords from '../../utils/cityData/getCityCoords';
import { getIsAnythingLoading } from '../rootSelectors';

// city actions
export const fetchCityWeatherRequest = () => ({
  type: types.CITY_WEATHER_FETCH_REQUEST,
});

export const fetchCityWeatherSuccess = cityData => ({
  type: types.CITY_WEATHER_FETCH_SUCCESS,
  payload: {
    cityData,
  },
});

export const fetchCityWeatherFailure = error => ({
  type: types.CITY_WEATHER_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchCityWeather = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCityWeatherRequest());

  try {
    const rawCityWeatherData = await WeatherService.fetchCityWeather(searchParams);
    const timezoneData = await TimezoneService.fetchTimezoneByCoords(
      getCityCoords(rawCityWeatherData),
    );

    const cityWeatherData = formatCityData(rawCityWeatherData, timezoneData);
    dispatch(fetchCityWeatherSuccess(cityWeatherData));
  } catch (error) {
    dispatch(fetchCityWeatherFailure(error));
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
