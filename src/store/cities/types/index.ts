import { State as ActiveState } from './active';
import { State as CityState, Actions as CityActions, Types as CityTypes } from './city';
import { State as CitiesState, Actions as CitiesActions, Types as CitiesTypes } from './cities';
import {
  State as FeaturedState,
  Actions as FeaturedActions,
  Types as FeaturedTypes,
} from './featured';

/**
 * action types
 */
export const Types = {
  ...CityTypes,
  ...CitiesTypes,
  ...FeaturedTypes,
};

/**
 * actions
 */
export type Actions = CityActions | CitiesActions | FeaturedActions;

/**
 * state
 */
export type State = {
  readonly active: ActiveState;
  readonly city: CityState;
  readonly cities: CitiesState;
  readonly featured: FeaturedState;
};
