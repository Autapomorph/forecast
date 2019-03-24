import { PersistPartial } from 'redux-persist';

import { CitiesState } from './cities/types';
import { GeolocationState } from './geolocation/types';
import { SettingsState } from './settings/types';

// eslint-disable-next-line import/prefer-default-export
export interface RootState {
  cities: CitiesState & PersistPartial;
  geolocation: GeolocationState;
  settings: SettingsState & PersistPartial;
}
