import { DateTime } from 'luxon';

import { generateWeatherIcon, generateWindIcon } from './generateWeatherIcons';
import mapDegToCardDir from './mapDegToCardDir';
import { pascalToHg } from './pressureConverter';

export default function formatCityData(cityData, timezoneData) {
  let timestamp = DateTime.fromMillis(cityData.dt * 1000).setZone('utc');
  let sunrise = DateTime.fromMillis(cityData.sys.sunrise * 1000).setZone('utc');
  let sunset = DateTime.fromMillis(cityData.sys.sunset * 1000).setZone('utc');

  if (timezoneData) {
    timestamp = timestamp.setZone(timezoneData.zoneName);
    sunrise = sunrise.setZone(timezoneData.zoneName);
    sunset = sunset.setZone(timezoneData.zoneName);
  }

  const timestampLocalized = timestamp.toLocaleString(DateTime.TIME_SIMPLE);
  const sunriseLocalized = sunrise.toLocaleString(DateTime.TIME_SIMPLE);
  const sunsetLocalized = sunset.toLocaleString(DateTime.TIME_SIMPLE);

  const timestampUnix = timestamp.toMillis();
  const sunriseUnix = sunrise.toMillis();
  const sunsetUnix = sunset.toMillis();

  const windDeg = cityData.wind && cityData.wind.deg;
  const windCardDir = windDeg && mapDegToCardDir(cityData.wind.deg);

  const weatherTypeId = cityData.weather[0].id;
  const weatherIcon = generateWeatherIcon(weatherTypeId, sunriseUnix, sunsetUnix);
  const windIcon = generateWindIcon(windDeg);

  return {
    id: cityData.id,
    name: cityData.name,
    country: cityData.sys.country,
    coords: {
      lon: cityData.coord.lon,
      lat: cityData.coord.lat,
    },
    weather: {
      timestamp: timestampLocalized,
      timestampUnix,
      id: weatherTypeId,
      main: cityData.weather[0].main,
      description: cityData.weather[0].description,
      weatherIcon,

      temp: Math.round(cityData.main.temp),
      tempMin: Math.round(cityData.main.temp_min),
      tempMax: Math.round(cityData.main.temp_max),

      visibility: cityData.visibility,
      cloudiness: cityData.clouds && cityData.clouds.all,
      rain: cityData.rain && cityData.rain['3h'],
      snow: cityData.snow && cityData.snow['3h'],

      windSpeed: cityData.wind && Math.round(cityData.wind.speed),
      windDeg,
      windCardDir,
      windIcon,

      pressure: pascalToHg(cityData.main.pressure),
      pressureSeaLevel: pascalToHg(cityData.main.sea_level),
      pressureGrindLevel: pascalToHg(cityData.main.grnd_level),

      pressurehPa: cityData.main.pressure,
      pressureSeaLevelhPa: cityData.main.sea_level,
      pressureGrindLevelhPa: cityData.main.grnd_level,

      humidity: cityData.main.humidity,

      sunrise: sunriseLocalized,
      sunset: sunsetLocalized,
      sunriseUnix,
      sunsetUnix,
    },
  };
}
