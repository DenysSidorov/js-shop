require('dotenv').config({path: './.env'});

const configBackApp = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  FRONT_PORT: process.env.FRONT_PORT || 3002,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shop',
  SECRET_WORD: process.env.SECRET_WORD, // 'verysecretkey'
  SERVER_DOMAIN: process.env.SERVER_DOMAIN,
  MAIL_SETTINGS: {
    service: 'Gmail',
    auth: {
      user: process.env.E_U, // "1qazxsw,
      pass: process.env.E_P
    }
  }
};

module.exports = configBackApp;
