/* eslint-disable import/named */
import {
  GeolocationState as State,
  GeolocationActions as Actions,
  GeolocationActionTypes as Types,
} from './types';

export const initialState: State = {
  data: null,
  loading: false,
  errorMessage: null,
};

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.GEOLOCATION_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case Types.GEOLOCATION_FETCH_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, ...action.payload.coords },
        loading: false,
        errorMessage: null,
      };
    }

    case Types.GEOLOCATION_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      };
    }

    default: {
      return state;
    }
  }
};
