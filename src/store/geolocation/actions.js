import * as types from './actionTypes';

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

  navigator.geolocation.getCurrentPosition(
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
