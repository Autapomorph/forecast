import { CitiesState } from './cities/types';
import { GeolocationState } from './geolocation/types';
import { SettingsState } from './settings/types';

// eslint-disable-next-line import/prefer-default-export
export interface RootState {
  cities: CitiesState;
  geolocation: GeolocationState;
  settings: SettingsState;
}
