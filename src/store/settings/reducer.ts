import { persistReducer, PersistConfig } from 'redux-persist';
import localForage from 'localforage';

import { defaultLanguage } from 'config/settings/i18n';
import { defaultUnitsFormat } from 'config/settings/unitsFormats';
import { State, Actions, Types } from './types';

export const initialState: State = {
  language: defaultLanguage,
  unitsFormat: defaultUnitsFormat,
};

const persistConfig: PersistConfig<State> = {
  version: 1,
  key: 'settings',
  storage: localForage,
  whitelist: ['unitsFormat'],
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }

    case Types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return {
        ...state,
        unitsFormat: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
