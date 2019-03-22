import dotenv from 'dotenv';

dotenv.config();

interface IServerConfig {
  host: string;
  port: string | null;
  protocol: string;
  url: string;
}

const isTest: boolean = process.env.NODE_ENV === 'test';
const HOSTNAME: string = isTest ? 'localhost' : process.env.REACT_APP_HOSTNAME || '';
const PORT: string | null = isTest ? '3000' : process.env.REACT_APP_PORT || null;
const SECURE: string = process.env.REACT_APP_SECURE || '';
const PROTOCOL: string = SECURE.toLowerCase() === 'true' ? 'https' : 'http';
const URL: string = `${PROTOCOL}://${HOSTNAME}${PORT ? `:${PORT}` : ''}`;

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
