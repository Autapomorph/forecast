import { Coords } from 'models';
import { State, Actions, Types } from 'store/geolocation/types';
import reducer, { initialState } from '../reducer';

describe('Geolocation reducer', () => {
  const data = {} as Coords;

  it('initial fetch request', () => {
    const action: Actions = {
      type: Types.GEOLOCATION_FETCH_REQUEST,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      errorMessage: null,
    });
  });

  it('fetch request with existing data and error', () => {
    const existingState: State = {
      ...initialState,
      data,
      loading: false,
      errorMessage: 'error',
    };

    const action: Actions = {
      type: Types.GEOLOCATION_FETCH_REQUEST,
    };

    expect(reducer(existingState, action)).toEqual({
      ...existingState,
      data: existingState.data,
      loading: true,
      errorMessage: null,
    });
  });

  it('fetch success', () => {
    const existingState: State = {
      ...initialState,
      data,
      loading: true,
      errorMessage: null,
    };

    const action: Actions = {
      type: Types.GEOLOCATION_FETCH_SUCCESS,
      payload: data,
      error: false,
    };

    expect(reducer(existingState, action)).toEqual({
      ...existingState,
      data: action.payload,
      loading: false,
      errorMessage: null,
    });
  });

  it('fetch failure', () => {
    const existingState: State = {
      ...initialState,
      data,
      loading: true,
      errorMessage: null,
    };

    const action: Actions = {
      type: Types.GEOLOCATION_FETCH_FAILURE,
      payload: new Error('error'),
      error: true,
    };

    expect(reducer(existingState, action)).toEqual({
      ...existingState,
      loading: false,
      errorMessage: action.payload.message,
    });
  });
});
