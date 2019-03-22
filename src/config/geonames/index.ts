export const GEONAMES_API: string = `secure.geonames.org`;
export const GEONAMES_API_PROTOCOL: string = `https://`;
export const GEONAMES_API_KEY: string = process.env.REACT_APP_GEONAMES_API_KEY || '';

export const GEONAMES_API_KEY_QUERY_PARAM: string = `username`;
export const GEONAMES_API_LANG_QUERY_PARAM: string = `lang`;
export const GEONAMES_API_STYLE_QUERY_PARAM: string = `style`;
export const GEONAMES_API_MAX_ROWS_QUERY_PARAM: string = `maxRows`;
export const GEONAMES_API_LATITUDE_QUERY_PARAM: string = `lat`;
export const GEONAMES_API_LONGITUDE_QUERY_PARAM: string = `lng`;
export const GEONAMES_API_SEARCH_QUERY_PARAM: string = `q`;
export const GEONAMES_API_NAME_REQUIRED_QUERY_PARAM: string = `isNameRequired`;
export const GEONAMES_API_FEATURE_CLASS_QUERY_PARAM: string = `featureClass`;
export const GEONAMES_API_FEATURE_CODE_QUERY_PARAM: string = `featureCode`;

export const GEONAMES_API_BASE: string = `${GEONAMES_API_PROTOCOL}${GEONAMES_API}`;
export const GEONAMES_API_SEARCH: string = `${GEONAMES_API_BASE}/searchJSON`;
export const GEONAMES_API_FIND_NEARBY: string = `${GEONAMES_API_BASE}/findNearbyPlaceNameJSON`;
