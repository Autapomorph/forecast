import { Types, Actions } from 'store/cities/types';
import reducer, { initialState } from '../active';

describe('Active reducer', () => {
  it('should make active city', () => {
    const action: Actions = {
      type: Types.WEATHER_FETCH_REQUEST,
    };

    expect(reducer(initialState, action)).toEqual('city');
  });

  it('should make active cities', () => {
    const action: Actions = {
      type: Types.CITIES_FETCH_REQUEST,
      payload: {
        searchTerm: 'searchTerm',
        offset: 0,
      },
    };

    expect(reducer(initialState, action)).toEqual('cities');
  });
});
