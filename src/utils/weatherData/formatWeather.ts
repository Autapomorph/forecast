import formatWeatherDaily from './formatWeatherDaily';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';
import { IWeatherAPIResponse, IWeather } from '../../models';

export default function formatWeather(weatherData: IWeatherAPIResponse): IWeather {
  const currentWeather = weatherData.currently;
  const dailyWeather = weatherData.daily;
  const { timezone } = weatherData;

  const { windBearing, windSpeed, windCardDir, windIcon } = formatWind({
    speed: currentWeather.windSpeed,
    bearing: currentWeather.windBearing,
  });

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

      wind: {
        speed: windSpeed,
        bearing: windBearing,
        cardDir: windCardDir,
        icon: windIcon,
      },
    },
    dailyForecast: formatWeatherDaily(weatherData.daily.data, timezone),
  };
}
