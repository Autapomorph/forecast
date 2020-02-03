import { Coords } from './coords';

export type GeoIPAPIResponse = Coords & {
  message?: string;
};
