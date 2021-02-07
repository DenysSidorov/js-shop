import express from 'express';
import config from '../config';
import initGlobalMiddlewares from './globalMiddlewares';
import initRoutes from './routes';
import ServerCreator from './serverCreator';

// import {serverApollo} from '../graphql/config';
// console.log(serverApollo.graphqlPath);


console.log('DEV MODE = ', config.NODE_ENV);



export const application = () => {
  const app = express();
  initGlobalMiddlewares(app);
  initRoutes(app);
  ServerCreator.up(app);
}

