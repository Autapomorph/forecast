import removeLastPeriod from '../removeLastPeriod';

describe('remove last period', () => {
  it('should remove last character', () => {
    const sample = 'test string.';
    const result = removeLastPeriod(sample);
    expect(result).toBe('test string');
  });

  it('should return given string', () => {
    const sample = 'test string:';
    const result = removeLastPeriod(sample);
    expect(result).toBe(sample);
  });

  it('should handle empty string', () => {
    const sample = '';
    const result = removeLastPeriod(sample);
    expect(result).toBe(sample);
  });
});
