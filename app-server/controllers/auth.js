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
            console.log(2);
            }
            if(user){
                console.log(user, 'USER');
                next({status: 400, message : 'We have already had the same user'})
            } else {
                // Формируем токен
                // Signing a token with 10 minutes of expiration
                var token = jwt.sign({
                    data:credentials
                }, config.backend.secretWord, { expiresIn: '1m' });
                console.log(token, 'Токенище днище');

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
//resp.json({email: credentials.login});

    //

    // TODO Send email to user with dataToken and date and another field

    // if (credentials.login){
    //
    //         console.log(_id, '_id');
    //         // Найдем по _id и вернем с "без = 0" пароля
    //         return User.findOne({_id}, {password: 0})
    // }

    // if (credentials.login && credentials.password){
    //     // --- НЕ ЗАВЕЛОСЬ =(((
    //     // Используем try/catch - т.к используем async/await
    //     //  try {
    //     //     await User.create(config); // т.к тут асинхронный код - исп. await
    //     // } catch (err){
    //     //     next(err); // Если ощибка - прокидываем ее дальше, возможно express ее перехватит
    //     // Мы не используем callback - т.к как испоьзуем async/await
    //     // }  --- НЕ ЗАВЕЛОСЬ =(((
    //
    //     User.create(credentials, (err, user) => {
    //         // Тут асинхронная операция
    //         if (err) {
    //             let {message} = err;
    //             next({status: 400, message})
    //         }
    //         ;
    //         // елси юзер успешно создан - передаем его на клиент
    //         if (user) {
    //             return resp.json(user);
    //         }
    //     })
    // } else {
    //     next({status: 400, message : 'You need have password and login'})
    // }
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
                console.log(1);
                if (user && user.password == password) {
                    console.log(2);

                    /** Преймущество токена в том,что его можно выдавать не только браузеру но и приложению
                     * Первый параметр - то что будем хэшировать
                     * Второй параметр - это ключ!
                     * */
                        // req.session.userId = user._id;
                        // resp.json(user);

                    const token = jwt.sign({_id: user._id}, config.backend.secretWord);
                    console.log(token);
                    resp.json(token);

                    /** Этот токен передается клиенту и при каждом обращении клиент должен его передавать серверу
                     * в виде заголовка или в другом виде, может хранить его в куках
                     * При обращении на закрытые роуты, можем написать middleware и читать у пользователя этот токен
                     * */

                } else {
                    console.log(3);
                    next({
                        status: 400,
                        message: 'Bad password or login'
                    })
                }
            }).catch(err => {
                console.log(4);
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
                next({status:400, message: err.message})
            } else if(credentials && !err) {
                console.log(credentials, 'credentials');
                resp.json({email: req.query.t, after: 2})
            }
        });

    } else {
        next({status:400, message: "you don not have normal token"})
    }

    // resp.json({email: req.query.t, after: 0})
}
