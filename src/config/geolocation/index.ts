export const HOSTNAME = `api.ipgeolocation.io`;
export const PROTOCOL = `https://`;
export const API_KEY = process.env.REACT_APP_GEOIP_API_KEY || '';

export const API_BASE = `${PROTOCOL}${HOSTNAME}`;
export const API_GEOIP = `${API_BASE}/ipgeo?apiKey=${API_KEY}`;
