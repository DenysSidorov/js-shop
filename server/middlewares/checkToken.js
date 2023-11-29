import jwt from 'jsonwebtoken';
import config from '../config';

/**
 Middleware which checks token and add it to app if it exists
 */

export default (req, resp, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 403,
      message: 'Forbidden. No Token'
    });
  }
  jwt.verify(token, config.SECRET_WORD, function (err, decoded) {
    if (err) {
      const {message} = err;
      return next({
        status: 400,
        message
      });
    }
    req.token = decoded;
    next();
  });
};
