import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';
import { IWeatherDailyAPIResponse, IWeatherDaily } from '../../models';

export default function formatWeatherDaily(
  weatherData: IWeatherDailyAPIResponse[],
  timezone: string,
): IWeatherDaily[] {
  return weatherData.map(day => {
    const { windBearing, windSpeed, windCardDir, windIcon } = formatWind({
      speed: day.windSpeed,
      bearing: day.windBearing,
    });

    return {
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

      wind: {
        speed: windSpeed,
        bearing: windBearing,
        cardDir: windCardDir,
        icon: windIcon,
      },
    };
  });
}
