import config from 'api/client/config';

const { url, host } = config;

const API_BASE =
  host.toLowerCase() === 'localhost' ? url.replace(host, window.location.hostname) : url;

export const DARKSKY_API_BASE = `${API_BASE}/api`;
