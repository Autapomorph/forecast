import * as types from './actionTypes';

export const changeLanguage = language => ({
  type: types.SETTINGS_CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

export const changeUnitsFormat = unitsFormat => ({
  type: types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: {
    unitsFormat,
  },
});
