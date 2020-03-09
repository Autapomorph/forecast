import { City, Weather } from 'models';
import { Actions, Types } from 'store/cities/types/featured';
import * as actions from '../featured';

describe('Featured actions', () => {
  const data = {} as City & Weather;

  it('should create an action to add to featured list', () => {
    const expectedAction: Actions = {
      type: Types.FEATURED_ADD,
      payload: data,
    };

    expect(actions.addToFeatured(data)).toEqual(expectedAction);
  });

  it('should create an action to remove from featured list', () => {
    const expectedAction: Actions = {
      type: Types.FEATURED_REMOVE,
      payload: 1,
    };

    expect(actions.removeFromFeatured(1)).toEqual(expectedAction);
  });

  it('should create an action to reorder featured list', () => {
    const expectedAction: Actions = {
      type: Types.FEATURED_CLEAR,
    };

    expect(actions.clearFeatured()).toEqual(expectedAction);
  });

  it('should create an action to clear featured list', () => {
    const expectedAction: Actions = {
      type: Types.FEATURED_REORDER,
      payload: {
        prevIndex: 1,
        nextIndex: 2,
      },
    };

    expect(actions.reorderFeatured(1, 2)).toEqual(expectedAction);
  });
});
