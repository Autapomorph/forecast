export const GEONAMES_API = `secure.geonames.org`;
export const GEONAMES_API_PROTOCOL = `https://`;
export const GEONAMES_API_KEY = process.env.REACT_APP_GEONAMES_API_KEY;

export const GEONAMES_API_KEY_QUERY_PARAM = `username`;
export const GEONAMES_API_LANG_QUERY_PARAM = `lang`;
export const GEONAMES_API_STYLE_QUERY_PARAM = `style`;
export const GEONAMES_API_MAX_ROWS_QUERY_PARAM = `maxRows`;
export const GEONAMES_API_LATITUDE_QUERY_PARAM = `lat`;
export const GEONAMES_API_LONGITUDE_QUERY_PARAM = `lng`;
export const GEONAMES_API_SEARCH_QUERY_PARAM = `q`;
export const GEONAMES_API_NAME_REQUIRED_QUERY_PARAM = `isNameRequired`;
export const GEONAMES_API_FEATURE_CLASS_QUERY_PARAM = `featureClass`;
export const GEONAMES_API_FEATURE_CODE_QUERY_PARAM = `featureCode`;

export const GEONAMES_API_BASE = `${GEONAMES_API_PROTOCOL}${GEONAMES_API}`;
export const GEONAMES_API_SEARCH = `${GEONAMES_API_BASE}/searchJSON`;
export const GEONAMES_API_FIND_NEARBY = `${GEONAMES_API_BASE}/findNearbyPlaceNameJSON`;
