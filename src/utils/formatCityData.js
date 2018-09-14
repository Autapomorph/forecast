import moment from 'moment';

import { generateWeatherIcon, generateWindIcon } from './generateWeatherIcons';
import mapDegToCardDir from './mapDegToCardDir';
import { pascalToHg } from './pressureConverter';

export default function formatCityData(cityData) {
  const sunriseMoment = moment.unix(cityData.sys.sunrise);
  const sunsetMoment = moment.unix(cityData.sys.sunset);
  const sunrise = sunriseMoment.format('HH:mm');
  const sunset = sunsetMoment.format('HH:mm');
  const sunriseUnix = sunriseMoment.valueOf();
  const sunsetUnix = sunsetMoment.valueOf();

  const windDeg = cityData.wind && cityData.wind.speed;
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
      timestamp: moment.unix(cityData.dt).format('HH:mm'),
      id: weatherTypeId,
      main: cityData.weather[0].main,
      description: cityData.weather[0].description,
      weatherIcon,

      temp: Math.round(cityData.main.temp),
      tempMin: cityData.main.temp_min,
      tempMax: cityData.main.temp_max,

      visibility: cityData.visibility,
      cloudiness: cityData.clouds && cityData.clouds.all,
      rain: cityData.rain && cityData.rain['3h'],
      snow: cityData.snow && cityData.snow['3h'],

      windSpeed: cityData.wind && cityData.wind.speed,
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

      sunrise,
      sunset,
      sunriseUnix,
      sunsetUnix,
    },
  };
}
