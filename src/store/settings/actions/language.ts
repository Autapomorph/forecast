import { ThunkAction } from 'redux-thunk';

import { Locale } from 'models';
import { RootState } from 'store/types';
import {
  getIsCitiesActive,
  getIsCityActive,
  getCity,
  getOffset,
  getSearchTerm,
} from 'store/rootSelectors';
import { fetchCititesByName, fetchWeatherByPosition } from 'store/cities/actions';
import i18n from 'config/i18n';
import { Actions, Types } from '../types';

export const changeLanguage = (language: Locale): ThunkAction<void, RootState, null, Actions> => (
  dispatch,
  getState,
) => {
  const state = getState();
  const isCitiesActive = getIsCitiesActive(state);
  const isCityActive = getIsCityActive(state);
  const city = getCity(state);
  const offset = getOffset(state);
  const searchTerm = getSearchTerm(state);

  i18n.changeLanguage(language.code);

  dispatch({
    type: Types.SETTINGS_CHANGE_LANGUAGE,
    payload: language,
  });

  if (isCityActive && city?.coords) {
    dispatch(fetchWeatherByPosition(city.coords));
  } else if (isCitiesActive && searchTerm) {
    dispatch(fetchCititesByName(searchTerm, offset));
  }
};
