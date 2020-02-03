import { State as LangState, Actions as LangActions, Types as LangTypes } from './language';
import { State as UnitsState, Actions as UnitsActions, Types as UnitsTypes } from './unitsFormat';

/**
 * action types
 */
export const Types = {
  ...LangTypes,
  ...UnitsTypes,
};

/**
 * actions
 */
export type Actions = LangActions | UnitsActions;

/**
 * state
 */
export type State = {
  readonly language: LangState;
  readonly unitsFormat: UnitsState;
};
