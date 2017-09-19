import config from '../../config/index';
import User from '../shop/models/user';
import userService from '../shop/services/userService';
import jwt from 'jsonwebtoken';

// Создадим middleware проверяющие наличие токена
export default (req, resp, next)=>{
    // Будем хранить в заголовке токен авторизации
    // Вытащим токен из заголовка, если он там есть
    const token = req.headers['authorization'];
    // Если токена нет:;
    if(!token){
        console.log('нет токена?');
        return next({
            status: 403,
            message: 'Forbidden. No Admin Token'
        })
    }

    // Если токен есть - проверяем его с секретным словом
    jwt.verify(token, config.backend.secretWord, async function(err, decoded) {
        if(err){
            const {message} = err;
            return next({
                status: 400,
                message
            })
        }
        // Если токен нормальный - пропускаем - все ок
        console.log(decoded._id, 'devv');
        // Делаем проверку на админа
        let user = await User.findOne({_id: decoded._id}, {password: 0})
        console.log(user);
        if(user.isAdmin){
            req.token = decoded; // ТЕПЕРЬ ВЕЗДЕ В REQUEST ЕСТЬ TOKEN
            next();
        } else {
            return next({
                status: 403,
                message: 'Forbidden. No Admin Access'
            })
        }

    });
}