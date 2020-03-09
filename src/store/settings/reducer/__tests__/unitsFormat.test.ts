import { UnitsFormat } from 'models';
import { Actions, Types } from 'store/settings/types';
import reducer, { initialState } from '../unitsFormat';

describe('Units Format reducer', () => {
  const data = {} as UnitsFormat;

  it('change units format', () => {
    const action: Actions = {
      type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
      payload: data,
    };

    expect(reducer(initialState, action)).toEqual(data);
  });
});
