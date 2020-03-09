import formatWind from '../formatWind';

describe('Format wind', () => {
  it('should format wind', () => {
    expect(formatWind({ speed: 1, bearing: 1 })).toEqual({
      speed: 1,
      bearing: 1,
      cardDir: 'N',
      icon: 'from-1-deg',
    });
  });
});
