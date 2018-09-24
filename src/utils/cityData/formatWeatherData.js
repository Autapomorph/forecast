import formatWind from './wind/formatWind';
import formatTime from './time/formatTime';
import generateWeatherIcon from './icon/generateWeatherIcon';
import { pascalToHg } from './pressure/pressureConverter';

export default function formatWeatherData(weatherData, forecastData, timezoneData) {
  const {
    timestampLocalized: timestamp,
    sunriseLocalized: sunrise,
    sunsetLocalized: sunset,
    timestampUnix,
    sunriseUnix,
    sunsetUnix,
  } = formatTime({
    timestamp: weatherData.dt,
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    timezoneData,
  });

  const { weatherTypeId, weatherIcon } = generateWeatherIcon({
    weatherTypeId: weatherData.weather[0].id,
    sunrise: sunriseUnix,
    sunset: sunsetUnix,
  });

  const { windDeg, windCardDir, windIcon } = formatWind({
    wind: weatherData.wind,
  });

  return {
    id: weatherData.id,
    name: weatherData.name,
    country: weatherData.sys.country,
    coords: {
      lon: weatherData.coord.lon,
      lat: weatherData.coord.lat,
    },
    weather: {
      timestamp,
      timestampUnix,
      id: weatherTypeId,
      main: weatherData.weather[0].main,
      description: weatherData.weather[0].description,
      weatherIcon,

      temp: Math.round(weatherData.main.temp),
      tempMin: Math.round(weatherData.main.temp_min),
      tempMax: Math.round(weatherData.main.temp_max),

      visibility: weatherData.visibility,
      cloudiness: weatherData.clouds && weatherData.clouds.all,
      rain: weatherData.rain && weatherData.rain['3h'],
      snow: weatherData.snow && weatherData.snow['3h'],

      windSpeed: weatherData.wind && Math.round(weatherData.wind.speed),
      windDeg,
      windCardDir,
      windIcon,

      pressure: pascalToHg(weatherData.main.pressure),
      pressureSeaLevel: pascalToHg(weatherData.main.sea_level),
      pressureGrindLevel: pascalToHg(weatherData.main.grnd_level),

      pressurehPa: weatherData.main.pressure,
      pressureSeaLevelhPa: weatherData.main.sea_level,
      pressureGrindLevelhPa: weatherData.main.grnd_level,

      humidity: weatherData.main.humidity,

      sunrise,
      sunset,
      sunriseUnix,
      sunsetUnix,
    },
  };
}
