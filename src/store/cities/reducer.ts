import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  CitiesState as State,
  CitiesActions as Actions,
  CitiesActionTypes as Types,
} from './types';

export const initialState: State = {
  selectedCity: {
    data: null,
    active: false,
    loading: false,
    errorMessage: null,
  },
  cities: {
    data: [],
    searchTerm: '',
    active: false,
    loading: false,
    errorMessage: null,
  },
  featuredCities: {
    data: [],
  },
};

const persistConfig: PersistConfig = {
  version: 1,
  key: 'featuredCities',
  storage,
  whitelist: ['featuredCities'],
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.CITY_WEATHER_FETCH_REQUEST: {
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

    case Types.CITIES_FETCH_REQUEST: {
      return {
        ...state,
        cities: {
          ...state.cities,
          searchTerm: action.payload,
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

    case Types.CITY_WEATHER_FETCH_SUCCESS: {
      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          data: action.payload,
          loading: false,
          errorMessage: null,
        },
      };
    }

    case Types.CITIES_FETCH_SUCCESS: {
      return {
        ...state,
        cities: {
          ...state.cities,
          data: action.payload,
          loading: false,
          errorMessage: null,
        },
      };
    }

    case Types.CITY_WEATHER_FETCH_FAILURE: {
      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          loading: false,
          errorMessage: action.payload.message,
        },
      };
    }

    case Types.CITIES_FETCH_FAILURE: {
      return {
        ...state,
        cities: {
          ...state.cities,
          loading: false,
          errorMessage: action.payload.message,
        },
      };
    }

    case Types.FEATURED_CITY_ADD: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: [...state.featuredCities.data, action.payload],
        },
      };
    }

    case Types.FEATURED_CITY_REMOVE: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: state.featuredCities.data.filter(city => city.id !== action.payload),
        },
      };
    }

    case Types.FEATURED_CITIES_CLEAR: {
      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: [],
        },
      };
    }

    case Types.FEATURED_CITIES_REORDER: {
      const { prevIndex, nextIndex } = action.payload;

      const featuredCities = state.featuredCities.data.slice();
      const [removed] = featuredCities.splice(prevIndex, 1);
      featuredCities.splice(nextIndex, 0, removed);

      return {
        ...state,
        featuredCities: {
          ...state.featuredCities,
          data: featuredCities,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
