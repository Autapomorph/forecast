import { Action } from 'redux';

import { City } from 'models';

export enum Types {
  FEATURED_ADD = '@cities/FEATURED_ADD',
  FEATURED_REMOVE = '@cities/FEATURED_REMOVE',
  FEATURED_CLEAR = '@cities/FEATURED_CLEAR',
  FEATURED_REORDER = '@cities/FEATURED_REORDER',
}

export type State = City[];

interface AddFeaturedAction extends Action {
  type: typeof Types.FEATURED_ADD;
  payload: City;
}

interface RemoveFeaturedAction extends Action {
  type: typeof Types.FEATURED_REMOVE;
  payload: City['id'];
}

interface ClearFeaturedAction extends Action {
  type: typeof Types.FEATURED_CLEAR;
}

interface ReorderFeaturedAction extends Action {
  type: typeof Types.FEATURED_REORDER;
  payload: {
    prevIndex: number;
    nextIndex: number;
  };
}

export type Actions =
  | AddFeaturedAction
  | RemoveFeaturedAction
  | ClearFeaturedAction
  | ReorderFeaturedAction;
