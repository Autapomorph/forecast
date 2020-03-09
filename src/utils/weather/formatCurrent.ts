import {
  CurrentlyResponse as WeatherCurrentAPIResponse,
  DailyResponse as WeatherDailyAPIResponse,
} from 'dark-sky';

import { WeatherCurrent } from 'models';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';
import normalize from './summary';

export default function formatCurrent(
  current: WeatherCurrentAPIResponse,
  currentDaily: WeatherDailyAPIResponse,
  timezone: string,
): WeatherCurrent {
  return {
    timestamp: formatTime(current.time, timezone),
    sunrise: formatTime(currentDaily.sunriseTime ?? 0, timezone),
    sunset: formatTime(currentDaily.sunsetTime ?? 0, timezone),

    weatherIcon: generateWeatherIcon(current.icon),
    summary: normalize(current.summary ?? ''),

    temp: celsiusToKelvin(current.temperature ?? 0),
    humidity: Math.round((current.humidity ?? 0) * 100),
    cloudiness: Math.round((current.cloudCover ?? 0) * 100),
    visibility: current.visibility ?? 0,
    pressure: current.pressure ?? 0,

    wind: formatWind({
      speed: current.windSpeed ?? 0,
      bearing: current.windBearing ?? 0,
    }),
  };
}
