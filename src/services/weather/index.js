import i18n from '@/config/settings/i18n';
import {
  DARKSKY_API_BASE,
  DARKSKY_API_QUERY_LATITUDE_PARAM,
  DARKSKY_API_QUERY_LONGITUDE_PARAM,
  DARKSKY_API_LANG_QUERY_PARAM,
  DARKSKY_API_UNITS_QUERY_PARAM,
} from '@/config/weather';
import combineQueryParams from '@/utils/url/combineQueryParams';
import { isProd } from '@/utils';

export default class WeatherService {
  static getQueryString = searchParams => {
    const currentLanguage = i18n.languages[0];

    const queryString = combineQueryParams({
      [DARKSKY_API_LANG_QUERY_PARAM]: currentLanguage,
      [DARKSKY_API_UNITS_QUERY_PARAM]: 'si',
      ...searchParams,
    });

    return queryString;
  };

  static getAPIWeatherEndpoint = ({ latitude, longitude }) => {
    const queryString = WeatherService.getQueryString({
      [DARKSKY_API_QUERY_LATITUDE_PARAM]: latitude,
      [DARKSKY_API_QUERY_LONGITUDE_PARAM]: longitude,
    });

    return `${DARKSKY_API_BASE}?${queryString}`;
  };

  static fetchCityWeather = async position => {
    const apiEndpoint = WeatherService.getAPIWeatherEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.weather.fetchFailed');
    }

    const cityWeatherData = await response.json();

    if (cityWeatherData.flags['darksky-unavailable']) {
      if (isProd) throw new Error('messages.errors.weather.fetchFailed');
      throw new Error(cityWeatherData.flags['darksky-unavailable']);
    }

    return cityWeatherData;
  };
}
