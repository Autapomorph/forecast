/* eslint-disable import/named */
import i18n from '../../config/settings/i18n';
import { SettingsActions as Actions, SettingsActionTypes as Types } from './types';
import { ILocale, UnitFormat } from '../../models';

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
