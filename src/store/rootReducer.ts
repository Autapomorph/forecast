import { combineReducers } from 'redux';
import citiesReducer from './cities/reducer';
import geolocationReducer from './geolocation/reducer';
import settingsReducer from './settings/reducer';
import { RootState } from './types';

const rootReducer = combineReducers<RootState>({
  cities: citiesReducer,
  geolocation: geolocationReducer,
  settings: settingsReducer,
});

export default rootReducer;
