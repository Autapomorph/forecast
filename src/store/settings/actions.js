import * as types from './actionTypes';
import i18n from '@/config/settings/i18n';

export const changeLanguage = language => {
  i18n.changeLanguage(language.code);

  return {
    type: types.SETTINGS_CHANGE_LANGUAGE,
    payload: {
      language,
    },
  };
};

export const changeUnitsFormat = unitsFormat => ({
  type: types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: {
    unitsFormat,
  },
});
