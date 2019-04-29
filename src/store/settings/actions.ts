import { ILocale, UnitFormat } from 'models';
import i18n from 'config/settings/i18n';
import { Actions, Types } from './types';

export const changeLanguage = (language: ILocale): Actions => {
  i18n.changeLanguage(language.code);

  return {
    type: Types.SETTINGS_CHANGE_LANGUAGE,
    payload: language,
  };
};

export const changeUnitsFormat = (unitsFormat: UnitFormat): Actions => ({
  type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: unitsFormat,
});
