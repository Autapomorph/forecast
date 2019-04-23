import config from 'api/client/config';

const { url, host } = config;

const API_BASE =
  host.toLowerCase() === 'localhost' ? url.replace(host, window.location.hostname) : url;

export const DARKSKY_API_QUERY_LATITUDE_PARAM = `latitude`;
export const DARKSKY_API_QUERY_LONGITUDE_PARAM = `longitude`;
export const DARKSKY_API_LANG_QUERY_PARAM = `lang`;
export const DARKSKY_API_UNITS_QUERY_PARAM = `units`;
export const DARKSKY_API_EXCLUDE_QUERY_PARAM = `exclude`;

export const DARKSKY_API_BASE = `${API_BASE}/proxy`;
