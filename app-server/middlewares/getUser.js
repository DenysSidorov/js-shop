import * as UserService from '../services/userService';

export default (req, resp, next) => {
    let {token} = req;
    UserService.getUserByToken(token)
        .then(us => {
            console.log('Получил пользователя', us);
            req.user = us;
            next();
        })
        .catch(er => {
            let {message} = er;
            next({message, status: 500});
        })
}