import * as UserService from '../services/userService';
export function getCurrentUser(req, res, next) {
    const {token} = req;
    //console.log(UserService.getUserByToken());
    console.log(token, 'TOKEN');

    UserService.getUserByToken(token)
        .then(user=>{
            console.log(11);
            return res.json(user);
        })
        .catch(error=>{
            console.log(22);
            const {message} = error;
            next({
                status: 500,
                message
            })
        })
}