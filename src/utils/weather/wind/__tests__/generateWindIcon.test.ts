import generateWindIcon from '../generateWindIcon';

describe('Generate wind icon', () => {
  it('should return from-1-deg', () => {
    expect(generateWindIcon(1)).toBe('from-1-deg');
  });

  it('should return towards-1-deg', () => {
    expect(generateWindIcon(1, true)).toBe('towards-1-deg');
  });

  it('should throw', () => {
    expect(() => generateWindIcon(NaN)).toThrow();
    expect(() => generateWindIcon(-1)).toThrow();
  });
});
