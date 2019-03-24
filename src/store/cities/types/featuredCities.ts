import { Action } from 'redux';

import { CitiesActionTypes as Types } from './actionTypes';
import { ICity } from '../../../models';

interface AddFeaturedCityAction extends Action {
  type: typeof Types.FEATURED_CITY_ADD;
  payload: ICity;
}

interface RemoveFeaturedCityAction extends Action {
  type: typeof Types.FEATURED_CITY_REMOVE;
  payload: ICity['id'];
}

interface ClearFeaturedCitiesAction extends Action {
  type: typeof Types.FEATURED_CITIES_CLEAR;
}

interface ReorderFeaturedCitiesAction extends Action {
  type: typeof Types.FEATURED_CITIES_REORDER;
  payload: {
    prevIndex: number;
    nextIndex: number;
  };
}

// eslint-disable-next-line import/prefer-default-export
export type FeaturedCitiesActions =
  | AddFeaturedCityAction
  | RemoveFeaturedCityAction
  | ClearFeaturedCitiesAction
  | ReorderFeaturedCitiesAction;
