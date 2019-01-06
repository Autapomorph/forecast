export default function getCityCoords(cityData) {
  return {
    longitude: cityData.coord.lon,
    latitude: cityData.coord.lat,
  };
}
