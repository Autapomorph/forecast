import { ThunkAction } from 'redux-thunk';

import { City, Weather, Coords } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import weatherService from 'services/weather';
import citiesService from 'services/cities';
import { isProd } from 'utils';
import formatWeather from 'utils/weather/format';
import formatCities from 'utils/city/format';
import { Actions, Types } from '../types';

const fetchWeatherRequest = (): Actions => ({
  type: Types.WEATHER_FETCH_REQUEST,
});

const fetchWeatherSuccess = (city: City & Weather): Actions => ({
  type: Types.WEATHER_FETCH_SUCCESS,
  payload: city,
  error: false,
});

const fetchWeatherFailure = (error: Error): Actions => ({
  type: Types.WEATHER_FETCH_FAILURE,
  payload: error,
  error: true,
});

export const fetchWeatherByPosition = (
  position: Coords,
): ThunkAction<Promise<void>, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchWeatherRequest());

  try {
    const [rawWeatherData, rawNearbyData] = await Promise.all([
      weatherService.request(position),
      citiesService.request(position),
    ]);

    const weatherData = formatWeather(rawWeatherData);
    const nearbyData = formatCities(rawNearbyData);

    if (nearbyData) {
      dispatch(fetchWeatherSuccess({ ...weatherData, ...nearbyData[0] }));
    }
  } catch (error) {
    if (isProd) {
      dispatch(fetchWeatherFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchWeatherFailure(error));
    }
  }
};
