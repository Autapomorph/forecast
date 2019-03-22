import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from './actionTypes';
import { defaultLanguage } from '../../config/settings/i18n';
import { defaultUnitsFormat } from '../../config/settings/unitsFormats';
import { SettingsState as State } from './types';

export const initialState: State = {
  language: defaultLanguage,
  unitsFormat: defaultUnitsFormat,
};

const persistConfig = {
  version: 1,
  key: 'settings',
  storage,
  whitelist: ['unitsFormat'],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: any): State => {
  const { type, payload } = action;

  switch (type) {
    case types.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        language: payload.language,
      };
    }

    case types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return {
        ...state,
        unitsFormat: payload.unitsFormat,
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
