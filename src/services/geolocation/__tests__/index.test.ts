import fetchMock from 'fetch-mock';

import { API_GEOIP } from 'config/geolocation';
import geolocationService from '..';

// eslint-disable-next-line @typescript-eslint/ban-types
const setGetCurrentPosition = (getCurrentPosition: Function): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).navigator.geolocation = {
    getCurrentPosition,
  };
};

describe('GeolocationService tests', () => {
  const expected = {
    latitude: 0,
    longitude: 0,
  };

  describe('fetch using navigator', () => {
    it('should resolve', async () => {
      setGetCurrentPosition(jest.fn((onSuccess, onError) => onSuccess({ coords: expected })));
      await expect(geolocationService.fetchGeolocation()).resolves.toEqual(expected);
    });

    it('should throw', async () => {
      setGetCurrentPosition(jest.fn((onSuccess, onError) => onError({ code: 1 })));
      await expect(geolocationService.fetchGeolocation()).rejects.toThrow();

      setGetCurrentPosition(jest.fn((onSuccess, onError) => onError({ code: 2 })));
      await expect(geolocationService.fetchGeolocation()).rejects.toThrow();

      setGetCurrentPosition(jest.fn((onSuccess, onError) => onError({ code: 3 })));
      await expect(geolocationService.fetchGeolocation()).rejects.toThrow();

      setGetCurrentPosition(jest.fn((onSuccess, onError) => onError({ code: -1 })));
      await expect(geolocationService.fetchGeolocation()).rejects.toThrow();
    });
  });

  describe('fetch by IP', () => {
    beforeEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('should resolve', async () => {
      fetchMock.getOnce(`begin:${API_GEOIP}`, {
        body: expected,
      });

      await expect(geolocationService.fetchGeolocationByIP()).resolves.toEqual(expected);
    });

    it('should throw', async () => {
      fetchMock.getOnce(`begin:${API_GEOIP}`, {
        throws: new Error(),
      });

      await expect(geolocationService.fetchGeolocationByIP()).rejects.toThrow();
    });
  });
});
