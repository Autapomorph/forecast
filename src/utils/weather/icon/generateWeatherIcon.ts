import { Icon } from 'dark-sky';

const generateWeatherIcon = (weatherType?: Icon): string =>
  weatherType ? `wi-forecast-io-${weatherType}` : '';

export default generateWeatherIcon;
