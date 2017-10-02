import path from 'path';
const S = path.resolve(__dirname, './app-server');
import express from 'express';
// https://www.npmjs.com/package/cors
var cors = require('cors');
// MongoDb ORM
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParse from 'body-parser';
//  Логирование
import morgan from 'morgan';


// TODO download CORS-middleware and require it here

import config from './config/index'; // Конфигурация
import authRoute from './app-server/routes/auth';
import userRoute from './app-server/shop/routes/user';
import pageRoute from './app-server/routes/page';
import goodRoute from './app-server/shop/routes/goodRoute';
import orderRoute from './app-server/shop/routes/orderRoute';


import errorMiddleWare from './app-server/middlewares/errors';

import getUser from './app-server/shop/middlewares/getUser'; // Найти пользователя по токену
import checkToken from './app-server/middlewares/checkToken'; // Проверка наличия токена



// app.use(cors() // for all app
/** Подключение к базе данных mongodb*/
mongoose.Promise = require('bluebird'); // Для асинхронного кода, а не колбэков которые по умолчанию
mongoose.connect(process.env.MONGODB_URI, {}, err => {
    if (err) throw err;
    console.log(`Mongo connected!`);
});

//Нужно запускать после подключения к базу, гарантия что не будет запросов  к базе, если соед с ней еще не установлено!
const app = express(); // Запуск приложения
app.disable('x-powered-by'); // Отключить определение, что это express
console.log(23);
/** Запуск приожения на порте*/
app.listen(process.env.PORT || 3000, config.backend.domain, config.backend.maxConnects, (err)=>{
    if (err) throw err;
    console.log('Server listening on port ' + process.env.PORT || 3000 );
});

app.use(morgan('tiny')); // Настройка логирования, см. документация на npmjs.com
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

/*TODO make async function*/
var expiryDate = new Date( Date.now() + 3600000 ); // 1 hour
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.backend.secretWord,
//     // TODO проверить защиту кук
//     // cookie: { secure: true,
//     //     httpOnly: true,
//     //     domain: 'example.com',
//     //     path: 'foo/bar',
//     //     expires: expiryDate
//     // }
// }));

app.get('/', (req, resp)=> {resp.status(200).json({'get':200})});
app.use('/goods' ,cors(), goodRoute);
app.use('/orders', cors(), orderRoute);
app.use('/api', cors(), authRoute); // singin singup


// app.get('/test', cors(), checkToken, (req, resp)=>{ // check token in headers
//     resp.json('Success');
// });



app.use('/api', checkToken,  userRoute); // get user route
// app.use(getUser);
app.use('/api', checkToken,  pageRoute); // Use API if all normal



app.use(errorMiddleWare ); // Обработчик ошибок должен быть последним
// todo сделать на фронте таблицу с ошибками 500, 404
app.all('*',(req,resp)=> resp.status(404).json({message: "Resource not found", type: 404}));


