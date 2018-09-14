export const OWM_API_BASE = 'api.openweathermap.org';
export const OWM_API_PROTOCOL = 'https://';
export const OWM_API_VERSION = '2.5';
export const OWM_API_KEY = '0cc1e365769e7138bbcfd2a60fda214d';

export const OWM_API_KEY_QUERY_PARAM = `appid`;
export const OWM_API_LANG_QUERY_PARAM = `lang`;
export const OWM_API_UNITS_QUERY_PARAM = `units`;

export const OWM_API_CITY_ID_QUERY_PARAM = `id`;
export const OWM_API_CITY_NAME_QUERY_PARAM = `q`;
export const OWM_API_LATITUDE_QUERY_PARAM = `lat`;
export const OWM_API_LONGITUDE_QUERY_PARAM = `lon`;

export const OWM_API_WEATHER_BASE = `${OWM_API_PROTOCOL}${OWM_API_BASE}/data/${OWM_API_VERSION}`;
export const OWM_API_WEATHER_CITY = `${OWM_API_WEATHER_BASE}/weather`;
export const OWM_API_WEATHER_SEARCH = `${OWM_API_WEATHER_BASE}/find`;