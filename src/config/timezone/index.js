export const TZDB_API = 'api.timezonedb.com';
export const TZDB_API_PROTOCOL = 'https://';
export const TZDB_API_VERSION = 'v2.1';

export const TZDB_API_KEY = process.env.REACT_APP_TZDB_API_KEY;

export const TZDB_API_KEY_QUERY_PARAM = `key`;
export const TZDB_API_FORMAT_QUERY_PARAM = `format`;
export const TZDB_API_BY_QUERY_PARAM = `by`;

export const TZDB_API_TIME_QUERY_PARAM = `time`;
export const TZDB_API_LATITUDE_QUERY_PARAM = `lat`;
export const TZDB_API_LONGITUDE_QUERY_PARAM = `lng`;

export const TZDB_API_BASE = `${TZDB_API_PROTOCOL}${TZDB_API}/${TZDB_API_VERSION}`;
export const TZDB_API_TIMEZONE = `${TZDB_API_BASE}/get-time-zone`;
