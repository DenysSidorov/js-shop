import express from 'express';
import initGlobalMiddlewares from './globalMiddlewares';
import initRoutes from './routes';
import ServerCreator from './serverCreator';

export const application = () => {
  const app = express();
  initGlobalMiddlewares(app);
  initRoutes(app);
  ServerCreator.up(app);
}

