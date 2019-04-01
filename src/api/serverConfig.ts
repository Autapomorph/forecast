import url from 'url';
import dotenv from 'dotenv';

dotenv.config();

interface IServerConfig {
  host: string;
  port: string;
  protocol: string;
  url: string;
}

const isTest = process.env.NODE_ENV === 'test';
const HOSTNAME = isTest ? 'localhost' : process.env.REACT_APP_HOSTNAME || '';
const PORT = isTest ? '3000' : process.env.REACT_APP_PORT || '';
const SECURE = process.env.REACT_APP_SECURE || '';
const PROTOCOL = SECURE.toLowerCase() === 'true' ? 'https' : 'http';
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

export { HOSTNAME as host };
export { PORT as port };
export { PROTOCOL as protocol };
export { URL as url };
export default serverConfig;
