import format from '../format';

describe('format cities response', () => {
  it('should format cities response', () => {
    const response = {
      totalResultsCount: 2,
      geonames: [
        {
          geonameId: 1,
          name: '1',
          adminName1: '1',
          countryName: '1',
          countryCode: '1',
          lat: '1',
          lng: '1',
        },
        {
          geonameId: 2,
          name: '2',
          adminName1: '2',
          countryName: '2',
          countryCode: '2',
          lat: '2',
          lng: '2',
        },
      ],
    };

    const [ex1, ex2] = response.geonames;
    const expected = [
      {
        id: ex1.geonameId,
        name: ex1.name,
        region: ex1.adminName1,
        countryName: ex1.countryName,
        countryCode: ex1.countryCode,
        coords: {
          latitude: Number(ex1.lat),
          longitude: Number(ex1.lng),
        },
      },
      {
        id: ex2.geonameId,
        name: ex2.name,
        region: ex2.adminName1,
        countryName: ex2.countryName,
        countryCode: ex2.countryCode,
        coords: {
          latitude: Number(ex2.lat),
          longitude: Number(ex2.lng),
        },
      },
    ];

    const result = format(response);
    expect(result).toEqual(expected);
  });

  it('should handle empty results', () => {
    const result = format({
      totalResultsCount: 0,
      geonames: [],
    });
    expect(result).toEqual([]);
  });
});
