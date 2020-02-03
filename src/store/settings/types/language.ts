import { Action } from 'redux';

import { Locale } from 'models';

/**
 * action types
 */
export enum Types {
  SETTINGS_CHANGE_LANGUAGE = '@settings/SETTINGS_CHANGE_LANGUAGE',
}

/**
 * actions
 */
interface ChangeLanguageAction extends Action {
  type: typeof Types.SETTINGS_CHANGE_LANGUAGE;
  payload: Locale;
}

export type Actions = ChangeLanguageAction;

/**
 * state
 */
export type State = Locale;
