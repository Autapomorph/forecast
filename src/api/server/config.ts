import fs from 'fs';
import dotenv from 'dotenv';

import createConfig from '../shared/createConfig';

/* eslint-disable-next-line prefer-destructuring */
const NODE_ENV = process.env.NODE_ENV;

const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  NODE_ENV !== 'test' ? `.env.local` : ``,
  '.env',
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    dotenv.config({
      path: dotenvFile,
    });
  }
});

export default createConfig();
