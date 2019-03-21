import * as types from '../actionTypes';
import WeatherService from '../../../services/weather';
import GeonamesService from '../../../services/geonames';
import formatWeather from '../../../utils/weatherData/formatWeather';
import formatCities from '../../../utils/cityData/formatCities';
import { getIsAnythingLoading } from '../../rootSelectors';

export const fetchCityWeatherRequest = () => ({
  type: types.CITY_WEATHER_FETCH_REQUEST,
});

export const fetchCityWeatherSuccess = cityData => ({
  type: types.CITY_WEATHER_FETCH_SUCCESS,
  payload: {
    cityData,
  },
});

const fetchCityWeatherFailure = error => ({
  type: types.CITY_WEATHER_FETCH_FAILURE,
  payload: {
    errorMessage: error.message,
  },
});

export const fetchCityWeatherByPosition = position => async (dispatch, getState) => {
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
    const nearbyData = formatCities(rawNearbyData)[0];

    dispatch(fetchCityWeatherSuccess({ ...cityWeatherData, ...nearbyData }));
  } catch (error) {
    dispatch(fetchCityWeatherFailure(error));
  }
};
