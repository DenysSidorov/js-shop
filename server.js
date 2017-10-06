import path from 'path';
const S = path.resolve(__dirname, './app-server');
import express from 'express';
import assets from './app-server/assets.json';
// TODO https://scotch.io/tutorials/use-ejs-to-template-your-node-application
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
// function getValue(value, def){
//     if(value === 'undefined' || value === undefined || value === 0 || value === ''){
//         return def;
//     } else return value;
// }
mongoose.Promise = require('bluebird'); // Для асинхронного кода, а не колбэков которые по умолчанию
mongoose.connect(config.backend.database, {
    useMongoClient: true,
    reconnectTries: 30,
}, err => {
    if (err) throw err;
    console.log(`Mongo connected!`);
});

//Нужно запускать после подключения к базу, гарантия что не будет запросов  к базе, если соед с ней еще не установлено!
const app = express(); // Запуск приложения
app.disable('x-powered-by'); // Отключить определение, что это express
console.log(25);
/** Запуск приожения на порте*/
console.log(process.env.PORT, 'port');

app.listen(config.backend.port, (err)=>{
    if (err) throw err;
    console.log('Server listening on port ' + config.backend.port);
});
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/www/')));
app.use(morgan('tiny')); // Настройка логирования, см. документация на npmjs.com
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
// set the view engine to ejs
// app.engine('ejs', engine);
app.set('view engine', 'ejs');


/*TODO make async function*/
// var expiryDate = new Date( Date.now() + 3600000 ); // 1 hour
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


app.use('/api/goods' ,cors(), goodRoute);
app.use('/api/orders', cors(), orderRoute);
app.use('/api/auth', cors(), authRoute); // singin singup


// app.get('/test', cors(), checkToken, (req, resp)=>{ // check token in headers
//     resp.json('Success');
// });



// app.use('/api', checkToken,  userRoute); // get user route
// app.use(getUser);
// app.use('/api', checkToken,  pageRoute); // Use API if all normal

app.get('/', (req, res) => {
    res.render(path.join(__dirname+'/www/index.ejs'), {assets});
    // res.sendFile(path.join(__dirname+'/www/index.ejs'));
});

app.use(errorMiddleWare ); // Обработчик ошибок должен быть последним
// todo сделать на фронте таблицу с ошибками 500, 404
app.all('*',(req,resp)=> resp.status(404).json({message: "Resource not found, API-SHOP", type: 404}));


