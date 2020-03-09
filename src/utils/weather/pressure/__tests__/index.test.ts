import { unitsFormats } from 'config/unitsFormats';
import convertPressure from '..';
import { pascalToMmHg, pascalToInHg } from '../converters';

jest.mock('../converters');

describe('Convert pressure', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should convert to mmHg', () => {
    convertPressure(1000, unitsFormats.METRIC);

    expect(pascalToMmHg).toBeCalled();
    expect(pascalToMmHg).toBeCalledWith(1000);
  });

  it('should convert to inHg', () => {
    convertPressure(1000, unitsFormats.IMPERIAL);

    expect(pascalToInHg).toBeCalled();
    expect(pascalToInHg).toBeCalledWith(1000);
  });

  it('should return passed value', () => {
    expect(convertPressure(1000, 'nonexistent units format')).toBe(1000);
    expect(pascalToMmHg).not.toBeCalled();
    expect(pascalToInHg).not.toBeCalled();
  });
});
