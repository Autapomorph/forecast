import * as types from './actionTypes';

export const initialState = {
  data: null,
  loading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
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
