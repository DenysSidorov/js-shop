import User from '../models/user';

export function getUserByToken(token) {
  const {_id} = token;
  return User.findOne({_id}, {password: 0});
}
