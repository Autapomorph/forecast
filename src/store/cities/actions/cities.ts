import { ThunkAction } from 'redux-thunk';

import { City } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import GeonamesService from 'services/geonames';
import { isProd } from 'utils';
import formatCities from 'utils/cityData/formatCities';
import { Actions, Types } from '../types';

export const fetchCitiesByNameRequest = (searchTerm: string): Actions => ({
  type: Types.CITIES_FETCH_REQUEST,
  payload: searchTerm,
});

export const fetchCitiesByNameSuccess = (cities: City[]): Actions => ({
  type: Types.CITIES_FETCH_SUCCESS,
  payload: cities,
  error: false,
});

export const fetchCitiesByNameFailure = (error: Error): Actions => ({
  type: Types.CITIES_FETCH_FAILURE,
  payload: error,
  error: true,
});

export const fetchCititesByName = (
  searchParams: string,
): ThunkAction<Promise<void>, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest(searchParams));

  try {
    const rawCitiesData = await GeonamesService.request(searchParams);
    const citiesData = formatCities(rawCitiesData);

    if (citiesData) {
      dispatch(fetchCitiesByNameSuccess(citiesData));
    }
  } catch (error) {
    if (isProd) {
      dispatch(fetchCitiesByNameFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchCitiesByNameFailure(error));
    }
  }
};
