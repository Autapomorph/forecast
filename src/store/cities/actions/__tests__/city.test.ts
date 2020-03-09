import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { City, Weather } from 'models';
import { RootState } from 'store/types';
import { getIsAnythingLoading } from 'store/rootSelectors';
import { Actions, Types } from 'store/cities/types/city';
import { API_FIND_NEARBY } from 'config/cities';
import { API_WEATHER_BASE } from 'config/weather';
import * as actions from '../city';

const middlewares = [thunk];
const mockStore = configureMockStore<Partial<RootState>, ThunkDispatch<RootState, null, Actions>>(
  middlewares,
);

jest.mock('utils/city/format', () => () => [{}]);
jest.mock('utils/weather/format', () => () => ({}));
jest.mock('store/rootSelectors', () => ({
  ...jest.requireActual('store/rootSelectors'),
  getIsAnythingLoading: jest.fn(),
}));

describe('City actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('fetch city & weather success', async () => {
    fetchMock.getOnce(`begin:${API_FIND_NEARBY}`, {
      body: {},
    });
    fetchMock.getOnce(`begin:${API_WEATHER_BASE}`, {
      body: {},
    });
    (getIsAnythingLoading as jest.Mock).mockReturnValue(false);

    const store = mockStore({});
    const expectedActions: Actions[] = [
      {
        type: Types.WEATHER_FETCH_REQUEST,
      },
      {
        type: Types.WEATHER_FETCH_SUCCESS,
        payload: {} as City & Weather,
        error: false,
      },
    ];

    await store.dispatch(actions.fetchWeatherByPosition({ latitude: 0, longitude: 0 }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fetch city & weather failure', async () => {
    fetchMock.getOnce(`begin:${API_FIND_NEARBY}`, {
      throws: new Error(),
    });
    fetchMock.getOnce(`begin:${API_WEATHER_BASE}`, {
      throws: new Error(),
    });
    (getIsAnythingLoading as jest.Mock).mockReturnValue(false);

    const store = mockStore({});
    const expectedActions: Actions[] = [
      {
        type: Types.WEATHER_FETCH_REQUEST,
      },
      {
        type: Types.WEATHER_FETCH_FAILURE,
        payload: new Error('messages.errors.weather.fetchFailed'),
        error: true,
      },
    ];

    await store.dispatch(actions.fetchWeatherByPosition({ latitude: 0, longitude: 0 }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should do nothing in case of loading anything', async () => {
    (getIsAnythingLoading as jest.Mock).mockReturnValue(true);
    const store = mockStore({});

    await store.dispatch(actions.fetchWeatherByPosition({ latitude: 0, longitude: 0 }));
    expect(store.getActions()).toEqual([]);
  });
});
