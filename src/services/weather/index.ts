import { Coords } from 'models';
import i18n from 'config/settings/i18n';
import { DARKSKY_API_BASE } from 'config/weather';
import { isProd } from 'utils';
import combineQueryParams from 'utils/url/combineQueryParams';
import {
  RequestObject as WeatherAPIRequest,
  ResponseObject as WeatherAPIResponse,
  SupportedLanguage,
} from 'dark-sky';

export default class WeatherService {
  private static getQueryString = (searchParams: WeatherAPIRequest): string => {
    const currentLanguage = i18n.languages[0];

    const queryObject: WeatherAPIRequest = {
      lang: currentLanguage as SupportedLanguage,
      units: 'si',
      ...searchParams,
    };

    const queryString = combineQueryParams(queryObject);

    return queryString;
  };

  private static getEndpoint = ({ latitude, longitude }: Coords): string => {
    const queryObject: WeatherAPIRequest = {
      latitude,
      longitude,
    };

    const queryString = WeatherService.getQueryString(queryObject);

    return `${DARKSKY_API_BASE}?${queryString}`;
  };

  public static request = async (position: Coords): Promise<WeatherAPIResponse> => {
    const apiEndpoint = WeatherService.getEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.weather.fetchFailed');
    }

    const cityWeatherData: WeatherAPIResponse = await response.json();

    if (cityWeatherData.flags?.['darksky-unavailable']) {
      if (isProd) throw new Error('messages.errors.weather.fetchFailed');
      throw new Error('darksky-unavailable');
    }

    return cityWeatherData;
  };
}
