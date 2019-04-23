import { ICoords } from 'models/geolocation';
import * as GN from 'config/geonames';

export interface ICity {
  id: number;
  name: string;
  region: string;
  country: string;
  coords: ICoords;
}

export interface ICitiesAPIRequest {
  [GN.GEONAMES_API_KEY_QUERY_PARAM]?: string;
  [GN.GEONAMES_API_LANG_QUERY_PARAM]?: string;
  [GN.GEONAMES_API_STYLE_QUERY_PARAM]?: string;
  [GN.GEONAMES_API_MAX_ROWS_QUERY_PARAM]?: number;
  [GN.GEONAMES_API_LATITUDE_QUERY_PARAM]?: number;
  [GN.GEONAMES_API_LONGITUDE_QUERY_PARAM]?: number;
  [GN.GEONAMES_API_SEARCH_QUERY_PARAM]?: string;
  [GN.GEONAMES_API_NAME_REQUIRED_QUERY_PARAM]?: boolean;
  [GN.GEONAMES_API_FEATURE_CLASS_QUERY_PARAM]?: string[];
  [GN.GEONAMES_API_FEATURE_CODE_QUERY_PARAM]?: string[];
}

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
