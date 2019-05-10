import { ThunkAction } from 'redux-thunk';

import { ICity, IWeather, ICoords } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import WeatherService from 'services/weather';
import GeonamesService from 'services/geonames';
import { isProd } from 'utils';
import formatWeather from 'utils/weatherData/formatWeather';
import formatCities from 'utils/cityData/formatCities';
import { Actions, Types } from '../types';

export const fetchCityWeatherRequest = (): Actions => ({
  type: Types.CITY_WEATHER_FETCH_REQUEST,
});

export const fetchCityWeatherSuccess = (cityData: ICity & IWeather): Actions => ({
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
  position: ICoords,
): ThunkAction<Promise<void>, RootState, null, Actions> => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCityWeatherRequest());

  try {
    const [rawCityWeatherData, rawNearbyData] = await Promise.all([
      WeatherService.fetchCityWeather(position),
      GeonamesService.fetchNearbyPlace(position),
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
