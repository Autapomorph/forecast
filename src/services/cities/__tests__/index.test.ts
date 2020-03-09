import fetchMock from 'fetch-mock';

import { API_SEARCH, API_FIND_NEARBY } from 'config/cities';
import citiesService from '..';

describe('CitiesService tests', () => {
  const expected = {
    totalResultsCount: 1,
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
    ],
  };

  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('fetch by coords', () => {
    it('should resolve', async () => {
      fetchMock.getOnce(`begin:${API_FIND_NEARBY}`, {
        body: expected,
      });

      await expect(citiesService.request({ latitude: 0, longitude: 0 })).resolves.toEqual(expected);
    });

    it('should throw', async () => {
      fetchMock.getOnce(`begin:${API_FIND_NEARBY}`, {
        throws: new Error(),
      });

      await expect(citiesService.request({ latitude: 0, longitude: 0 })).rejects.toThrow();
    });
  });

  describe('fetch by search term', () => {
    it('should resolve', async () => {
      fetchMock.getOnce(`begin:${API_SEARCH}`, {
        body: expected,
      });

      await expect(citiesService.request('search', 0)).resolves.toEqual(expected);
    });

    it('should throw', async () => {
      fetchMock.getOnce(`begin:${API_SEARCH}`, {
        throws: new Error(),
      });

      await expect(citiesService.request('search', 0)).rejects.toThrow();
    });
  });
});
