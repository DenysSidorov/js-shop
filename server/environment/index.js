import express from 'express';
import cors from 'cors';
import initGlobalMiddlewares from './globalMiddlewares';
import fs from 'fs';

import http from 'http';
import https from 'https';

// import assets from '../assets.json';
import config from '../config';
import authRoute from '../routes/auth';
import userRoute from '../routes/user';
import goodRoute from '../routes/goodRoute';
import orderRoute from '../routes/orderRoute';
import errorMiddleWare from '../middlewares/errors';

// import {serverApollo} from '../graphql/config';
// console.log(serverApollo.graphqlPath);
const privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
const certificate = fs.readFileSync('./sslcert/certificate.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};


console.log('DEV MODE = ', config.NODE_ENV);



export const application = () => {
  const app = express();
  initGlobalMiddlewares(app);

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
}

