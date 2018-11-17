import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from './actionTypes';
import { defaultUnitsFormat } from '../../config/settings/unitsFormats';

export const initialState = {
  unitsFormat: defaultUnitsFormat,
};

const persistConfig = {
  key: 'settings',
  storage,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
