import { UnitsFormat } from 'models';
import { Actions, Types } from 'store/settings/types';
import * as actions from '../unitsFormat';

describe('Language actions', () => {
  const data = {} as UnitsFormat;

  it('should create an action to change language', () => {
    const expectedAction: Actions = {
      type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
      payload: data,
    };

    expect(actions.changeUnitsFormat(data)).toEqual(expectedAction);
  });
});
