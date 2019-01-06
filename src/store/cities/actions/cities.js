import uniqBy from 'lodash/uniqBy';
import keyBy from 'lodash/keyBy';

import * as types from '../actionTypes';
import WeatherService from '~/services/weather';
import formatWeatherData from '~/utils/cityData/formatWeatherData';
import { OWM_API_CITY_NAME_QUERY_PARAM } from '~/config/weather';
import { getIsAnythingLoading } from '~/store/rootSelectors';

export const fetchCitiesByNameRequest = searchTerm => ({
  type: types.CITIES_FETCH_REQUEST,
  payload: {
    searchTerm,
  },
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

export const fetchCitites = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest(searchParams[OWM_API_CITY_NAME_QUERY_PARAM]));

  try {
    const rawCitiesData = await WeatherService.fetchCititesByName(searchParams);
    const citiesData = rawCitiesData.list.map(cityData => formatWeatherData(cityData));
    const uniqCitiesById = uniqBy(citiesData, 'id');
    const citiesById = keyBy(uniqCitiesById, 'id');
    dispatch(fetchCitiesByNameSuccess(citiesById));
  } catch (error) {
    dispatch(fetchCitiesByNameFailure(error));
  }
};

export const fetchCititesByName = cityName =>
  fetchCitites({
    [OWM_API_CITY_NAME_QUERY_PARAM]: cityName,
  });
