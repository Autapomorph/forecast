import fetchMock from 'fetch-mock';

import { API_WEATHER_BASE } from 'config/weather';
import weatherService from '..';

describe('WeatherService tests', () => {
  const expected = {
    expected: 'some expected data',
  };

  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should resolve weather data', async () => {
    fetchMock.getOnce(`begin:${API_WEATHER_BASE}`, {
      body: expected,
    });

    await expect(weatherService.request({ latitude: 0, longitude: 0 })).resolves.toEqual(expected);
  });

  it('should throw', async () => {
    fetchMock.getOnce(`begin:${API_WEATHER_BASE}`, {
      throws: new Error(),
    });

    await expect(weatherService.request({ latitude: 0, longitude: 0 })).rejects.toThrow();
  });
});
