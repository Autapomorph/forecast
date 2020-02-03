import { State as CitiesState } from './cities/types';
import { State as GeolocationState } from './geolocation/types';
import { State as SettingsState } from './settings/types';

export type RootState = {
  cities: CitiesState;
  geolocation: GeolocationState;
  settings: SettingsState;
};
