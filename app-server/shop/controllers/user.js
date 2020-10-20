import * as UserService from '../services/userService';

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
