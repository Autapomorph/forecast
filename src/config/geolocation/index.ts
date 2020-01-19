export const HOSTNAME = `api.ipstack.com`;
export const PROTOCOL = `http://`;
export const API_KEY = process.env.REACT_APP_IPSTACK_API_KEY || '';

export const API_BASE = `${PROTOCOL}${HOSTNAME}`;
export const API_CHECK = `${API_BASE}/check?access_key=${API_KEY}`;
