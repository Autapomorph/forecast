import { ThunkAction } from 'redux-thunk';

import { City, Weather, Coords } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import weatherService from 'services/weather';
import citiesService from 'services/cities';
import { isProd } from 'utils';
import formatWeather from 'utils/weatherData/formatWeather';
import formatCities from 'utils/cityData/formatCities';
import { Actions, Types } from '../types';

export const fetchCityWeatherRequest = (): Actions => ({
  type: Types.CITY_WEATHER_FETCH_REQUEST,
});

export const fetchCityWeatherSuccess = (cityData: City & Weather): Actions => ({
  type: Types.CITY_WEATHER_FETCH_SUCCESS,
  payload: cityData,
  error: false,
});

const fetchCityWeatherFailure = (error: Error): Actions => ({
  type: Types.CITY_WEATHER_FETCH_FAILURE,
  payload: error,
  error: true,
});

export const fetchCityWeatherByPosition = (
  position: Coords,
): ThunkAction<Promise<void>, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCityWeatherRequest());

  try {
    const [rawCityWeatherData, rawNearbyData] = await Promise.all([
      weatherService.request(position),
      citiesService.request(position),
    ]);

    const cityWeatherData = formatWeather(rawCityWeatherData);
    const nearbyData = formatCities(rawNearbyData);

    if (nearbyData) {
      dispatch(fetchCityWeatherSuccess({ ...cityWeatherData, ...nearbyData[0] }));
    }
  } catch (error) {
    if (isProd) {
      dispatch(fetchCityWeatherFailure(new Error('messages.errors.common.fetchFailed')));
    } else {
      dispatch(fetchCityWeatherFailure(error));
    }
  }
};
