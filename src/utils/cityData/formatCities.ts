import { ICitiesAPIResponse, ICity } from '../../models';

export default function formatCity(citiesData: ICitiesAPIResponse): ICity[] | null {
  if (!citiesData || !citiesData.geonames) return null;

  const formattedCitiesData = citiesData.geonames.map(city => ({
    id: city.geonameId,
    name: city.name,
    region: city.adminName1,
    country: city.countryCode,
    coords: {
      latitude: Number(city.lat),
      longitude: Number(city.lng),
    },
  }));

  return formattedCitiesData;
}
