import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';

import active from './active';
import city from './city';
import cities from './cities';
import featured from './featured';

const persistConfig = {
  version: 1,
  key: 'featured',
  storage: localForage,
  whitelist: ['featured'],
};

const reducer = combineReducers({
  active,
  city,
  cities,
  featured,
});

export default persistReducer(persistConfig, reducer);
