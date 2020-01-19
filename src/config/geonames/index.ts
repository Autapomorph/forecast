export const HOSTNAME = `secure.geonames.org`;
export const PROTOCOL = `https://`;
export const API_KEY = process.env.REACT_APP_GEONAMES_API_KEY || '';

export const API_BASE = `${PROTOCOL}${HOSTNAME}`;
export const API_SEARCH = `${API_BASE}/searchJSON`;
export const API_FIND_NEARBY = `${API_BASE}/findNearbyPlaceNameJSON`;
