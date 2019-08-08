import { PersistPartial } from 'redux-persist';

import { ICity, IWeather } from 'models';
import { Actions as CityActions, Types as CityTypes } from './city';
import { Actions as CitiesActions, Types as CitiesTypes } from './cities';
import { Actions as FeaturedCitiesActions, Types as FeaturedCitiesTypes } from './featuredCities';

/**
 * action types
 */
// eslint-disable-next-line import/prefer-default-export
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
export interface State {
  readonly selectedCity: {
    data: ICity & IWeather | null;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly cities: {
    data: ICity[];
    searchTerm: string;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly featuredCities: {
    data: ICity[];
  };
}

export type CitiesState = State & PersistPartial;
