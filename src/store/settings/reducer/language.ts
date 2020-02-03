import { defaultLanguage } from 'config/settings/i18n';
import { State } from 'store/settings/types/language';
import { Actions, Types } from 'store/settings/types';

export const initialState: State = defaultLanguage;

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.SETTINGS_CHANGE_LANGUAGE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
