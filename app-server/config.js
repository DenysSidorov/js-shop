console.log(444);
require('dotenv').config({path: './.env'});
var configBackApp = {
  'NODE_ENV': process.env.NODE_ENV || 'development',
  'PORT': process.env.PORT || 3000,
  'FRONT_PORT': process.env.FRONT_PORT || 3002,
  'MONGODB_URI': process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shop',
  'SECRET_WORD': process.env.SECRET_WORD,
  'SERVER_DOMAIN': process.env.SERVER_DOMAIN,
  'MAIL_SETTINGS': {
    service: "Gmail",
    auth: {
      user: process.env.E_U,
      pass: process.env.E_P
    }
  }
};

module.exports = configBackApp;





var configApp = {
  frontend: {
    port: 8999,
    domain: '127.0.0.1',
    apiPort: 3000 // 3009
  },
  backend: {
    port: process.env.PORT || 3000, //3000
    database: process.env.MONGODB_URI, // 'mongodb://127.0.0.1:27017/shop'
    domain: process.env.SERVER_DOMAIN,
    secretWord: process.env.SECRET_WORD, //process.env.SECRET_WORD, // 'verysecretkey'
    mailSend: {
      service: "Gmail",
      auth: {
        user: process.env.E_U, // "1qazxsw,
        pass: process.env.E_P //
      }
    },
  },
};

