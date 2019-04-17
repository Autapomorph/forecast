import * as AL from '../../config/algolia';
import { ICoords } from '../geolocation';

export interface ICity {
  id: string;
  name: {
    default: string[];
    [countryCode: string]: string[];
  };
  region: string;
  country: string;
  coords: ICoords;
}

export interface ICitiesAPIRequest {
  [AL.ALGOLIA_APP_ID_QUERY_PARAM]?: string;
  [AL.ALGOLIA_API_KEY_QUERY_PARAM]?: string;
  [AL.ALGOLIA_API_TYPE_QUERY_PARAM]?: string;
  [AL.ALGOLIA_API_LANG_QUERY_PARAM]?: string;
  [AL.ALGOLIA_API_AROUND_LAT_LNG_VIA_IP_QUERY_PARAM]?: boolean;
  [AL.ALGOLIA_API_LATLNG_QUERY_PARAM]?: string;
  [AL.ALGOLIA_API_SEARCH_QUERY_PARAM]?: string;
}

export interface ICityAPIResponse {
  objectID: string;
  locale_names: {
    default: string[];
    [countryCode: string]: string[];
  };
  administrative: string[];
  country_code: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  admin_level: number;
}

export interface ICitiesAPIResponse {
  hits?: ICityAPIResponse[];
  nbHits?: number;
  status?: number;
  message?: string;
}
