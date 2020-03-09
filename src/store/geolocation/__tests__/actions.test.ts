import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { RootState } from 'store/types';
import { Actions, Types } from 'store/geolocation/types';
import geolocationService from 'services/geolocation';
import { API_GEOIP } from 'config/geolocation';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore<Partial<RootState>, ThunkDispatch<RootState, null, Actions>>(
  middlewares,
);

describe('Geolocation actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('Geolocation using navigator', () => {
    it('fetch success', async () => {
      jest.spyOn(geolocationService, 'fetchGeolocation').mockResolvedValue({
        latitude: 0,
        longitude: 0,
      });

      const store = mockStore({});
      const expectedActions: Actions[] = [
        {
          type: Types.GEOLOCATION_FETCH_REQUEST,
        },
        {
          type: Types.GEOLOCATION_FETCH_SUCCESS,
          payload: { latitude: 0, longitude: 0 },
          error: false,
        },
      ];

      await store.dispatch(actions.fetchGeolocation());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('fetch failure', async () => {
      jest
        .spyOn(geolocationService, 'fetchGeolocation')
        .mockRejectedValue(new Error('some error code'));

      const store = mockStore({});
      const expectedActions: Actions[] = [
        {
          type: Types.GEOLOCATION_FETCH_REQUEST,
        },
        {
          type: Types.GEOLOCATION_FETCH_FAILURE,
          payload: new Error('some error code'),
          error: true,
        },
      ];

      await store.dispatch(actions.fetchGeolocation());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Geolocation by IP', () => {
    it('fetch success', async () => {
      fetchMock.getOnce(`begin:${API_GEOIP}`, {
        body: { latitude: 0, longitude: 0 },
      });

      const store = mockStore({});
      const expectedActions: Actions[] = [
        {
          type: Types.GEOLOCATION_FETCH_REQUEST,
        },
        {
          type: Types.GEOLOCATION_FETCH_SUCCESS,
          payload: { latitude: 0, longitude: 0 },
          error: false,
        },
      ];

      await store.dispatch(actions.fetchGeolocationByIP());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('fetch failure', async () => {
      fetchMock.getOnce(`begin:${API_GEOIP}`, {
        throws: new Error(),
      });

      const store = mockStore({});
      const expectedActions: Actions[] = [
        {
          type: Types.GEOLOCATION_FETCH_REQUEST,
        },
        {
          type: Types.GEOLOCATION_FETCH_FAILURE,
          payload: new Error('messages.errors.geolocation.geoIPFetchFailed'),
          error: true,
        },
      ];

      await store.dispatch(actions.fetchGeolocationByIP());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
