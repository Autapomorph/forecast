import store from '../../store';
import { getCurrentLanguage, getCurrentUnitsFormat } from '../../store/rootSelectors';
import combineQueryParams from '../../utils/url/combineQueryParams';
import {
  OWM_API_WEATHER_CITY,
  OWM_API_FORECAST_CITY,
  OWM_API_SEARCH_CITIES,
  OWM_API_KEY,
  OWM_API_KEY_QUERY_PARAM,
  OWM_API_LANG_QUERY_PARAM,
  OWM_API_UNITS_QUERY_PARAM,
} from '../../config/weather';

export default class WeatherService {
  static getQueryString = searchParams => {
    const state = store.getState();

    const currentLanguage = getCurrentLanguage(state);
    const currentUnitsFormat = getCurrentUnitsFormat(state);

    const queryString = combineQueryParams({
      [OWM_API_KEY_QUERY_PARAM]: OWM_API_KEY,
      [OWM_API_LANG_QUERY_PARAM]: currentLanguage,
      [OWM_API_UNITS_QUERY_PARAM]: currentUnitsFormat,
      ...searchParams,
    });

    return queryString;
  };

  static getAPIWeatherEndpoint = searchParams => {
    const queryString = WeatherService.getQueryString(searchParams);

    return `${OWM_API_WEATHER_CITY}?${queryString}`;
  };

  static getAPIForecastEndpoint = searchParams => {
    const queryString = WeatherService.getQueryString(searchParams);

    return `${OWM_API_FORECAST_CITY}?${queryString}`;
  };

  static getAPISearchEndpoint = searchParams => {
    const queryString = WeatherService.getQueryString(searchParams);

    return `${OWM_API_SEARCH_CITIES}?${queryString}`;
  };

  static fetchCityWeather = async searchParams => {
    const apiEndpoint = WeatherService.getAPIWeatherEndpoint(searchParams);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('Weather fetching failed');
    }

    const cityWeatherData = await response.json();

    if (Number(cityWeatherData.cod) !== 200) {
      throw new Error(cityWeatherData.message);
    }

    return cityWeatherData;
  };

  static fetchCityForecast = async searchParams => {
    const apiEndpoint = WeatherService.getAPIForecastEndpoint(searchParams);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('Forecast fetching failed');
    }

    const cityForecastData = await response.json();

    if (Number(cityForecastData.cod) !== 200) {
      throw new Error(cityForecastData.message);
    }

    return cityForecastData;
  };

  static fetchCititesByName = async searchParams => {
    const apiEndpoint = WeatherService.getAPISearchEndpoint(searchParams);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('Weather fetching failed');
    }

    const cititesData = await response.json();

    if (Number(cititesData.cod) !== 200) {
      throw new Error(cititesData.message);
    }

    return cititesData;
  };
}
