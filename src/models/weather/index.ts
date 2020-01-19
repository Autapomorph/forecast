import { DateTime } from 'luxon';

import { Coords } from 'models/geolocation';
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
