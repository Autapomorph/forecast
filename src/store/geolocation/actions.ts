/* eslint-disable import/named */
import { ThunkAction } from 'redux-thunk';

import GeolocationService from '../../services/geolocation';
import { GeolocationActions as Actions, GeolocationActionTypes as Types } from './types';
import { RootState } from '../types';
import { IPosition } from '../../models';

export const fetchGeoLocationRequest = (): Actions => ({
  type: Types.GEOLOCATION_FETCH_REQUEST,
});

export const fetchGeoLocationSuccess = (geoData: IPosition): Actions => ({
  type: Types.GEOLOCATION_FETCH_SUCCESS,
  payload: geoData,
  error: false,
});

export const fetchGeoLocationFailure = (error: Error): Actions => ({
  type: Types.GEOLOCATION_FETCH_FAILURE,
  payload: error,
  error: true,
});

export const fetchGeolocation = (): ThunkAction<
  void,
  RootState,
  null,
  Actions
> => async dispatch => {
  dispatch(fetchGeoLocationRequest());

  try {
    const geoData = await GeolocationService.fetchGeolocation();
    dispatch(fetchGeoLocationSuccess(geoData));
    return geoData;
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
    throw new Error(error);
  }
};

export const fetchGeolocationByIP = (): ThunkAction<
  void,
  RootState,
  null,
  Actions
> => async dispatch => {
  dispatch(fetchGeoLocationRequest());

  try {
    const geoData = await GeolocationService.fetchGeolocationByIP();
    dispatch(fetchGeoLocationSuccess(geoData));
    return geoData;
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
    throw new Error(error);
  }
};