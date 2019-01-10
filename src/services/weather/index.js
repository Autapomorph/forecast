import i18n from '~/config/settings/i18n';
import {
  DARKSKY_API_FORECAST,
  DARKSKY_API_KEY,
  DARKSKY_API_LANG_QUERY_PARAM,
  DARKSKY_API_UNITS_QUERY_PARAM,
} from '~/config/weather';
import combineQueryParams from '~/utils/url/combineQueryParams';
import { isProd } from '~/utils';

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
    const queryString = WeatherService.getQueryString();

    return `${DARKSKY_API_FORECAST}/${DARKSKY_API_KEY}/${latitude},${longitude}?${queryString}`;
  };

  static fetchCityWeather = async position => {
    const apiEndpoint = WeatherService.getAPIWeatherEndpoint(position);

    const response = await fetch(`https://cors-anywhere.herokuapp.com/${apiEndpoint}`);

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
