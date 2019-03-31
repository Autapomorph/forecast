import { ThunkAction } from 'redux-thunk';

import GeolocationService from '../../services/geolocation';
/* eslint-disable-next-line import/named */
import { GeolocationActions as Actions, GeolocationActionTypes as Types } from './types';
import { RootState } from '../types';
import { ICoords } from '../../models';

export const fetchGeoLocationRequest = (): Actions => ({
  type: Types.GEOLOCATION_FETCH_REQUEST,
});

export const fetchGeoLocationSuccess = (geoData: ICoords): Actions => ({
  type: Types.GEOLOCATION_FETCH_SUCCESS,
  payload: geoData,
  error: false,
});

export const fetchGeoLocationFailure = (error: Error): Actions => ({
  type: Types.GEOLOCATION_FETCH_FAILURE,
  payload: error,
  error: true,
});

export type GeolocationSuccessCallback = (position: ICoords) => void;
export type GeolocationFailureCallback = (error: Error) => void;

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
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
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
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
  }
};
