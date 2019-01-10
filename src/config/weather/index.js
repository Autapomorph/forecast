export const DARKSKY_API = `api.darksky.net`;
export const DARKSKY_API_PROTOCOL = `https://`;
export const DARKSKY_API_KEY = process.env.REACT_APP_DARKSKY_API_KEY;

export const DARKSKY_API_LANG_QUERY_PARAM = `lang`;
export const DARKSKY_API_UNITS_QUERY_PARAM = `units`;
export const DARKSKY_API_EXCLUDE_QUERY_PARAM = `exclude`;

export const DARKSKY_API_BASE = `${DARKSKY_API_PROTOCOL}${DARKSKY_API}`;
export const DARKSKY_API_FORECAST = `${DARKSKY_API_BASE}/forecast`;
