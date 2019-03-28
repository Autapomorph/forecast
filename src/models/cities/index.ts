import { ICoords } from '../geolocation';

export interface ICityAPIResponse {
  geonameId: number;
  name: string;
  adminName1: string;
  countryCode: string;
  lat: string;
  lng: string;
}

export interface ICitiesAPIResponse {
  geonames: ICityAPIResponse[];
  totalResultsCount: number;
  status?: {
    message: string;
    value: number;
  };
}

export interface ICity {
  id: number;
  name: string;
  region: string;
  country: string;
  coords: ICoords;
}
