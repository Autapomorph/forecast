import { State } from 'store/cities/types/active';
import { Types, Actions } from 'store/cities/types';

export const initialState: State = 'city';

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.WEATHER_FETCH_REQUEST: {
      return 'city';
    }

    case Types.CITIES_FETCH_REQUEST: {
      return 'cities';
    }

    default: {
      return state;
    }
  }
};

export default reducer;
