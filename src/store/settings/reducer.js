import { combineReducers } from 'redux';

import languagesReducer from './reducers/language';
import unitsFormatsReducer from './reducers/unitsFormats';

const settingsReducer = combineReducers({
  languages: languagesReducer,
  unitsFormats: unitsFormatsReducer,
});

export default settingsReducer;
