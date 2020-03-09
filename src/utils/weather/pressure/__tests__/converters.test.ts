import { pascalToMmHg, pascalToInHg } from '../converters';

describe('Pressure converters', () => {
  describe('should convert Pascal to MmHg', () => {
    it('should return 750', () => {
      expect(pascalToMmHg(1000)).toBe(750);
    });
  });

  describe('should convert Pascal to inHg', () => {
    it('should return 22.15', () => {
      expect(pascalToInHg(750)).toBe(22.15);
    });
  });

  describe('Invalid pressure', () => {
    it('should throw', () => {
      expect(() => pascalToMmHg(NaN)).toThrow();
      expect(() => pascalToInHg(NaN)).toThrow();
      expect(() => pascalToMmHg(-1)).toThrow();
      expect(() => pascalToInHg(-1)).toThrow();
    });
  });
});
