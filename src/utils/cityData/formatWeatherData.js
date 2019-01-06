import getCityCoords from './coords';
import formatTime from './time';
import formatWind from './wind/formatWind';
import generateWeatherIcon from './icon/generateWeatherIcon';
import formatForecastData from './formatForecastData';

export default function formatWeatherData(weatherData, forecastData, timezoneData) {
  const cityCoords = getCityCoords(weatherData);

  const { timeZone, timestamp, sunrise, sunset } = formatTime({
    timestamp: weatherData.dt,
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    timezoneData,
  });

  const { weatherTypeId, weatherIcon } = generateWeatherIcon({
    weatherTypeId: weatherData.weather[0].id,
    sunrise: sunrise.toMillis(),
    sunset: sunset.toMillis,
  });

  const { windDeg, windSpeed, windCardDir, windIcon } = formatWind({
    wind: weatherData.wind,
  });

  const forecast = formatForecastData(forecastData, timezoneData);

  return {
    id: weatherData.id,
    name: weatherData.name,
    country: weatherData.sys.country,
    coords: cityCoords,
    forecast,
    weather: {
      timestamp,
      timeZone,

      id: weatherTypeId,
      main: weatherData.weather[0].main,
      description: weatherData.weather[0].description,
      weatherIcon,

      temp: Math.round(weatherData.main.temp),
      tempMin: Math.round(weatherData.main.temp_min),
      tempMax: Math.round(weatherData.main.temp_max),

      visibility: weatherData.visibility,
      humidity: weatherData.main.humidity,
      cloudiness: weatherData.clouds && weatherData.clouds.all,
      rain: weatherData.rain && weatherData.rain['3h'],
      snow: weatherData.snow && weatherData.snow['3h'],

      windSpeed,
      windDeg,
      windCardDir,
      windIcon,

      pressure: weatherData.main.pressure,

      sunrise,
      sunset,
    },
  };
}
