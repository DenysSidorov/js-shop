import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/user';

/**
 Middleware which checks admin's role and add it to app if it exists
 */

export default (req, resp, next) => {
  const token = req.headers.authorization;
  if (!token || token === 'undefined') {
    return next({
      status: 403,
      message: 'Forbidden. No Admin Token'
    });
  }

  jwt.verify(token, config.SECRET_WORD, async function (err, decoded) {
    if (err) {
      const {message} = err;
      return next({
        status: 400,
        message
      });
    }
    const user = await User.findOne({_id: decoded._id}, {password: 0});
    if (user.isAdmin) {
      req.token = decoded;
      next();
    } else {
      return next({
        status: 403,
        message: 'Forbidden. No Admin Access'
      });
    }
  });
};
