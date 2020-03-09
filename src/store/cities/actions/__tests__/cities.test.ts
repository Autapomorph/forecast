import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { City, Weather } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import { Actions, Types } from 'store/cities/types/cities';
import { API_SEARCH } from 'config/cities';
import * as actions from '../cities';

const middlewares = [thunk];
const mockStore = configureMockStore<Partial<RootState>, ThunkDispatch<RootState, null, Actions>>(
  middlewares,
);

jest.mock('utils/city/format', () => () => [{}]);
jest.mock('store/rootSelectors', () => ({
  ...jest.requireActual('store/rootSelectors'),
  getIsAnythingLoading: jest.fn(),
}));

describe('Cities actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('fetch cities success', async () => {
    fetchMock.getOnce(`begin:${API_SEARCH}`, {
      body: { geonames: [{}], totalResultsCount: 1 },
    });
    (getIsAnythingLoading as jest.Mock).mockReturnValue(false);

    const store = mockStore({});
    const expectedActions: Actions[] = [
      {
        type: Types.CITIES_FETCH_REQUEST,
        payload: { searchTerm: 'searchTerm', offset: 0 },
      },
      {
        type: Types.CITIES_FETCH_SUCCESS,
        payload: {
          totalCount: 1,
          cities: [{} as City & Weather],
        },
        error: false,
      },
    ];

    await store.dispatch(actions.fetchCititesByName('searchTerm', 0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fetch cities failure', async () => {
    fetchMock.getOnce(`begin:${API_SEARCH}`, {
      throws: new Error(),
    });
    (getIsAnythingLoading as jest.Mock).mockReturnValue(false);

    const store = mockStore({});
    const expectedActions: Actions[] = [
      {
        type: Types.CITIES_FETCH_REQUEST,
        payload: { searchTerm: 'searchTerm', offset: 0 },
      },
      {
        type: Types.CITIES_FETCH_FAILURE,
        payload: new Error('messages.errors.cities.search.fetchFailed'),
        error: true,
      },
    ];

    await store.dispatch(actions.fetchCititesByName('searchTerm', 0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should do nothing in case of loading anything', async () => {
    (getIsAnythingLoading as jest.Mock).mockReturnValue(true);
    const store = mockStore({});

    await store.dispatch(actions.fetchCititesByName('searchTerm', 0));
    expect(store.getActions()).toEqual([]);
  });
});
