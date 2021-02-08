import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';
import {sendMailForSignUp} from '../services/sendMailAuth';

export const signUp = (req, resp, next) => {
  const credentials = req.body;
  if (credentials.login && credentials.nick && credentials.password) {
    User.findOne({login: credentials.login}, (err, user) => {
      if (err) {
        const {message} = err;
        next({status: 400, message});
      }
      if (user) {
        next({status: 400, message: 'We have already had the same user'});
      } else {
        const token = jwt.sign(credentials, config.SECRET_WORD, {expiresIn: '10m'});
        setTimeout(() => {
          sendMailForSignUp({
            email: credentials.login,
            nick: credentials.nick,
            link: token
          });
        }, 0);
        resp.json({email: credentials.login});
      }
    });
  } else {
    next({status: 400, message: 'You have bad credentials'});
  }
};
export const isAdmin = (req, resp, next) => {
  const tok = req.body.authtoken;
  if (tok) {
    jwt.verify(tok, config.SECRET_WORD, async function (err, decoded) {
      if (err) {
        const {message} = err;
        return next({
          status: 400,
          message
        });
      }
      const user = await User.findOne({_id: decoded._id}, {password: 0});
      if (user) {
        resp.json({isadmin: user.isAdmin});
      } else {
        return next({
          status: 404,
          message: 'User not found.'
        });
      }
    });
  }
};
export const signIn = async (req, resp, next) => {
  const {login, password} = req.body;
  if (login && password) {
    User.findOne({login})
      .then((user) => {
        if (user && user.password === password) {
          const token = jwt.sign({_id: user._id}, config.SECRET_WORD, {expiresIn: '2d'});
          resp.json(token);
        } else {
          next({
            status: 400,
            message: 'Bad password or login'
          });
        }
      })
      .catch((err) => {
        const {message} = err;
        return next({
          status: 400,
          message: message || 'User not found'
        });
      });
  } else {
    next({status: 400, message: 'You need have password and login'});
  }
};

export async function checkTokenFromEmail(req, resp, next) {
  if (req.query.t) {
    jwt.verify(req.query.t, config.SECRET_WORD, function (error, credentials) {
      if (error) {
        next({status: 400, message: error.message});
      } else if (credentials && !error) {
        User.findOne({login: credentials.login}, async (err, user) => {
          if (err) {
            const {message} = err;
            next({status: 400, message});
          }
          if (user) {
            next({status: 400, message: 'We have already had the same user'});
          } else {
            try {
              const userResult = await User.create(credentials);
              const token = jwt.sign({_id: userResult._id}, config.SECRET_WORD, {expiresIn: '2d'});
              const urlApi =
                config.NODE_ENV === 'development' ? `${config.SERVER_DOMAIN}:${config.FRONT_PORT}` : config.SERVER_DOMAIN;
              resp.redirect(`${urlApi}/verify-user?t=${token}`);
            } catch ({message}) {
              return next({
                status: 400,
                message
              });
            }
          }
        });
      }
    });
  } else {
    next({status: 400, message: 'You don not have normal token'});
  }
}
