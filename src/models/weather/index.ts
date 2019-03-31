import { DateTime } from 'luxon';

import { IWindFormat } from './wind';
import { ICoords } from '../geolocation';
import * as W from '../../config/weather';

export * from './wind';

export interface IWeather {
  timezone: string;
  coords: ICoords;
  weather: {
    timestamp: DateTime;
    sunrise: DateTime;
    sunset: DateTime;
    weatherIcon: string;
    summary: string;
    temp: number;
    humidity: number;
    cloudiness: number;
    visibility: number;
    pressure: number;
    wind: IWindFormat;
  };
  dailyForecast: IWeatherDaily[];
}

export interface IWeatherDaily {
  timezone: string;
  timestamp: DateTime;
  sunrise: DateTime;
  sunset: DateTime;
  weatherIcon: string;
  summary: string;
  temp: number;
  humidity: number;
  cloudiness: number;
  visibility: number;
  pressure: number;
  wind: IWindFormat;
}

export interface IWeatherAPIRequest {
  [W.DARKSKY_API_QUERY_LATITUDE_PARAM]?: number;
  [W.DARKSKY_API_QUERY_LONGITUDE_PARAM]?: number;
  [W.DARKSKY_API_LANG_QUERY_PARAM]?: string;
  [W.DARKSKY_API_UNITS_QUERY_PARAM]?: string;
  [W.DARKSKY_API_EXCLUDE_QUERY_PARAM]?: string | string[];
}

export interface IWeatherDailyAPIResponse {
  time: number;
  sunriseTime: number;
  sunsetTime: number;
  icon: string;
  summary: string;
  temperatureLow: number;
  temperatureHigh: number;
  humidity: number;
  cloudCover: number;
  visibility: number;
  pressure: number;
  windSpeed: number;
  windBearing: number;
}

export interface IWeatherAPIResponse {
  timezone: string;
  latitude: number;
  longitude: number;
  currently: {
    time: number;
    icon: string;
    summary: string;
    temperature: number;
    humidity: number;
    cloudCover: number;
    visibility: number;
    pressure: number;
    windSpeed: number;
    windBearing: number;
  };
  daily: {
    data: IWeatherDailyAPIResponse[];
  };
  flags: {
    'darksky-unavailable': string;
  };
}
