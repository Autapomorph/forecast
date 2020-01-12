import { CitiesState } from './cities/types';
import { GeolocationState } from './geolocation/types';
import { SettingsState } from './settings/types';

export type RootState = {
  cities: CitiesState;
  geolocation: GeolocationState;
  settings: SettingsState;
};
