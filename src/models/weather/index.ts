import { DateTime } from 'luxon';
import { ICoords } from '../geolocation';
import { IWindFormat } from './wind';

export * from './wind';

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
