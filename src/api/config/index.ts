import url from 'url';

export type ServerConfig = {
  hostname: string;
  port: string;
  protocol: string;
  url: string;
};

const createConfig = (): ServerConfig => {
  const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
  const PORT = process.env.REACT_APP_PORT || '';
  const PROTOCOL = (process.env.REACT_APP_SECURE || '').toLowerCase() === 'true' ? 'https' : 'http';
  const URL = url.format({
    protocol: PROTOCOL,
    hostname: HOSTNAME,
    port: PORT,
  });

  return {
    hostname: HOSTNAME,
    port: PORT,
    protocol: PROTOCOL,
    url: URL,
  };
};

export default createConfig();
