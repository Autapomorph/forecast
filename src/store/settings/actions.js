import * as types from './actionTypes';

import WeatherService from '../../services/weather';

export const fetchTicketsRequest = () => ({
  type: types.CITY_WEATHER_FETCH_REQUEST,
});

export const fetchTicketsSuccess = wheatherData => ({
  type: types.CITY_WEATHER_FETCH_SUCCESS,
  payload: {
    data: wheatherData,
  },
});

export const fetchTicketsFailure = error => ({
  type: types.CITY_WEATHER_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchTickets = () => async dispatch => {
  dispatch(fetchTicketsRequest());

  try {
    const wheatherData = await WeatherService.fetchWeather();
    dispatch(fetchTicketsSuccess(wheatherData));
  } catch (error) {
    dispatch(fetchTicketsFailure(error));
  }
};
