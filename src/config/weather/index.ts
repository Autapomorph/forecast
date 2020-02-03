import config from 'api/config';
import { isLocalhost } from 'utils';

const { url, hostname } = config;

const API_BASE = isLocalhost(hostname) ? url.replace(hostname, window.location.hostname) : url;

export const API_WEATHER_BASE = `${API_BASE}/api`;
