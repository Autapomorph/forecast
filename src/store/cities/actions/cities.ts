import { ThunkAction } from 'redux-thunk';

import { City } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import citiesService from 'services/cities';
import { isProd } from 'utils';
import format from 'utils/city/format';
import { Actions, Types } from '../types';

const fetchCitiesByNameRequest = (searchTerm: string, offset: number): Actions => ({
  type: Types.CITIES_FETCH_REQUEST,
  payload: { searchTerm, offset },
});

const fetchCitiesByNameSuccess = (cities: City[], totalCount: number): Actions => ({
  type: Types.CITIES_FETCH_SUCCESS,
  payload: { cities, totalCount },
  error: false,
});

const fetchCitiesByNameFailure = (error: Error): Actions => ({
  type: Types.CITIES_FETCH_FAILURE,
  payload: error,
  error: true,
});

export const fetchCititesByName = (
  searchParams: string,
  offset = 0,
): ThunkAction<Promise<void>, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest(searchParams, offset));

  try {
    const rawCitiesData = await citiesService.request(searchParams, offset);
    const citiesData = format(rawCitiesData);
    const citiesTotalCount = rawCitiesData.totalResultsCount;

    if (citiesData) {
      dispatch(fetchCitiesByNameSuccess(citiesData, citiesTotalCount));
    }
  } catch (error) {
    if (isProd) {
      dispatch(fetchCitiesByNameFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchCitiesByNameFailure(error));
    }
  }
};
