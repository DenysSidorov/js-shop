import User from "../shop/models/user";
import jwt from "jsonwebtoken";
import config from "../../config/index"; // Генерация токена
import {sendMailForSingup} from '../shop/services/sendMail';
export const singup = (req, resp, next) => {
    let credentials = req.body; // Вытащим данные от юзера из формы.
    //console.log(req, 'REQ');
    console.log(credentials, 'credentials');
    if (credentials.login && credentials.nick && credentials.password ) {
        User.findOne({login: credentials.login}, (err, user)=> {
            if (err) {
                let {message} = err;
                next({status: 400, message})
            }
            if(user){
                next({status: 400, message : 'We have already had the same user'})
            } else {
                // Формируем токен
                // Signing a token with 10 minutes of expiration
                var token = jwt.sign({
                    data:credentials
                }, config.backend.secretWord, { expiresIn: '1m' });

                // отправка на почту
                setTimeout(()=>{sendMailForSingup({
                    email: credentials.login,
                    nick: credentials.nick,
                    link: token
                })}, 0);
                resp.json({email: credentials.login});
            }

        })
    } else {
        next({status: 400, message : 'You have bad credentials'})
    }
}

export const singin = async(req, resp, next) => {
    // Получим наши данные
    console.log(req, 'REQ2');
    const {login, password} = req.body;
    console.log(password, 'password');
    console.log(login, 'login');
    // Найдем нашего юзера в базе
    if (login && password) {
        const user = User.findOne({login})
            .then(user => {
                if (user && user.password == password) {
                    /** Преймущество токена в том,что его можно выдавать не только браузеру но и приложению
                     * Первый параметр - то что будем хэшировать
                     * Второй параметр - это ключ!
                     * */
                        // req.session.userId = user._id;
                        // resp.json(user);

                    const token = jwt.sign(
                        {data:{_id: user._id}},
                        config.backend.secretWord,
                        { expiresIn: '2d' });
                    resp.json(token);

                    /** Этот токен передается клиенту и при каждом обращении клиент должен его передавать серверу
                     * в виде заголовка или в другом виде, может хранить его в куках
                     * При обращении на закрытые роуты, можем написать middleware и читать у пользователя этот токен
                     * */

                } else {
                    next({
                        status: 400,
                        message: 'Bad password or login'
                    })
                }
            }).catch(err => {
                const {message} = err;
                // Если юзера не нашли - 400
                return next({
                    status: 400,
                    message: message || 'User not found'
                })
            });
    } else {
        next({status: 400, message: 'You need have password and login'})
    }
}

export const checkTokenFromEmail = async(req, resp, next) => {

    if (req.query.t){
        jwt.verify(req.query.t, config.backend.secretWord, function(err, credentials) {
            if(err){
                // TODO error-token
                next({status:400, message: err.message})
            } else if(credentials && !err) {

                console.log(credentials.data.login, 'credentials------------');
                User.findOne({login: credentials.data.login}, (err, user)=> {
                    if (err) {
                        let {message} = err;
                        next({status: 400, message})
                    }
                    if(user){
                        next({status: 400, message : 'We have already had the same user'})
                    } else {
                        // Формируем токен
                        // Signing a token with 10 minutes of expiration
                        var token = jwt.sign({
                            data:{credentials.data
                        }, config.backend.secretWord, { expiresIn: '1m' });

                        // отправка на почту
                        setTimeout(()=>{sendMailForSingup({
                            email: credentials.login,
                            nick: credentials.nick,
                            link: token
                        })}, 0);
                        resp.json({email: credentials.login});
                    }

                })
                // проверка существования логина в базе
                // если пользователь есть -> отправить сообщение что пользователь уже есть
                // если пользователя нет создаем его в базе с пометкой "не юзер" и делаем редирект с токеномо
                // создаем токен и отправляем на url TODO verify-user
                // на клиенте записываем токен, перенапрваляем на index, для избавления от токена в url
                // на клиенте index.js panel будет делать запросы

                console.log(credentials, 'credentials');
                resp.json({email: req.query.t, after: 2})
            }
        });

    } else {
        next({status:400, message: "you don not have normal token"})
    }

    // resp.json({email: req.query.t, after: 0})
}
