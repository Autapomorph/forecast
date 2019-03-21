/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const isTest = process.env.NODE_ENV === 'test';
const HOSTNAME = isTest ? 'localhost' : process.env.REACT_APP_HOSTNAME || '';
const PORT = isTest ? '3000' : process.env.REACT_APP_PORT || null;
const SECURE = process.env.REACT_APP_SECURE || '';
const PROTOCOL = SECURE.toLowerCase() === 'true' ? 'https' : 'http';
const URL = `${PROTOCOL}://${HOSTNAME}${PORT ? `:${PORT}` : ''}`;

module.exports = {
  host: HOSTNAME,
  port: PORT,
  protocol: PROTOCOL,
  url: URL,
};
