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

export const fetchGeolocation = () => async dispatch => {
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

export const fetchGeolocationByIP = () => async dispatch => {
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
