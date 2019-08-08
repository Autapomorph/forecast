import { Action } from 'redux';

import { ICity, IWeather } from 'models';

// eslint-disable-next-line import/prefer-default-export
export enum Types {
  CITY_WEATHER_FETCH_REQUEST = '@cities/CITY_WEATHER_FETCH_REQUEST',
  CITY_WEATHER_FETCH_SUCCESS = '@cities/CITY_WEATHER_FETCH_SUCCESS',
  CITY_WEATHER_FETCH_FAILURE = '@cities/CITY_WEATHER_FETCH_FAILURE',
}

interface FetchCityWeatherRequestAction extends Action {
  type: typeof Types.CITY_WEATHER_FETCH_REQUEST;
}

interface FetchCityWeatherSuccessAction extends Action {
  type: typeof Types.CITY_WEATHER_FETCH_SUCCESS;
  payload: ICity & IWeather;
  error: false;
}

interface FetchCityWeatherFailureAction extends Action {
  type: typeof Types.CITY_WEATHER_FETCH_FAILURE;
  payload: Error;
  error: true;
}

export type Actions =
  | FetchCityWeatherRequestAction
  | FetchCityWeatherSuccessAction
  | FetchCityWeatherFailureAction;
