import { Action } from 'redux';

import { City } from 'models';

export enum Types {
  FEATURED_CITY_ADD = '@cities/FEATURED_CITY_ADD',
  FEATURED_CITY_REMOVE = '@cities/FEATURED_CITY_REMOVE',
  FEATURED_CITIES_CLEAR = '@cities/FEATURED_CITIES_CLEAR',
  FEATURED_CITIES_REORDER = '@cities/FEATURED_CITIES_REORDER',
}

interface AddFeaturedCityAction extends Action {
  type: typeof Types.FEATURED_CITY_ADD;
  payload: City;
}

interface RemoveFeaturedCityAction extends Action {
  type: typeof Types.FEATURED_CITY_REMOVE;
  payload: City['id'];
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

export type Actions =
  | AddFeaturedCityAction
  | RemoveFeaturedCityAction
  | ClearFeaturedCitiesAction
  | ReorderFeaturedCitiesAction;
