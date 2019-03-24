import { ThunkAction } from 'redux-thunk';

import WeatherService from '../../../services/weather';
import GeonamesService from '../../../services/geonames';
import formatWeather from '../../../utils/weatherData/formatWeather';
import formatCities from '../../../utils/cityData/formatCities';
import { getIsAnythingLoading } from '../../rootSelectors';
/* eslint-disable-next-line import/named */
import { CitiesActions as Actions, CitiesActionTypes as Types } from '../types/index';
import { RootState } from '../../types';
import { ICity, IWeather, ICoords } from '../../../models';

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
): ThunkAction<void, RootState, null, Actions> => async (dispatch, getState) => {
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
    dispatch(fetchCityWeatherFailure(error));
  }
};
