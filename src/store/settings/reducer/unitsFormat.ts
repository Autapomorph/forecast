import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { State } from 'store/settings/types/unitsFormat';
import { Actions, Types } from 'store/settings/types';

export const initialState: State = defaultUnitsFormat;

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
