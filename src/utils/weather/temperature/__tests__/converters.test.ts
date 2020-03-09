import * as converters from '../converters';

describe('Temperature converters', () => {
  describe('Celsius to Fahrenheit', () => {
    it('should return 86', () => {
      expect(converters.celsiusToFahrenheit(30)).toBe(86);
    });
  });

  describe('Celsius to Kelvin', () => {
    it('should return 273', () => {
      expect(converters.celsiusToKelvin(0)).toBe(273);
    });
  });

  describe('Fahrenheit to Celsius', () => {
    it('should return 30', () => {
      expect(converters.fahrenheitToCelsius(86)).toBe(30);
    });
  });

  describe('Fahrenheit to Kelvin', () => {
    it('should return 255', () => {
      expect(converters.fahrenheitToKelvin(0)).toBe(255);
    });
  });

  describe('Kelvin to Celsius', () => {
    it('should return -273', () => {
      expect(converters.kelvinToCelsius(0)).toBe(-273);
    });
  });

  describe('Kelvin to Fahrenheit', () => {
    it('should return 32', () => {
      expect(converters.kelvinToFahrenheit(273)).toBe(32);
    });
  });

  describe('Invalid temperature', () => {
    it('should throw', () => {
      expect(() => converters.celsiusToFahrenheit(NaN)).toThrow();
      expect(() => converters.celsiusToKelvin(NaN)).toThrow();
      expect(() => converters.fahrenheitToCelsius(NaN)).toThrow();
      expect(() => converters.fahrenheitToKelvin(NaN)).toThrow();
      expect(() => converters.kelvinToCelsius(NaN)).toThrow();
      expect(() => converters.kelvinToFahrenheit(NaN)).toThrow();
    });
  });
});
