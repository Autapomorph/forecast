import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as types from '../actionTypes';
import { unitsFormats, defaultUnitsFormat } from '../../../config/settings';

export const initialState = {
  data: unitsFormats,
  currentUnitsFormat: defaultUnitsFormat,
};

const persistConfig = {
  key: 'unitsFormats',
  storage,
  whitelist: ['currentUnitsFormat'],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return {
        ...state,
        currentUnitsFormat: payload.unitsFormat,
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
