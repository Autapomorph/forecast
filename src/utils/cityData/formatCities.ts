import { ICitiesAPIResponse, ICity } from '../../models';

export default function formatCity(citiesData: ICitiesAPIResponse): ICity[] | null {
  if (!citiesData || !citiesData.hits) return null;

  const formattedCitiesData = citiesData.hits.map(city => ({
    id: city.objectID,
    name: city.locale_names,
    region: city.administrative[0],
    country: city.country_code,
    coords: {
      latitude: city._geoloc.lat, // eslint-disable-line no-underscore-dangle
      longitude: city._geoloc.lng, // eslint-disable-line no-underscore-dangle
    },
  }));

  return formattedCitiesData;
}
