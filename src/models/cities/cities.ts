import { Coords } from 'models/geolocation';

export type City = {
  id: number;
  name: string;
  region: string;
  countryName: string;
  countryCode: string;
  coords: Coords;
};
