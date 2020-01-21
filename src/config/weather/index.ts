import config from 'api/client/config';
import { isLocalhost } from 'utils';

const { url, hostname } = config;

const API_BASE = isLocalhost(hostname) ? url.replace(hostname, window.location.hostname) : url;

export const DARKSKY_API_BASE = `${API_BASE}/api`;
