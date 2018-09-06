import { combineReducers } from 'redux';

import citiesReducer from './cities/reducer';
import geolocationReducer from './geolocation/reducer';
import settingsReducer from './settings/reducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  geolocation: geolocationReducer,
  settings: settingsReducer,
});

export default rootReducer;
