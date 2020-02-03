import { ThunkAction } from 'redux-thunk';

import { Coords } from 'models';
import { RootState } from 'store/types';
import geolocationService from 'services/geolocation';
import { isProd } from 'utils';
import { Actions, Types } from './types';

const fetchGeoLocationRequest = (): Actions => ({
  type: Types.GEOLOCATION_FETCH_REQUEST,
});

const fetchGeoLocationSuccess = (geoData: Coords): Actions => ({
  type: Types.GEOLOCATION_FETCH_SUCCESS,
  payload: geoData,
  error: false,
});

const fetchGeoLocationFailure = (error: Error): Actions => ({
  type: Types.GEOLOCATION_FETCH_FAILURE,
  payload: error,
  error: true,
});

export type GeolocationSuccessCallback = (position: Coords) => void;
export type GeolocationFailureCallback = (error: Error) => void;

export const fetchGeolocation = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  Actions
> => async dispatch => {
  dispatch(fetchGeoLocationRequest());

  try {
    const geoData = await geolocationService.fetchGeolocation();
    dispatch(fetchGeoLocationSuccess(geoData));
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
  }
};

export const fetchGeolocationByIP = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  Actions
> => async dispatch => {
  dispatch(fetchGeoLocationRequest());

  try {
    const geoData = await geolocationService.fetchGeolocationByIP();
    dispatch(fetchGeoLocationSuccess(geoData));
  } catch (error) {
    if (isProd) {
      dispatch(fetchGeoLocationFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchGeoLocationFailure(error));
    }
  }
};
