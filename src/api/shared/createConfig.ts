import url from 'url';

import { IServerConfig } from './types';

export default function createConfig(): IServerConfig {
  const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
  const PORT = process.env.REACT_APP_PORT || '';
  const PROTOCOL = (process.env.REACT_APP_SECURE || '').toLowerCase() === 'true' ? 'https' : 'http';
  const URL = url.format({
    protocol: PROTOCOL,
    hostname: HOSTNAME,
    port: PORT,
  });

  const serverConfig: IServerConfig = {
    host: HOSTNAME,
    port: PORT,
    protocol: PROTOCOL,
    url: URL,
  };

  return serverConfig;
}
