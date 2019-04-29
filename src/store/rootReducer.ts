import { combineReducers } from 'redux';
import { RootState } from './types';
import cities from './cities/reducer';
import geolocation from './geolocation/reducer';
import settings from './settings/reducer';

const rootReducer = combineReducers<RootState>({
  cities,
  geolocation,
  settings,
});

export default rootReducer;
