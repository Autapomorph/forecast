import * as types from './actionTypes';
import { GeolocationState as State } from './types';

export const initialState: State = {
  data: null,
  loading: false,
  errorMessage: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any): State => {
  const { type, payload } = action;

  switch (type) {
    case types.GEOLOCATION_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case types.GEOLOCATION_FETCH_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, ...payload },
        loading: false,
        errorMessage: null,
      };
    }

    case types.GEOLOCATION_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: payload.errorMessage,
      };
    }

    default: {
      return state;
    }
  }
};
