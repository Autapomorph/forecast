import { City } from 'models';

const generateName = (city: City): string => {
  let name = `${city.name}`;

  if (city.region && city.region !== city.name) {
    name += `, ${city.region}`;
  }

  return name;
};

export default generateName;
