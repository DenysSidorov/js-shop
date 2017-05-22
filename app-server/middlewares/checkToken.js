import config from '../config/index';
import jwt from 'jsonwebtoken';

// Создадим middleware проверяющие наличие токена
export default (req, resp, next)=>{
    // Будем хранить в заголовке токен авторизации
    // Вытащим токен из заголовка, если он там есть
    const token =req.headers['authorization'];
    // Если токена нет:;
    if(!token){
        console.log('нет токена?');
        return next({
            status: 403,
            message: 'Forbidden. No Token'
        })
    }

    // Если токен есть - проверяем его с секретным словом
    jwt.verify(token, config.secret , function(err, decoded) {
        if(err){
            const {message} = err;
            return next({
                status: 400,
                message
            })
        }
        // Если токен нормальный - пропускаем - все ок
        console.log(decoded);
        req.token = decoded; // ТЕПЕРЬ ВЕЗДЕ В REQUEST ЕСТЬ TOKEN
        next();
    });
}