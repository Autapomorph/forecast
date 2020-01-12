import { WeatherAPIResponse, Weather } from 'models';
import formatWeatherDaily from './formatWeatherDaily';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';

export default function formatWeather(weatherData: WeatherAPIResponse): Weather {
  const currentWeather = weatherData.currently;
  const dailyWeather = weatherData.daily;
  const { timezone } = weatherData;

  return {
    timezone,
    coords: {
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    },
    weather: {
      timestamp: formatTime(currentWeather.time, timezone),
      sunrise: formatTime(dailyWeather.data[0].sunriseTime, timezone),
      sunset: formatTime(dailyWeather.data[0].sunsetTime, timezone),

      weatherIcon: generateWeatherIcon(currentWeather.icon),
      summary: currentWeather.summary,

      temp: celsiusToKelvin(currentWeather.temperature),
      humidity: Math.round(currentWeather.humidity * 100),
      cloudiness: Math.round(currentWeather.cloudCover * 100),
      visibility: currentWeather.visibility,
      pressure: currentWeather.pressure,

      wind: formatWind({
        speed: currentWeather.windSpeed,
        bearing: currentWeather.windBearing,
      }),
    },
    dailyForecast: formatWeatherDaily(weatherData.daily.data, timezone),
  };
}
