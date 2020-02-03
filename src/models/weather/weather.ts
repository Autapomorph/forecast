import { DateTime } from 'luxon';

import { Coords } from 'models/geolocation';
import { WindFormat } from './wind';

export type Weather = {
  timezone: string;
  coords: Coords;
  current: WeatherCurrent;
  daily: WeatherDaily[];
};

export type WeatherCurrent = {
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
