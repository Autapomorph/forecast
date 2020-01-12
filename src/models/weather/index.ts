import { DateTime } from 'luxon';

import { Coords } from 'models/geolocation';
import * as W from 'config/weather';
import { WindFormat } from './wind';

export * from './wind';

export type Weather = {
  timezone: string;
  coords: Coords;
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
    wind: WindFormat;
  };
  dailyForecast: WeatherDaily[];
};

export type WeatherDaily = {
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
  wind: WindFormat;
};

export type WeatherAPIRequest = {
  [W.DARKSKY_API_QUERY_LATITUDE_PARAM]?: number;
  [W.DARKSKY_API_QUERY_LONGITUDE_PARAM]?: number;
  [W.DARKSKY_API_LANG_QUERY_PARAM]?: string;
  [W.DARKSKY_API_UNITS_QUERY_PARAM]?: string;
  [W.DARKSKY_API_EXCLUDE_QUERY_PARAM]?: string | string[];
};

export type WeatherDailyAPIResponse = {
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
};

export type WeatherAPIResponse = {
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
    data: WeatherDailyAPIResponse[];
  };
  flags: {
    'darksky-unavailable': string;
  };
};
