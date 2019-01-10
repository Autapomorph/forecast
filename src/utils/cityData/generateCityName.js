const generateCityName = city =>
  `${city.name}${city.region && city.region !== city.name ? `, ${city.region}` : ''}`;

export default generateCityName;
