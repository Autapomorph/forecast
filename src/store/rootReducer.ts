import { combineReducers } from 'redux';
import citiesReducer from './cities/reducer';
import geolocationReducer from './geolocation/reducer';
import settingsReducer from './settings/reducer';
import { ApplicationState } from './types';

const rootReducer = combineReducers<ApplicationState>({
  cities: citiesReducer,
  geolocation: geolocationReducer,
  settings: settingsReducer,
});

export default rootReducer;
