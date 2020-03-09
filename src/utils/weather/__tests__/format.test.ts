import {
  ResponseObject as WeatherAPIResponse,
  CurrentlyResponse,
  DailyBlockObject as DailyResponse,
} from 'dark-sky';

import format from '../format';

jest.mock('../formatCurrent', () => () => ({}));
jest.mock('../formatDaily', () => () => ({}));

describe('Format weather', () => {
  it('should format weather', () => {
    const data = {
      currently: {} as CurrentlyResponse,
      daily: {
        data: [],
      } as DailyResponse,
      timezone: 'tz',
      latitude: 0,
      longitude: 0,
    } as WeatherAPIResponse;

    expect(format(data)).toEqual({
      timezone: data.timezone,
      coords: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      current: {},
      daily: {},
    });
  });

  it('should throw', () => {
    expect(() => format({} as WeatherAPIResponse)).toThrow();
  });
});
