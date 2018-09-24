export default function generateWeatherIcon({ weatherTypeId, sunrise, sunset }) {
  const currentHours = new Date().getHours();
  const sunriseHours = new Date(sunrise).getHours();
  const sunsetHours = new Date(sunset).getHours();

  let weatherIcon = 'wi-owm-';

  if (currentHours >= sunriseHours && currentHours < sunsetHours) {
    weatherIcon += 'day-';
  } else if (currentHours >= sunsetHours || currentHours < sunriseHours) {
    weatherIcon += 'night-';
  }

  weatherIcon += weatherTypeId;

  return {
    weatherTypeId,
    weatherIcon,
  };
}
