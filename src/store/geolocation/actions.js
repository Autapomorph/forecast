import * as types from './actionTypes';
import GeolocationService from '../../services/geolocation';

// geolocation actions
export const fetchGeoLocationRequest = () => ({
  type: types.GEOLOCATION_FETCH_REQUEST,
});

export const fetchGeoLocationSuccess = geoData => ({
  type: types.GEOLOCATION_FETCH_SUCCESS,
  payload: {
    latitude: geoData.coords.latitude,
    longitude: geoData.coords.longitude,
  },
});

export const fetchGeoLocationFailure = error => ({
  type: types.GEOLOCATION_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchGeolocation = (
  successCallback = () => {},
  errorCallback = () => {},
) => dispatch => {
  dispatch(fetchGeoLocationRequest());

  GeolocationService.fetchGeolocation(
    geoData => {
      dispatch(fetchGeoLocationSuccess(geoData));
      successCallback(geoData);
    },
    error => {
      dispatch(fetchGeoLocationFailure(error));
      errorCallback(error);
    },
  );
};

export const fetchGeolocationByIP = (
  successCallback = () => {},
  errorCallback = () => {},
) => async dispatch => {
  dispatch(fetchGeoLocationRequest());

  try {
    const geoData = await GeolocationService.fetchGeolocationByIP();
    dispatch(fetchGeoLocationSuccess(geoData));
    successCallback(geoData);
  } catch (error) {
    dispatch(fetchGeoLocationFailure(error));
    errorCallback(error);
  }
};
