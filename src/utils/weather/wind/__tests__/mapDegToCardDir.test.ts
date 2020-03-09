import { WindCardDir as D } from 'models/weather/wind';
import mapDegToCardDir from '../mapDegToCardDir';

describe('Map wind degrees to cardinal direction', () => {
  describe('Degrees to cardinal direction', () => {
    it('should return N', () => {
      expect(mapDegToCardDir(0)).toBe(D.N);
      expect(mapDegToCardDir(359)).toBe(D.N);
    });

    it('should return NNE', () => {
      expect(mapDegToCardDir(25)).toBe(D.NNE);
    });

    it('should return NE', () => {
      expect(mapDegToCardDir(50)).toBe(D.NE);
    });

    it('should return ENE', () => {
      expect(mapDegToCardDir(75)).toBe(D.ENE);
    });

    it('should return E', () => {
      expect(mapDegToCardDir(100)).toBe(D.E);
    });

    it('should return ESE', () => {
      expect(mapDegToCardDir(115)).toBe(D.ESE);
    });

    it('should return SE', () => {
      expect(mapDegToCardDir(135)).toBe(D.SE);
    });

    it('should return SSE', () => {
      expect(mapDegToCardDir(150)).toBe(D.SSE);
    });

    it('should return S', () => {
      expect(mapDegToCardDir(175)).toBe(D.S);
    });

    it('should return S', () => {
      expect(mapDegToCardDir(175)).toBe(D.S);
    });

    it('should return SSW', () => {
      expect(mapDegToCardDir(200)).toBe(D.SSW);
    });

    it('should return SW', () => {
      expect(mapDegToCardDir(225)).toBe(D.SW);
    });

    it('should return WSW', () => {
      expect(mapDegToCardDir(250)).toBe(D.WSW);
    });

    it('should return W', () => {
      expect(mapDegToCardDir(275)).toBe(D.W);
    });

    it('should return WNW', () => {
      expect(mapDegToCardDir(300)).toBe(D.WNW);
    });

    it('should return NW', () => {
      expect(mapDegToCardDir(325)).toBe(D.NW);
    });

    it('should return NW', () => {
      expect(mapDegToCardDir(340)).toBe(D.NNW);
    });

    it('handle > 360. should return N', () => {
      expect(mapDegToCardDir(720)).toBe(D.N);
    });
  });

  describe('Invalid wind direction', () => {
    it('should throw', () => {
      expect(() => mapDegToCardDir(NaN)).toThrow();
      expect(() => mapDegToCardDir(-1)).toThrow();
      expect(() => mapDegToCardDir({} as number)).toThrow();
    });
  });
});
