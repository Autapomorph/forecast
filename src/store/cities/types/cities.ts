import { Action } from 'redux';

import { ICity } from 'models';
import { CitiesActionTypes as Types } from './actionTypes';

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

// eslint-disable-next-line import/prefer-default-export
export type CitiesActions =
  | FetchCitiesRequestAction
  | FetchCitiesSuccessAction
  | FetchCitiesFailureAction;
