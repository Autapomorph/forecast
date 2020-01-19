import { ResponseObject as WeatherAPIResponse } from 'dark-sky';

import { Weather } from 'models';
import formatWeatherDaily from './formatWeatherDaily';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';
import normalize from './summary';

export default function formatWeather(weatherData: WeatherAPIResponse): Weather {
  const currentWeather = weatherData.currently;
  const dailyWeather = weatherData.daily;
  const { timezone } = weatherData;

  if (!currentWeather || !dailyWeather) {
    throw new Error('Weather object is undefined');
  }

  return {
    timezone,
    coords: {
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    },
    weather: {
      timestamp: formatTime(currentWeather.time, timezone),
      sunrise: formatTime(dailyWeather.data[0].sunriseTime ?? 0, timezone),
      sunset: formatTime(dailyWeather.data[0].sunsetTime ?? 0, timezone),

      weatherIcon: generateWeatherIcon(currentWeather.icon),
      summary: normalize(currentWeather.summary ?? ''),

      temp: celsiusToKelvin(currentWeather.temperature ?? 0),
      humidity: Math.round(currentWeather.humidity ?? 0 * 100),
      cloudiness: Math.round(currentWeather.cloudCover ?? 0 * 100),
      visibility: currentWeather.visibility ?? 0,
      pressure: currentWeather.pressure ?? 0,

      wind: formatWind({
        speed: currentWeather.windSpeed ?? 0,
        bearing: currentWeather.windBearing ?? 0,
      }),
    },
    dailyForecast: formatWeatherDaily(dailyWeather.data, timezone),
  };
}
