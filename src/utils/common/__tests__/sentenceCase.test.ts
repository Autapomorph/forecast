import sentenceCase from '../sentenceCase';

describe('sentence case', () => {
  it('should remove last character', () => {
    const sample = 'Test stRing. sOme sentEncEs here. To Test TheM.';
    const result = sentenceCase(sample);
    expect(result).toBe('Test string. Some sentences here. To test them.');
  });

  it('should handle empty string', () => {
    const sample = '';
    const result = sentenceCase(sample);
    expect(result).toBe(sample);
  });
});
