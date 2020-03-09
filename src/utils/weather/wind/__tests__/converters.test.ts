import * as converters from '../converters';

describe('Wind speed converters', () => {
  describe('Meters per second to knots', () => {
    it('should return 2', () => {
      expect(converters.mpsToKnots(1)).toBe(2);
    });
  });

  describe('Invalid wind speed', () => {
    it('should throw', () => {
      expect(() => converters.mpsToKnots(NaN)).toThrow();
    });
    it('should throw', () => {
      expect(() => converters.mpsToKnots(-1)).toThrow();
    });
  });
});
