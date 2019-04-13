import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { defaultLanguage } from '../../config/settings/i18n';
import { defaultUnitsFormat } from '../../config/settings/unitsFormats';
import {
  SettingsState as State,
  SettingsActions as Actions,
  SettingsActionTypes as Types,
} from './types';
import { ILocale, UnitFormat } from '../../models';

export const initialState: State = {
  language: defaultLanguage,
  unitsFormat: defaultUnitsFormat,
};

const persistConfig: PersistConfig = {
  version: 1,
  key: 'settings',
  storage,
  whitelist: ['unitsFormat'],
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload as ILocale,
      };
    }

    case Types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return {
        ...state,
        unitsFormat: action.payload as UnitFormat,
      };
    }

    default: {
      return state;
    }
  }
};

export default persistReducer(persistConfig, reducer);
