import compression from 'compression';
import bodyParse from 'body-parser';
import morgan from 'morgan';
import {serverApollo} from '../graphql/config';
// import helmet from 'helmet';

const initGlobalMiddlewares = (app) => {
  app.disable('x-powered-by'); // disable server's name
  // app.use(helmet({ contentSecurityPolicy: (config.NODE_ENV === 'production') ? undefined : false }));
  app.use(compression());
  // app.use(express.static(path.join(__dirname, '/www/')));
  app.use(morgan('tiny'));
  app.use(bodyParse.json());
  app.use(bodyParse.urlencoded({extended: true}));
  app.set('view engine', 'ejs');
  serverApollo.applyMiddleware({app, path: '/graphql'});
};

export default initGlobalMiddlewares;
