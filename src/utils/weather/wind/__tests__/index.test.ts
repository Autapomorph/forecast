import { unitsFormats } from 'config/unitsFormats';
import convertSpeed from '..';
import { mpsToKnots } from '../converters';

jest.mock('../converters');

describe('Convert speed', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should convert mps to knots', () => {
    convertSpeed(10, unitsFormats.IMPERIAL);

    expect(mpsToKnots).toBeCalled();
    expect(mpsToKnots).toBeCalledWith(10);
  });

  it('should return passed value', () => {
    expect(convertSpeed(10, unitsFormats.METRIC)).toBe(10);
    expect(convertSpeed(10, 'nonexistent units format')).toBe(10);
    expect(mpsToKnots).not.toBeCalled();
  });
});
