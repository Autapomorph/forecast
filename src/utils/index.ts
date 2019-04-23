import { NODE_ENV } from 'config';

export const isProd: boolean = NODE_ENV === 'production';
export const isDev: boolean = NODE_ENV === 'development';
export const isTest: boolean = NODE_ENV === 'test';
