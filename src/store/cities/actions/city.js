import * as types from '../actionTypes';
import WeatherService from '~/services/weather';
import TimezoneService from '~/services/timezone';
import formatWeatherData from '~/utils/cityData/formatWeatherData';
import getCityCoords from '~/utils/cityData/coords';
import {
  OWM_API_CITY_ID_QUERY_PARAM,
  OWM_API_LATITUDE_QUERY_PARAM,
  OWM_API_LONGITUDE_QUERY_PARAM,
} from '~/config/weather';
import { getIsAnythingLoading } from '~/store/rootSelectors';

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

export const fetchCityWeather = searchParams => async (dispatch, getState) => {
  if (getIsAnythingLoading(getState())) {
    return;
  }

  dispatch(fetchCityWeatherRequest());

  try {
    const [rawCityWeatherData, rawCityForecastData] = await Promise.all([
      WeatherService.fetchCityWeather(searchParams),
      WeatherService.fetchCityForecast(searchParams),
    ]);

    const timezoneData = await TimezoneService.fetchTimezoneByCoords(
      getCityCoords(rawCityWeatherData),
    );

    const cityWeatherData = formatWeatherData(
      rawCityWeatherData,
      rawCityForecastData,
      timezoneData,
    );
    dispatch(fetchCityWeatherSuccess(cityWeatherData));
  } catch (error) {
    dispatch(fetchCityWeatherFailure(error));
  }
};

export const fetchCityWeatherById = cityId =>
  fetchCityWeather({
    [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
  });

export const fetchCityWeatherByPosition = ({ latitude, longitude }) =>
  fetchCityWeather({
    [OWM_API_LATITUDE_QUERY_PARAM]: latitude,
    [OWM_API_LONGITUDE_QUERY_PARAM]: longitude,
  });
