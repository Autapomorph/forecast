export function generateWeatherIcon(weatherTypeId, sunriseUnix, sunsetUnix) {
  const currentHours = new Date().getHours();
  const sunriseHours = new Date(sunriseUnix).getHours();
  const sunsetHours = new Date(sunsetUnix).getHours();

  let weatherIcon = 'wi-owm-';

  if (currentHours >= sunriseHours && currentHours < sunsetHours) {
    weatherIcon += 'day-';
  } else if (currentHours >= sunsetHours || currentHours < sunriseHours) {
    weatherIcon += 'night-';
  }

  weatherIcon += weatherTypeId;

  return weatherIcon;
}

export function generateWindIcon(windDir, towards = false) {
  let weatherIcon = 'wi-';

  if (typeof windDir === 'number') {
    weatherIcon += towards ? `towards-${windDir}-deg` : `from-${windDir}-deg`;
  } else if (typeof windDir === 'string') {
    weatherIcon += towards ? `towards-${windDir.toLowerCase()}` : `from-${windDir.toLowerCase()}`;
  }

  return weatherIcon;
}
