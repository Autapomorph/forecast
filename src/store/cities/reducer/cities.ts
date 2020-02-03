import { State } from 'store/cities/types/cities';
import { Types, Actions } from 'store/cities/types';

export const initialState: State = {
  data: [],
  totalCount: 0,
  offset: 0,
  searchTerm: '',
  loading: false,
  errorMessage: null,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.CITIES_FETCH_REQUEST: {
      return {
        ...state,
        offset: action.payload.offset,
        searchTerm: action.payload.searchTerm,
        loading: true,
        errorMessage: null,
      };
    }

    case Types.CITIES_FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload.cities,
        totalCount: action.payload.totalCount,
        loading: false,
        errorMessage: null,
      };
    }

    case Types.CITIES_FETCH_FAILURE: {
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
