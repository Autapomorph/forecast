import formatTime from './time/formatTime';
import formatWind from './wind/formatWind';
import formatPressure from './pressure/formatPressure';
import generateWeatherIcon from './icon/generateWeatherIcon';

export default function formatForecastData(forecastData, timezoneData) {
  if (!forecastData || !forecastData.list) return null;

  return forecastData.list.map(forecast => {
    const { timestampLocalized: timestamp, timestampUnix } = formatTime({
      timestamp: forecast.dt,
      timezoneData,
    });

    const { weatherTypeId, weatherIcon } = generateWeatherIcon({
      weatherTypeId: forecast.weather[0].id,
    });

    const { windDeg, windSpeed, windCardDir, windIcon } = formatWind({
      wind: forecast.wind,
    });

    const { pressure, pressureSeaLevel, pressureGrindLevel } = formatPressure({
      pressure: forecast.main.pressure,
      pressureSeaLevel: forecast.main.sea_level,
      pressureGrindLevel: forecast.main.grnd_level,
    });

    return {
      timestamp,
      timestampUnix,

      id: weatherTypeId,
      main: forecast.weather[0].main,
      description: forecast.weather[0].description,
      weatherIcon,

      temp: Math.round(forecast.main.temp),
      tempMin: Math.round(forecast.main.temp_min),
      tempMax: Math.round(forecast.main.temp_max),

      visibility: forecast.visibility,
      humidity: forecast.main.humidity,
      cloudiness: forecast.clouds && forecast.clouds.all,
      rain: forecast.rain && forecast.rain['3h'],
      snow: forecast.snow && forecast.snow['3h'],

      windSpeed,
      windDeg,
      windCardDir,
      windIcon,

      pressure,
      pressureSeaLevel,
      pressureGrindLevel,
    };
  });
}
