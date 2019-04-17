import { ICity } from '../../models';

const generateCityName = (city: ICity, language: string): string => {
  const lang = language.slice(0, 2);
  const cityNameDefault = city.name.default[0];
  const cityName = (city.name[lang] && city.name[lang][0]) || cityNameDefault;
  const cityRegion = city.region;

  return `${cityName}${cityRegion !== cityNameDefault ? `, ${cityRegion}` : ''}`;
};

export default generateCityName;
