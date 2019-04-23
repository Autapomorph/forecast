import { ThunkAction } from 'redux-thunk';

import { ICoords } from 'models';
import { RootState } from 'store/types';
import GeolocationService from 'services/geolocation';
import { isProd } from 'utils';
import { GeolocationActions as Actions, GeolocationActionTypes as Types } from './types';

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
    if (isProd) {
      dispatch(fetchGeoLocationFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchGeoLocationFailure(error));
    }
  }
};
