import { ICity } from '../../models';

const generateCityName = (city: ICity): string =>
  `${city.name}${city.region && city.region !== city.name ? `, ${city.region}` : ''}`;

export default generateCityName;
