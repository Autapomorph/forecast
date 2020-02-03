import { Action } from 'redux';

import { City } from 'models';

export enum Types {
  CITIES_FETCH_REQUEST = '@cities/CITIES_FETCH_REQUEST',
  CITIES_FETCH_SUCCESS = '@cities/CITIES_FETCH_SUCCESS',
  CITIES_FETCH_FAILURE = '@cities/CITIES_FETCH_FAILURE',
}

export type State = {
  readonly data: City[];
  readonly totalCount: number;
  readonly offset: number;
  readonly searchTerm: string;
  readonly loading: boolean;
  readonly errorMessage: string | null;
};

interface FetchCitiesRequestAction extends Action {
  type: typeof Types.CITIES_FETCH_REQUEST;
  payload: {
    searchTerm: string;
    offset: number;
  };
}

interface FetchCitiesSuccessAction extends Action {
  type: typeof Types.CITIES_FETCH_SUCCESS;
  payload: {
    cities: City[];
    totalCount: number;
  };
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
