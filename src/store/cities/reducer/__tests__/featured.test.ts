import { City } from 'models';
import { State, Actions, Types } from 'store/cities/types/featured';
import reducer, { initialState } from '../featured';

describe('Featured reducer', () => {
  const data = {} as City;

  it('add featured', () => {
    const action: Actions = {
      type: Types.FEATURED_ADD,
      payload: data,
    };

    expect(reducer(initialState, action)).toEqual([...initialState, action.payload]);
  });

  it('remove featured', () => {
    const existingState: State = [{ id: 1 } as City, { id: 2 } as City];

    const action: Actions = {
      type: Types.FEATURED_REMOVE,
      payload: 1,
    };

    expect(reducer(existingState, action)).toEqual([{ id: 2 } as City]);
  });

  it('remove nonexistent featured', () => {
    const existingState: State = [{ id: 1 } as City, { id: 2 } as City];

    const action: Actions = {
      type: Types.FEATURED_REMOVE,
      payload: 3,
    };

    expect(reducer(existingState, action)).toEqual(existingState);
  });

  it('clear featured', () => {
    const existingState: State = [{ id: 1 } as City, { id: 2 } as City];

    const action: Actions = {
      type: Types.FEATURED_CLEAR,
    };

    expect(reducer(existingState, action)).toEqual([]);
  });

  it('reorder featured', () => {
    const existingState: State = [{ id: 1 } as City, { id: 2 } as City];

    const action: Actions = {
      type: Types.FEATURED_REORDER,
      payload: {
        prevIndex: 0,
        nextIndex: 1,
      },
    };

    expect(reducer(existingState, action)).toEqual([{ id: 2 } as City, { id: 1 } as City]);
  });

  it('reorder nonexistent indices featured', () => {
    const existingState: State = [{ id: 1 } as City, { id: 2 } as City];

    const action: Actions = {
      type: Types.FEATURED_REORDER,
      payload: {
        prevIndex: 50,
        nextIndex: 51,
      },
    };

    expect(reducer(existingState, action)).toEqual(existingState);
  });
});
