/* eslint-disable import/named */
import { ICity, IWeather } from '../../models';

// eslint-disable-next-line import/prefer-default-export
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
