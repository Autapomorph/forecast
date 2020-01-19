import { ThunkAction } from 'redux-thunk';

import { Locale, UnitFormat } from 'models';
import { RootState } from 'store/types';
import {
  getIsCitiesActive,
  getIsSelectedCityActive,
  getSelectedCity,
  getSearchTerm,
} from 'store/rootSelectors';
import { fetchCititesByName, fetchCityWeatherByPosition } from 'store/cities/actions';
import i18n from 'config/settings/i18n';
import { Actions, Types } from './types';

export const changeLanguage = (language: Locale): ThunkAction<void, RootState, null, Actions> => (
  dispatch,
  getState,
) => {
  const state = getState();
  const isCitiesActive = getIsCitiesActive(state);
  const isCityActive = getIsSelectedCityActive(state);
  const city = getSelectedCity(state);
  const searchTerm = getSearchTerm(state);

  i18n.changeLanguage(language.code);

  dispatch({
    type: Types.SETTINGS_CHANGE_LANGUAGE,
    payload: language,
  });

  if (isCityActive && city?.coords) {
    dispatch(fetchCityWeatherByPosition(city?.coords));
  }

  if (isCitiesActive && searchTerm) {
    dispatch(fetchCititesByName(searchTerm));
  }
};

export const changeUnitsFormat = (unitsFormat: UnitFormat): Actions => ({
  type: Types.SETTINGS_CHANGE_UNITS_FORMAT,
  payload: unitsFormat,
});
