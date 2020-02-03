import { State } from 'store/cities/types/city';
import { Types, Actions } from 'store/cities/types';

export const initialState: State = {
  data: null,
  loading: false,
  errorMessage: null,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.WEATHER_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case Types.WEATHER_FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        errorMessage: null,
      };
    }

    case Types.WEATHER_FETCH_FAILURE: {
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

export default reducer;
