import { ThunkAction } from 'redux-thunk';

import AlgoliaService from '../../../services/algolia';
import formatCities from '../../../utils/cityData/formatCities';
import { getIsAnythingLoading } from '../../rootSelectors';
import { CitiesActions as Actions, CitiesActionTypes as Types } from '../types/index';
import { RootState } from '../../types';
import { ICity } from '../../../models';

export const fetchCitiesByNameRequest = (searchTerm: string): Actions => ({
  type: Types.CITIES_FETCH_REQUEST,
  payload: searchTerm,
});

export const fetchCitiesByNameSuccess = (cities: ICity[]): Actions => ({
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
): ThunkAction<void, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCitiesByNameRequest(searchParams));

  try {
    const rawCitiesData = await AlgoliaService.fetchCitiesByName(searchParams);
    const citiesData = formatCities(rawCitiesData);

    if (citiesData) {
      dispatch(fetchCitiesByNameSuccess(citiesData));
    }
  } catch (error) {
    dispatch(fetchCitiesByNameFailure(error));
  }
};
