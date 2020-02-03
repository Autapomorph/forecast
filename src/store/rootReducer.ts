import { combineReducers } from 'redux';

import cities from './cities/reducer';
import geolocation from './geolocation/reducer';
import settings from './settings/reducer';

const rootReducer = combineReducers({
  cities,
  geolocation,
  settings,
});

export default rootReducer;
