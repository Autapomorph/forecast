import { PersistPartial } from 'redux-persist/es/persistReducer';

import { City, Weather } from 'models';
import { Actions as CityActions, Types as CityTypes } from './city';
import { Actions as CitiesActions, Types as CitiesTypes } from './cities';
import { Actions as FeaturedCitiesActions, Types as FeaturedCitiesTypes } from './featuredCities';

/**
 * action types
 */
export const Types = {
  ...CityTypes,
  ...CitiesTypes,
  ...FeaturedCitiesTypes,
};

/**
 * actions
 */
export type Actions = CityActions | CitiesActions | FeaturedCitiesActions;

/**
 * state
 */
export type State = {
  readonly selectedCity: {
    data: (City & Weather) | null;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly cities: {
    data: City[];
    searchTerm: string;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly featuredCities: {
    data: City[];
  };
};

export type CitiesState = State & PersistPartial;
