import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';

import language from './language';
import unitsFormat from './unitsFormat';

const persistConfig = {
  version: 1,
  key: 'settings',
  storage: localForage,
  whitelist: ['unitsFormat'],
};

const reducer = combineReducers({
  language,
  unitsFormat,
});

export default persistReducer(persistConfig, reducer);
