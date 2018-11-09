export const OWM_API = 'api.openweathermap.org';
export const OWM_API_PROTOCOL = 'https://';
export const OWM_API_VERSION = '2.5';
export const OWM_API_KEY = process.env.REACT_APP_OWM_API_KEY;

export const OWM_API_KEY_QUERY_PARAM = `appid`;
export const OWM_API_LANG_QUERY_PARAM = `lang`;
export const OWM_API_UNITS_QUERY_PARAM = `units`;

export const OWM_API_CITY_ID_QUERY_PARAM = `id`;
export const OWM_API_CITY_NAME_QUERY_PARAM = `q`;
export const OWM_API_LATITUDE_QUERY_PARAM = `lat`;
export const OWM_API_LONGITUDE_QUERY_PARAM = `lon`;

export const OWM_API_BASE = `${OWM_API_PROTOCOL}${OWM_API}/data/${OWM_API_VERSION}`;
export const OWM_API_WEATHER_CITY = `${OWM_API_BASE}/weather`;
export const OWM_API_FORECAST_CITY = `${OWM_API_BASE}/forecast`;
export const OWM_API_SEARCH_CITIES = `${OWM_API_BASE}/find`;
