import Service from 'services';
import { Coords } from 'models';
import i18n from 'config/i18n';
import { API_WEATHER_BASE } from 'config/weather';
import {
  RequestObject as WeatherAPIRequest,
  ResponseObject as WeatherAPIResponse,
  SupportedLanguage,
} from 'dark-sky';

class WeatherService extends Service {
  protected getQueryString(searchParams: WeatherAPIRequest): string {
    const currentLanguage = i18n.languages[0];

    const queryObject: WeatherAPIRequest = {
      lang: currentLanguage as SupportedLanguage,
      units: 'si',
      ...searchParams,
    };

    return super.getQueryString(queryObject);
  }

  private getEndpoint({ latitude, longitude }: Coords): string {
    const queryObject: WeatherAPIRequest = {
      latitude,
      longitude,
    };

    const queryString = this.getQueryString(queryObject);
    return `${API_WEATHER_BASE}?${queryString}`;
  }

  public async request(position: Coords): Promise<WeatherAPIResponse> {
    let weatherData: WeatherAPIResponse;
    const apiEndpoint = this.getEndpoint(position);

    try {
      weatherData = await super.fetch(apiEndpoint);
    } catch {
      throw new Error('messages.errors.weather.fetchFailed');
    }

    return weatherData;
  }
}

export default new WeatherService();
