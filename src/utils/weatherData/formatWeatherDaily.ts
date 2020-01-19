import { DailyResponse as WeatherDailyAPIResponse } from 'dark-sky';

import { WeatherDaily } from 'models';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';
import normalize from './summary';

export default function formatWeatherDaily(
  weatherData: WeatherDailyAPIResponse[],
  timezone: string,
): WeatherDaily[] {
  return weatherData.map(day => ({
    timezone,
    timestamp: formatTime(day.time, timezone),
    sunrise: formatTime(day.sunriseTime ?? 0, timezone),
    sunset: formatTime(day.sunsetTime ?? 0, timezone),

    weatherIcon: generateWeatherIcon(day.icon),
    summary: normalize(day.summary ?? ''),

    temp: celsiusToKelvin(((day.temperatureLow ?? 0) + (day.temperatureHigh ?? 0)) / 2),
    humidity: Math.round(day.humidity ?? 0 * 100),
    cloudiness: Math.round(day.cloudCover ?? 0 * 100),
    visibility: day.visibility ?? 0,
    pressure: day.pressure ?? 0,

    wind: formatWind({
      speed: day.windSpeed ?? 0,
      bearing: day.windBearing ?? 0,
    }),
  }));
}
