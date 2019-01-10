export default function formatCity(citiesData) {
  if (!citiesData || !citiesData.geonames) return null;

  const formattedCitiesData = citiesData.geonames.map(city => ({
    id: city.geonameId,
    name: city.name,
    region: city.adminName1,
    country: city.countryCode,
    coords: {
      latitude: city.lat,
      longitude: city.lng,
    },
  }));

  return formattedCitiesData;
}
