import express from 'express';
import initGlobalMiddlewares from './globalMiddlewares';
import fs from 'fs';

import http from 'http';
import https from 'https';

// import assets from '../assets.json';
import config from '../config';
// import authRoute from '../routes/auth';
// import userRoute from '../routes/user';
// import goodRoute from '../routes/goodRoute';
// import orderRoute from '../routes/orderRoute';
// import errorMiddleWare from '../middlewares/routeError';
import initRoutes from './routes';

// import {serverApollo} from '../graphql/config';
// console.log(serverApollo.graphqlPath);
const privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
const certificate = fs.readFileSync('./sslcert/certificate.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};


console.log('DEV MODE = ', config.NODE_ENV);



export const application = () => {
  throw new Error('Pizda');
  const app = express();
  initGlobalMiddlewares(app);
  initRoutes(app);


  http.createServer(app);
  https.createServer(credentials, app);

  app.listen(config.PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${config.PORT}`);
  });
}

