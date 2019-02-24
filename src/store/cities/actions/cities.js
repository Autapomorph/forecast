import * as types from '../actionTypes';
import GeonamesService from '@/services/geonames';
import formatCities from '@/utils/cityData/formatCities';
import { getIsAnythingLoading } from '@/store/rootSelectors';

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

export const fetchCititesByName = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest(searchParams));

  try {
    const rawCitiesData = await GeonamesService.fetchCitiesByName(searchParams);
    const citiesData = formatCities(rawCitiesData);

    dispatch(fetchCitiesByNameSuccess(citiesData));
  } catch (error) {
    dispatch(fetchCitiesByNameFailure(error));
  }
};
