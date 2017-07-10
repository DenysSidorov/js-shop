import path from 'path';
const S = path.resolve(__dirname, './app-server');
import express from 'express';
import mongoose from 'mongoose'; // MongoDb ORM
import session from 'express-session';
import bodyParse from 'body-parser';
import morgan from 'morgan'; //  Логирование

import config from './config/index';
// import config from './app-server/config'; // Конфигурация
import authRoute from './app-server/routes/auth';
import userRoute from './app-server/routes/user';
import pageRoute from './app-server/routes/page';
import errorMiddleWare from './app-server/middlewares/errors';

import getUser from './app-server/middlewares/getUser'; // Проверка налисия токена
import checkToken from './app-server/middlewares/checkToken'; // Проверка налисия токена


const app = express(); // Запуск приложения

/** Подключение к базе данных mongodb*/
mongoose.Promise = require('bluebird'); // Для асинхронного кода
mongoose.connect(config.backend.database, {}, err => {
    if (err) throw err;
    console.log(`Mongo connected!`);
});

/** Запуск приожения на порте*/
app.listen(config.backend.port, (err)=>{
    if (err) throw err;
    console.log('Server listening on port ' + config.backend.port );
});

app.use(morgan('tiny')); // Настройка логирования, см. документация на npmjs.com

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extend: true}));

/*TODO make async function*/ app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.backend.secretWord
}));

app.use('/api', authRoute); // singin singup

app.use('/api', checkToken,  userRoute); // get user route
app.use(getUser);
app.use('/api', checkToken,  pageRoute); //
app.get('/test', checkToken, (req, resp)=>{ // check token in headers
    resp.json('Success');
});


app.use(errorMiddleWare ); // Обработчик ошибок должен быть последним



