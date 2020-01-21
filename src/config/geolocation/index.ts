export const HOSTNAME = `api.ipdata.co`;
export const PROTOCOL = `https://`;
export const API_KEY = process.env.REACT_APP_IPDATA_API_KEY || '';

export const API_BASE = `${PROTOCOL}${HOSTNAME}`;
export const IPDATA_API = `${API_BASE}/?api-key=${API_KEY}`;
