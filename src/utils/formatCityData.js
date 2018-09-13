import moment from 'moment';

import mapDegToCardDir from './mapDegToCardDir';
import { pascalToHg } from './pressureConverter';

export default function formatCityData(cityData) {
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
      id: cityData.weather[0].id,
      main: cityData.weather[0].main,
      description: cityData.weather[0].description,
      iconId: cityData.weather[0].icon,

      temp: Math.round(cityData.main.temp),
      tempMin: cityData.main.temp_min,
      tempMax: cityData.main.temp_max,

      visibility: cityData.visibility,
      cloudiness: cityData.clouds && cityData.clouds.all,
      rain: cityData.rain && cityData.rain['3h'],
      snow: cityData.snow && cityData.snow['3h'],

      windSpeed: cityData.wind && cityData.wind.speed,
      windDeg: cityData.wind && cityData.wind.deg,
      windCardDir: cityData.wind && cityData.wind.deg && mapDegToCardDir(cityData.wind.deg),

      pressure: pascalToHg(cityData.main.pressure),
      pressureSeaLevel: pascalToHg(cityData.main.sea_level),
      pressureGrindLevel: pascalToHg(cityData.main.grnd_level),

      pressurehPa: cityData.main.pressure,
      pressureSeaLevelhPa: cityData.main.sea_level,
      pressureGrindLevelhPa: cityData.main.grnd_level,

      humidity: cityData.main.humidity,

      sunrise: moment.unix(cityData.sys.sunrise).format('HH:mm'),
      sunset: moment.unix(cityData.sys.sunset).format('HH:mm'),
    },
  };
}
