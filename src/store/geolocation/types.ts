import { Action } from 'redux';

import { ICoords } from '../../models';

export enum GeolocationActionTypes {
  GEOLOCATION_FETCH_REQUEST = '@geolocation/GEOLOCATION_FETCH_REQUEST',
  GEOLOCATION_FETCH_SUCCESS = '@geolocation/GEOLOCATION_FETCH_SUCCESS',
  GEOLOCATION_FETCH_FAILURE = '@geolocation/GEOLOCATION_FETCH_FAILURE',
}

interface FetchRequestAction extends Action {
  type: typeof GeolocationActionTypes.GEOLOCATION_FETCH_REQUEST;
}

interface FetchSuccessAction extends Action {
  type: typeof GeolocationActionTypes.GEOLOCATION_FETCH_SUCCESS;
  payload: ICoords;
  error: false;
}

interface FetchFailureAction extends Action {
  type: typeof GeolocationActionTypes.GEOLOCATION_FETCH_FAILURE;
  payload: Error;
  error: true;
}

export type GeolocationActions = FetchRequestAction | FetchSuccessAction | FetchFailureAction;

export interface GeolocationState {
  readonly data: ICoords | null;
  readonly loading: boolean;
  readonly errorMessage: string | null;
}
