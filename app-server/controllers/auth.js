import User from '../models/user';
import jwt from 'jsonwebtoken'; // Генерация токена
import config from '../config/index';

export const singup = (req, resp, next) => {
    let credentials = req.body; // Вытащим данные от юзера из формы.
    console.log(credentials, 'credentials');
    let user;

    // --- НЕ ЗАВЕЛОСЬ =(((
    // Используем try/catch - т.к используем async/await
    //  try {
    //     await User.create(credentials); // т.к тут асинхронный код - исп. await
    // } catch (err){
    //     next(err); // Если ощибка - прокидываем ее дальше, возможно express ее перехватит
    // Мы не используем callback - т.к как испоьзуем async/await
    // }  --- НЕ ЗАВЕЛОСЬ =(((

    User.create(credentials, (err, user) => {
        // Тут асинхронная операция
        if (err) {
            let {message} = err;
            next({status: 400, message})
        };
        // Если юзера нашли - отправим его на клиент
        if (user) {
            return resp.json(user);
        }
    })

}

export const singin = async(req, resp, next) => {

    // Получим наши данные
    const {login, password} = req.body;
    // Найдем нашего юзера в базе
    const user = User.findOne({login})
        .then(user => {
            if (user.password == password) {


                /** Преймущество токена в том,что его можно выдавать не только браузеру но и приложению
                 * Первый параметр - то что будем хэшировать
                 * Второй параметр - это ключ!
                 * */
                // req.session.userId = user._id;
                // resp.json(user);

                const token = jwt.sign({_id: user._id}, config.secret);
                console.log(token);
                resp.json(token);

                /** Этот токен передается клиенту и при каждом обращении клиент должен его передавать серверу
                 * в виде заголовка или в другом виде, может хранить его в куках
                 * При обращении на закрытые роуты, можем написать middleware и читать у пользователя этот токен
                 * */

            } else {
                next({
                    status: 400,
                    message: 'Bad credentials'
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
}
