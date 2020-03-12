require('dotenv').config();

var configFrontApp = {
  'NODE_ENV': process.env.NODE_ENV || 'development',
  'API_PORT': process.env.API_PORT || 3000,
  'FRONT_PORT': process.env.FRONT_PORT || 8999
};

module.exports = configFrontApp;
