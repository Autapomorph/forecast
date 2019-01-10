import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { celsiusToKelvin } from './temperature/converters';

export default function formatWeatherDaily(weatherData, timezone) {
  if (!weatherData) return null;

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
      temp: celsiusToKelvin((day.temperatureLow + day.temperatureHigh) / 2),

      humidity: Math.round(day.humidity * 100),
      cloudiness: Math.round(day.cloudCover * 100),

      summary: day.summary,
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
