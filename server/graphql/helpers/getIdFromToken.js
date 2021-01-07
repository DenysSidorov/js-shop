import jwt from 'jsonwebtoken';
import config from '../../config';

export default function (token) {
  return new Promise(async (resolve, reject) => {
    if (!token) {
      resolve('');
    }

    await jwt.verify(token, config.SECRET_WORD, function (err, decoded) {
      if (err) {
        resolve(err.message);
      } else {
        resolve(decoded._id);
      }
    });
  })
}
