import * as UserService from '../shop/services/userService';

export default (req, resp, next) => {
  const {token} = req;
  UserService.getUserByToken(token)
    .then((us) => {
      console.log('User: ', us);
      req.user = us;
      next();
    })
    .catch((er) => {
      const {message} = er;
      next({message, status: 500});
    });
};
