import { WeatherDailyAPIResponse, WeatherDaily } from 'models';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';

export default function formatWeatherDaily(
  weatherData: WeatherDailyAPIResponse[],
  timezone: string,
): WeatherDaily[] {
  return weatherData.map(day => ({
    timezone,
    timestamp: formatTime(day.time, timezone),
    sunrise: formatTime(day.sunriseTime, timezone),
    sunset: formatTime(day.sunsetTime, timezone),

    weatherIcon: generateWeatherIcon(day.icon),
    summary: day.summary,

    temp: celsiusToKelvin((day.temperatureLow + day.temperatureHigh) / 2),
    humidity: Math.round(day.humidity * 100),
    cloudiness: Math.round(day.cloudCover * 100),
    visibility: day.visibility,
    pressure: day.pressure,

    wind: formatWind({
      speed: day.windSpeed,
      bearing: day.windBearing,
    }),
  }));
}
