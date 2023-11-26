import dotenv from 'dotenv';

dotenv.config();

const configFrontApp = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  SERVER_DOMAIN: process.env.SERVER_DOMAIN || 'http://127.0.0.1',
  FRONT_PORT: process.env.FRONT_PORT || 3002,
};

export default configFrontApp;
