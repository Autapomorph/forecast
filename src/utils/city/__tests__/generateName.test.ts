import generateName from '../generateName';

describe('generate city name', () => {
  const city = {
    id: 0,
    name: 'city',
    region: 'region',
    countryName: 'country',
    countryCode: 'ctr',
    coords: { latitude: 0, longitude: 0 },
  };

  it('should handle city with region', () => {
    const cityName = generateName(city);
    expect(cityName).toBe(`${city.name}, ${city.region}`);
  });

  it('should handle city with region equal to city name', () => {
    const cityName = generateName({
      ...city,
      region: 'city',
    });
    expect(cityName).toBe(`${city.name}`);
  });
});
