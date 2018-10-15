import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from './actionTypes';
import removePropByKey from '../../utils/common/removePropByKey';

export const initialState = {
  selectedCity: {
    data: null,
    active: false,
    loading: false,
    errorMessage: null,
  },
  cities: {
    data: null,
    searchTerm: '',
    active: false,
    loading: false,
    errorMessage: null,
  },
  featuredCities: {
    data: {},
  },
};

const persistConfig = {
  key: 'featuredCities',
  storage,
  whitelist: ['featuredCities'],
};

export const citiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CITY_WEATHER_FETCH_REQUEST: {
      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          active: true,
          loading: true,
          errorMessage: null,
        },
        cities: {
          ...state.cities,
          active: false,
        },
      };
    }

    case types.CITIES_FETCH_REQUEST: {
      return {
        ...state,
        cities: {
          ...state.cities,
          searchTerm: payload.searchTerm,
          active: true,
          loading: true,
          errorMessage: null,
        },
        selectedCity: {
          ...state.selectedCity,
          active: false,
        },
      };
    }

    case types.CITY_WEATHER_FETCH_SUCCESS: {
      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          data: payload.cityData,
          loading: false,
          errorMessage: null,
        },
      };
    }

    case types.CITIES_FETCH_SUCCESS: {
      return {
        ...state,
        cities: {
          ...state.cities,
          data: payload.cities,
          loading: false,
          errorMessage: null,
        },
      };
    }

    case types.CITY_WEATHER_FETCH_FAILURE: {
      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          loading: false,
          errorMessage: payload.errorMessage,
        },
      };
    }

    case types.CITIES_FETCH_FAILURE: {
      return {
        ...state,
        cities: {
          ...state.cities,
          loading: false,
          errorMessage: payload.errorMessage,
        },
      };
    }

    case types.FEATURED_CITY_ADD: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: {
            ...state.featuredCities.data,
            [payload.city.id]: payload.city,
          },
        },
      };
    }

    case types.FEATURED_CITY_REMOVE: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: removePropByKey(state.featuredCities.data, String(payload.cityId)),
        },
      };
    }

    case types.FEATURED_CITIES_CLEAR: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: {},
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, citiesReducer);
