import { Action } from 'redux';

import { CitiesActionTypes as Types } from './actionTypes';
import { ICity, IWeather } from '../../../models';

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

// eslint-disable-next-line import/prefer-default-export
export type CityActions =
  | FetchCityWeatherRequestAction
  | FetchCityWeatherSuccessAction
  | FetchCityWeatherFailureAction;
