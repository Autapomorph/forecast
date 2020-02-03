import { City } from 'models';

const generateName = (city: City): string => {
  let name = `${city.name}`;

  if (city.region && city.region !== city.name) {
    name += `, ${city.region}`;
  }

  if (city.countryName) {
    name += `, ${city.countryName}`;
  }

  return name;
};

export default generateName;
