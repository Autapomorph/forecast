import normalize from '..';

describe('Normalize string', () => {
  it('should return normalized string', () => {
    expect(normalize('  some. Text tO nORmalize  .   ')).toBe('Some. Text to normalize');
  });
});
