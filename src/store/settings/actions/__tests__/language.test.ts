import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { Locale, City, Weather, Coords } from 'models';
import { RootState } from 'store/types';
import { Actions, Types } from 'store/settings/types/language';
import { State as RootCitiesState } from 'store/cities/types';
import { State as CitiesState } from 'store/cities/types/cities';
import { State as CityState } from 'store/cities/types/city';
import * as citiesActions from 'store/cities/actions';
import * as actions from '../language';

const middlewares = [thunk];
const mockStore = configureMockStore<Partial<RootState>, ThunkDispatch<RootState, null, Actions>>(
  middlewares,
);

jest.mock('store/cities/actions', () => ({
  ...jest.requireActual('store/cities/actions'),
  fetchCititesByName: jest.fn(() => ({ type: 'fetchCititesByName' })),
  fetchWeatherByPosition: jest.fn(() => ({ type: 'fetchWeatherByPosition' })),
}));

describe('Language actions', () => {
  const exisingStore: Partial<RootState> = {
    cities: {
      active: 'cities',
      cities: {
        searchTerm: 'searchTerm',
        offset: 0,
      } as CitiesState,
      city: {
        data: { coords: {} as Coords } as City & Weather,
      } as CityState,
    } as RootCitiesState,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create an action to change language', async () => {
    const store = mockStore({
      ...exisingStore,
      cities: {
        ...exisingStore.cities,
        active: 'nonexistent' as 'city',
      },
    } as Partial<RootState>);

    const expectedActions = [
      {
        type: Types.SETTINGS_CHANGE_LANGUAGE,
        payload: {} as Locale,
      },
    ];

    await store.dispatch(actions.changeLanguage({} as Locale));
    expect(store.getActions()).toEqual(expectedActions);
    expect(citiesActions.fetchWeatherByPosition).toHaveBeenCalledTimes(0);
    expect(citiesActions.fetchCititesByName).toHaveBeenCalledTimes(0);
  });

  it('should create an action to change language with weather fetch request', async () => {
    const store = mockStore({
      ...exisingStore,
      cities: {
        ...exisingStore.cities,
        active: 'city',
      },
    } as Partial<RootState>);

    const expectedActions = [
      {
        type: Types.SETTINGS_CHANGE_LANGUAGE,
        payload: {} as Locale,
      },
      {
        type: 'fetchWeatherByPosition',
      },
    ];

    await store.dispatch(actions.changeLanguage({} as Locale));
    expect(store.getActions()).toEqual(expectedActions);
    expect(citiesActions.fetchWeatherByPosition).toHaveBeenCalledTimes(1);
    expect(citiesActions.fetchCititesByName).toHaveBeenCalledTimes(0);
  });

  it('should create an action to change language with cities fetch request', async () => {
    const store = mockStore({
      ...exisingStore,
      cities: {
        ...exisingStore.cities,
        active: 'cities',
      },
    } as Partial<RootState>);

    const expectedActions = [
      {
        type: Types.SETTINGS_CHANGE_LANGUAGE,
        payload: {} as Locale,
      },
      {
        type: 'fetchCititesByName',
      },
    ];

    await store.dispatch(actions.changeLanguage({} as Locale));
    expect(store.getActions()).toEqual(expectedActions);
    expect(citiesActions.fetchCititesByName).toHaveBeenCalledTimes(1);
    expect(citiesActions.fetchWeatherByPosition).toHaveBeenCalledTimes(0);
  });
});
