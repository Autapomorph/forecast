import url from 'url';

import { ServerConfig } from './types';

export default function createConfig(): ServerConfig {
  const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
  const PORT = process.env.REACT_APP_PORT || '';
  const PROTOCOL = (process.env.REACT_APP_SECURE || '').toLowerCase() === 'true' ? 'https' : 'http';
  const URL = url.format({
    protocol: PROTOCOL,
    hostname: HOSTNAME,
    port: PORT,
  });

  const serverConfig: ServerConfig = {
    hostname: HOSTNAME,
    port: PORT,
    protocol: PROTOCOL,
    url: URL,
  };

  return serverConfig;
}
