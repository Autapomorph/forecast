import { City } from 'models';

const generateCityName = (city: City): string =>
  `${city.name}${city.region !== city.name ? `, ${city.region}` : ''}`;

export default generateCityName;
