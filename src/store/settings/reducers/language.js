import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from '../actionTypes';
import { languages, defaultLanguage } from '../../../config/settings';

export const initialState = {
  data: languages,
  currentLanguage: defaultLanguage,
};

const persistConfig = {
  key: 'languages',
  storage,
  whitelist: ['currentLanguage'],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        currentLanguage: payload.language,
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
