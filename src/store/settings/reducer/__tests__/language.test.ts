import { Locale } from 'models';
import { Actions, Types } from 'store/settings/types';
import reducer, { initialState } from '../language';

describe('Language reducer', () => {
  const data = {} as Locale;

  it('change language', () => {
    const action: Actions = {
      type: Types.SETTINGS_CHANGE_LANGUAGE,
      payload: data,
    };

    expect(reducer(initialState, action)).toEqual(data);
  });
});
