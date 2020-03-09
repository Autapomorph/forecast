import { unitsFormats } from 'config/unitsFormats';
import convertTemp from '..';
import { kelvinToCelsius, kelvinToFahrenheit } from '../converters';

jest.mock('../converters');

describe('Convert temperature', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should convert Kelvin to Celcius', () => {
    convertTemp(1000, unitsFormats.METRIC);

    expect(kelvinToCelsius).toBeCalled();
    expect(kelvinToCelsius).toBeCalledWith(1000);
  });

  it('should convert Kelvin to Fahrenheit', () => {
    convertTemp(1000, unitsFormats.IMPERIAL);

    expect(kelvinToFahrenheit).toBeCalled();
    expect(kelvinToFahrenheit).toBeCalledWith(1000);
  });

  it('should return passed value', () => {
    expect(convertTemp(1000, 'nonexistent units format')).toBe(1000);
    expect(kelvinToCelsius).not.toBeCalled();
    expect(kelvinToFahrenheit).not.toBeCalled();
  });
});
