import { DailyResponse as WeatherDailyAPIResponse } from 'dark-sky';

import formatDaily from '../formatDaily';

jest.mock('../time', () => () => 'time');
jest.mock('../summary', () => () => 'summary');
jest.mock('../wind/formatWind', () => () => ({}));
jest.mock('../icon/generateWeatherIcon', () => () => 'weather-icon');
jest.mock('../temperature/converters', () => ({
  ...jest.requireActual('../temperature/converters'),
  celsiusToKelvin: jest.fn(() => 0),
}));

describe('Format weather daily', () => {
  it('should format weather daily', () => {
    const data: WeatherDailyAPIResponse[] = [
      {
        time: 0,
        sunriseTime: 0,
        sunsetTime: 0,
        icon: 'clear-day',
        summary: 'summary',
        temperatureLow: 0,
        temperatureHigh: 0,
        humidity: 0.75,
        cloudCover: 0.15,
        visibility: 0,
        pressure: 0,
        windSpeed: 0,
        windBearing: 0,
      },
    ];

    expect(formatDaily(data, 'tz')).toEqual([
      {
        timezone: 'tz',
        timestamp: 'time',
        sunrise: 'time',
        sunset: 'time',
        weatherIcon: 'weather-icon',
        summary: 'summary',
        temp: 0,
        humidity: 75,
        cloudiness: 15,
        visibility: 0,
        pressure: 0,
        wind: {},
      },
    ]);
  });

  it('should return []', () => {
    expect(formatDaily([], 'tz')).toEqual([]);
  });
});
