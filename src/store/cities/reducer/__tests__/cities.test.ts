import { City } from 'models';
import { State, Actions, Types } from 'store/cities/types/cities';
import reducer, { initialState } from '../cities';

describe('Cities reducer', () => {
  const data = [] as City[];

  it('initial fetch request', () => {
    const action: Actions = {
      type: Types.CITIES_FETCH_REQUEST,
      payload: {
        searchTerm: 'searchTerm',
        offset: 0,
      },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      searchTerm: 'searchTerm',
      offset: 0,
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
      type: Types.CITIES_FETCH_REQUEST,
      payload: {
        searchTerm: 'searchTerm',
        offset: 2,
      },
    };

    expect(reducer(existingState, action)).toEqual({
      ...existingState,
      data: existingState.data,
      searchTerm: 'searchTerm',
      offset: 2,
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
      type: Types.CITIES_FETCH_SUCCESS,
      payload: {
        cities: data,
        totalCount: 1,
      },
      error: false,
    };

    expect(reducer(existingState, action)).toEqual({
      ...existingState,
      data: action.payload.cities,
      totalCount: action.payload.totalCount,
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
      type: Types.CITIES_FETCH_FAILURE,
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
