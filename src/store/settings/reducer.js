import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from './actionTypes';
import i18n from '../../config/settings/i18n';
import { defaultUnitsFormat } from '../../config/settings/unitsFormats';

export const initialState = {
  language: i18n.language,
  unitsFormat: defaultUnitsFormat,
};

const persistConfig = {
  key: 'settings',
  storage,
};

const reducer = (state = initialState, action) => {
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
