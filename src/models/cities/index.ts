import { Coords } from 'models/geolocation';

export type City = {
  id: number;
  name: string;
  region: string;
  country: string;
  coords: Coords;
};

export type CitiesAPIRequest = {
  username: string;
  lang?: string;
  style?: string;
  maxRows?: number;
  lat?: number;
  lng?: number;
  q?: string;
  isNameRequired?: boolean;
  featureClass?: string[];
  featureCode?: string[];
};

export type CityAPIResponse = {
  geonameId: number;
  name: string;
  adminName1: string;
  countryCode: string;
  lat: string;
  lng: string;
};

export type CitiesAPIResponse = {
  geonames: CityAPIResponse[];
  totalResultsCount: number;
  status?: {
    message: string;
    value: number;
  };
};
