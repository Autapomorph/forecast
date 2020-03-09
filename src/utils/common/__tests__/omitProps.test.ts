import omitProps from '../omitProps';

describe('omit props', () => {
  const sample = {
    a: 1,
    b: 2,
    c: 3,
  };

  it('should return new object', () => {
    const result = omitProps(sample, 'a');
    expect(result).not.toBe(sample);
  });

  it('should omit zero props', () => {
    const result = omitProps(sample, []);
    expect(result).toMatchObject(sample);
  });

  it('should omit single prop', () => {
    const result = omitProps(sample, 'a');
    expect(result).toMatchObject({ b: 2, c: 3 });
  });

  it('should omit several props', () => {
    const result = omitProps(sample, ['a', 'b']);
    expect(result).toMatchObject({ c: 3 });
  });
});
