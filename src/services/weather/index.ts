import i18n from '../../config/settings/i18n';
import {
  DARKSKY_API_BASE,
  DARKSKY_API_QUERY_LATITUDE_PARAM,
  DARKSKY_API_QUERY_LONGITUDE_PARAM,
  DARKSKY_API_LANG_QUERY_PARAM,
  DARKSKY_API_UNITS_QUERY_PARAM,
} from '../../config/weather';
import combineQueryParams from '../../utils/url/combineQueryParams';
import { isProd } from '../../utils';
import { IWeatherAPIRequest, IWeatherAPIResponse, ICoords } from '../../models';

export default class WeatherService {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  private static getQueryString = (searchParams: Record<string, any>): string => {
    const currentLanguage = i18n.languages[0];

    const queryObject: IWeatherAPIRequest = {
      [DARKSKY_API_LANG_QUERY_PARAM]: currentLanguage,
      [DARKSKY_API_UNITS_QUERY_PARAM]: 'si',
      ...searchParams,
    };

    const queryString = combineQueryParams(queryObject);

    return queryString;
  };

  private static getAPIWeatherEndpoint = ({ latitude, longitude }: ICoords): string => {
    const queryObject: IWeatherAPIRequest = {
      [DARKSKY_API_QUERY_LATITUDE_PARAM]: latitude,
      [DARKSKY_API_QUERY_LONGITUDE_PARAM]: longitude,
    };

    const queryString = WeatherService.getQueryString(queryObject);

    return `${DARKSKY_API_BASE}?${queryString}`;
  };

  public static fetchCityWeather = async (position: ICoords): Promise<IWeatherAPIResponse> => {
    const apiEndpoint = WeatherService.getAPIWeatherEndpoint(position);

    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error('messages.errors.weather.fetchFailed');
    }

    const cityWeatherData: IWeatherAPIResponse = await response.json();

    if (cityWeatherData.flags['darksky-unavailable']) {
      if (isProd) throw new Error('messages.errors.weather.fetchFailed');
      throw new Error(cityWeatherData.flags['darksky-unavailable']);
    }

    return cityWeatherData;
  };
}
