import { CitiesAPIResponse, City } from 'models';

export default function format(citiesData: CitiesAPIResponse): City[] {
  return citiesData.geonames.map(city => ({
    id: city.geonameId,
    name: city.name,
    region: city.adminName1,
    countryName: city.countryName,
    countryCode: city.countryCode,
    coords: {
      latitude: Number(city.lat),
      longitude: Number(city.lng),
    },
  }));
}
