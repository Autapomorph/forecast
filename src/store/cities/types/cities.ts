import { Action } from 'redux';

import { ICity } from 'models';

// eslint-disable-next-line import/prefer-default-export
export enum Types {
  CITIES_FETCH_REQUEST = '@cities/CITIES_FETCH_REQUEST',
  CITIES_FETCH_SUCCESS = '@cities/CITIES_FETCH_SUCCESS',
  CITIES_FETCH_FAILURE = '@cities/CITIES_FETCH_FAILURE',
}

interface FetchCitiesRequestAction extends Action {
  type: typeof Types.CITIES_FETCH_REQUEST;
  payload: string;
}

interface FetchCitiesSuccessAction extends Action {
  type: typeof Types.CITIES_FETCH_SUCCESS;
  payload: ICity[];
  error: false;
}

interface FetchCitiesFailureAction extends Action {
  type: typeof Types.CITIES_FETCH_FAILURE;
  payload: Error;
  error: true;
}

export type Actions =
  | FetchCitiesRequestAction
  | FetchCitiesSuccessAction
  | FetchCitiesFailureAction;
