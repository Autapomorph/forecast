/* eslint-disable import/named */
import { CityActions } from './city';
import { CitiesActions } from './cities';
import { FeaturedCitiesActions } from './featuredCities';
import { ICity, IWeather } from '../../../models';

export { CitiesActionTypes } from './actionTypes';

export type CitiesActions = CityActions | CitiesActions | FeaturedCitiesActions;

export interface CitiesState {
  readonly selectedCity: {
    data: ICity & IWeather | null;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly cities: {
    data: ICity[] | null;
    searchTerm: string;
    active: boolean;
    loading: boolean;
    errorMessage: string | null;
  };
  readonly featuredCities: {
    data: ICity[];
  };
}
