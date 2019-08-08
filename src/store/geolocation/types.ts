import { Action } from 'redux';

import { ICoords } from 'models';

/**
 * action types
 */
// eslint-disable-next-line import/prefer-default-export
export enum Types {
  GEOLOCATION_FETCH_REQUEST = '@geolocation/GEOLOCATION_FETCH_REQUEST',
  GEOLOCATION_FETCH_SUCCESS = '@geolocation/GEOLOCATION_FETCH_SUCCESS',
  GEOLOCATION_FETCH_FAILURE = '@geolocation/GEOLOCATION_FETCH_FAILURE',
}

/**
 * actions
 */
interface FetchRequestAction extends Action {
  type: typeof Types.GEOLOCATION_FETCH_REQUEST;
}

interface FetchSuccessAction extends Action {
  type: typeof Types.GEOLOCATION_FETCH_SUCCESS;
  payload: ICoords;
  error: false;
}

interface FetchFailureAction extends Action {
  type: typeof Types.GEOLOCATION_FETCH_FAILURE;
  payload: Error;
  error: true;
}

export type Actions = FetchRequestAction | FetchSuccessAction | FetchFailureAction;

/**
 * state
 */
export interface State {
  readonly data: ICoords | null;
  readonly loading: boolean;
  readonly errorMessage: string | null;
}

export type GeolocationState = State;
