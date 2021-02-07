import cors from 'cors';
import goodRoute from '../routes/goodRoute';
import orderRoute from '../routes/orderRoute';
import authRoute from '../routes/auth';
import userRoute from '../routes/user';
import errorMiddleWare from '../middlewares/routeError';

export default function initRoutes(app){
  app.use('/api/goods', cors(), goodRoute);
  app.use('/api/orders', cors(), orderRoute);
  app.use('/api/', cors(), authRoute); // singin singup
  app.use('/api/users', userRoute);
  app.all('*', (req, resp) =>
    resp.status(404).json({
      message: 'Resource not found, API-SHOP',
      type: 404
    })
  );
  app.use(errorMiddleWare); // errors handler should be place in the end

  // last server's job before die
  process.on('uncaughtException', function (err) {
    console.error(`${new Date().toUTCString()} uncaughtException:`, err.message);
    console.error(err.stack);
    process.exit(1);
  });

}
