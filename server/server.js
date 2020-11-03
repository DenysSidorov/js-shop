import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParse from 'body-parser';
import cors from 'cors';

import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import assets from './assets.json';
import config from './config';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import goodRoute from './routes/goodRoute';
import orderRoute from './routes/orderRoute';
import errorMiddleWare from './middlewares/errors';

const privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
const certificate = fs.readFileSync('./sslcert/certificate.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

console.log('DEV MODE = ', config.NODE_ENV);

mongoose.Promise = require('bluebird'); // for async code, not callbacks

if (config.NODE_ENV === 'development') {
  // mongoose.set('debug', true); // выводить в консоль все запросы
}

mongoose.connect(
  config.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  (err) => {
    if (err) throw err;
    console.log('Mongo connected!');
  }
);

const app = express();
app.disable('x-powered-by'); // disable server's name
app.use(require('prerender-node').set('prerenderToken', 'nVFIY5P2oHmWGlW1r6B3'));

app.use(express.static(path.join(__dirname, '/www/'))); // static files
app.use(morgan('tiny')); // logs
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.set('view engine', 'ejs'); // template-engine by default

app.use('/api/goods', cors(), goodRoute);
app.use('/api/orders', cors(), orderRoute);
app.use('/api/', cors(), authRoute); // singin singup
app.use('/api/users', userRoute);

app.use(errorMiddleWare); // errors handler should be place in the end

app.all('*', (req, resp) =>
  resp.status(404).json({
    message: 'Resource not found, API-SHOP',
    type: 404
  })
);

process.on('uncaughtException', function (err) {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err.message);
  console.error(err.stack);
  process.exit(1);
});

http.createServer(app);
https.createServer(credentials, app);

app.listen(config.PORT, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${config.PORT}`);
});
