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
  if (
    windDir === null ||
    windDir === undefined ||
    typeof windDir !== 'number' ||
    Number.isNaN(windDir)
  ) {
    throw new Error('Invalid wind direction');
  }

  const formattedWindDir = Math.round(windDir);
  const weatherIcon = towards ? `towards-${formattedWindDir}-deg` : `from-${formattedWindDir}-deg`;

  return weatherIcon;
}
