export const ALGOLIA_API = `places-dsn.algolia.net`;
export const ALGOLIA_API_PROTOCOL = `https://`;
export const ALGOLIA_APP_ID = process.env.REACT_APP_ALGOLIA_APP_ID || '';
export const ALGOLIA_API_KEY = process.env.REACT_APP_ALGOLIA_API_KEY || '';
export const ALGOLIA_API_VERSION = `1`;

export const ALGOLIA_APP_ID_QUERY_PARAM = `X-Algolia-Application-Id`;
export const ALGOLIA_API_KEY_QUERY_PARAM = `X-Algolia-API-Key`;
export const ALGOLIA_API_TYPE_QUERY_PARAM = `type`;
export const ALGOLIA_API_LANG_QUERY_PARAM = `language`;
export const ALGOLIA_API_AROUND_LAT_LNG_VIA_IP_QUERY_PARAM = `aroundLatLngViaIP`;
export const ALGOLIA_API_LATLNG_QUERY_PARAM = `aroundLatLng`;
export const ALGOLIA_API_SEARCH_QUERY_PARAM = `query`;

export const ALGOLIA_API_BASE = `${ALGOLIA_API_PROTOCOL}${ALGOLIA_API}/${ALGOLIA_API_VERSION}`;
export const ALGOLIA_API_PLACES = `${ALGOLIA_API_BASE}/places/query`;
export const ALGOLIA_API_REVERSE = `${ALGOLIA_API_BASE}/places/reverse`;
