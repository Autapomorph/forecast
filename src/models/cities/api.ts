export type CitiesAPIRequest = {
  username: string;
  lang?: string;
  style?: string;
  startRow?: number;
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
  countryName: string;
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
