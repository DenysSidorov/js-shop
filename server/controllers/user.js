import * as UserService from '../services/userService';
import User from '../models/user';
import {pick} from 'lodash';

export function getCurrentUser(req, res, next) {
  const {token} = req;

  UserService.getUserByToken(token)
    .then((user) => {
      return res.json(user);
    })
    .catch((error) => {
      const {message} = error;
      next({
        status: 500,
        message
      });
    });
}

export async function updateCurrentUser(req, res, next) {
  const {token} = req;
   const body = pick(req.body, ['login', 'nick', 'phone', 'age', 'sex']);
  if (token) {
    try {
      const user = await UserService.getUserByToken(token);

      let newUser = await User.findOneAndUpdate({_id: user._id}, { "$set": body}, {
        new: true,
        projection: {password: false}
      });
      return res.json(newUser);
    } catch (e) {
      const {message} = e;
      next({
        status: 500,
        message
      });
    }
  } else {
    next({
      status: 400,
      message: 'Token not found!'
    });
  }


  const user = await UserService.getUserByToken(token)
    // .then((user) => {
    //   return res.json(user);
    // })
    .catch((error) => {
      const {message} = error;
      next({
        status: 500,
        message
      });
    });
}
