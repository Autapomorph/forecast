import * as types from './actionTypes';
import {
  languages,
  defaultLanguage,
  unitsFormats,
  defaultUnitsFormat,
} from '../../config/settings';

export const initialState = {
  languages: {
    data: languages,
    currentLanguage: defaultLanguage,
  },
  unitsFormats: {
    data: unitsFormats,
    currentUnitsFormat: defaultUnitsFormat,
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        languages: {
          ...state.languages,
          currentLanguage: payload.language,
        },
      };
    }

    case types.SETTINGS_CHANGE_UNITS_FORMAT: {
      return {
        ...state,
        unitsFormats: {
          ...state.unitsFormats,
          currentUnitsFormat: payload.unitsFormat,
        },
      };
    }

    default: {
      return state;
    }
  }
};
