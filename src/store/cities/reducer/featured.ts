import { State } from 'store/cities/types/featured';
import { Types, Actions } from 'store/cities/types';

export const initialState: State = [];

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.FEATURED_ADD: {
      return [...state, action.payload];
    }

    case Types.FEATURED_REMOVE: {
      return state.filter(city => city.id !== action.payload);
    }

    case Types.FEATURED_CLEAR: {
      return [];
    }

    case Types.FEATURED_REORDER: {
      const { prevIndex, nextIndex } = action.payload;

      const featured = state.slice();
      const [removed] = featured.splice(prevIndex, 1);
      featured.splice(nextIndex, 0, removed);

      return featured;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
