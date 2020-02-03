import { Action } from 'redux';

import { City, Weather } from 'models';

export enum Types {
  WEATHER_FETCH_REQUEST = '@cities/WEATHER_FETCH_REQUEST',
  WEATHER_FETCH_SUCCESS = '@cities/WEATHER_FETCH_SUCCESS',
  WEATHER_FETCH_FAILURE = '@cities/WEATHER_FETCH_FAILURE',
}

export type State = {
  readonly data: (City & Weather) | null;
  readonly loading: boolean;
  readonly errorMessage: string | null;
};

interface FetchWeatherRequestAction extends Action {
  type: typeof Types.WEATHER_FETCH_REQUEST;
}

interface FetchWeatherSuccessAction extends Action {
  type: typeof Types.WEATHER_FETCH_SUCCESS;
  payload: City & Weather;
  error: false;
}

interface FetchWeatherFailureAction extends Action {
  type: typeof Types.WEATHER_FETCH_FAILURE;
  payload: Error;
  error: true;
}

export type Actions =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
