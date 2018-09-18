export default function getCityCoords(cityData) {
  return {
    lon: cityData.coord.lon,
    lat: cityData.coord.lat,
  };
}
