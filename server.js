import path from "path";
import express from "express";
import assets from "./app-server/assets.json";
import mongoose from "mongoose";
import bodyParse from "body-parser";
import morgan from "morgan";
import random from "./src/components/shop/helpers/lib/randomArrElement";
import Good from "./app-server/shop/models/good";
import siteOpener from "./app-server/helper/site-opener";
import config from "./config/index";
import authRoute from "./app-server/routes/auth";
import userRoute from "./app-server/shop/routes/user";
import goodRoute from "./app-server/shop/routes/goodRoute";
import orderRoute from "./app-server/shop/routes/orderRoute";
import errorMiddleWare from "./app-server/middlewares/errors";
const S = path.resolve(__dirname, './app-server');
// TODO https://scotch.io/tutorials/use-ejs-to-template-your-node-application
// https://www.npmjs.com/package/cors
var cors = require('cors');
// MongoDb ORM
//  Логирование

// TODO download CORS-middleware and require it here
//site opener
// Конфигурация
// Найти пользователя по токену
// Проверка наличия токена


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


/** Запуск приожения на порте*/
console.log(process.env.PORT, 'port');

app.listen(config.backend.port, (err)=> {
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


app.use('/api/goods', cors(), goodRoute);
app.use('/api/orders', cors(), orderRoute);
app.use('/api/', cors(), authRoute); // singin singup
app.use('/api/users', userRoute);
app.use('/start', (req, resp, next)=> {
    console.log('START');
    var name = {}
    var count = 0;
    var interval = setInterval(async()=> {
        if (count > 200){
            clearInterval(interval)
        }
        var id = mongoose.Types.ObjectId();
        var tempName = {
            "_id": id,
            "name": random(['Belveta', 'Nuri', 'Chikago', 'Nice', 'Zelveta', 'Hori', 'Pint', 'CLS1', 'Nektar', 'Geltrino']),
            "model": random(['3000', 'Summer', 'Superstar', 'BoniClayd', 'Nice', 'Davinchi', 'Surinami', 'Eventador', 'Harmony', 'Colt']),
            "size": [random([28, 32, 30, 34, 36, 38, 40, 42]), random([38, 34])],
            "comments": [
                {
                    "_id": 1,
                    "message": "Хороший практичный портфель, купил себе и очень остался доволен!"
                },
                {
                    "_id": 2,
                    "message": "Качество нормальное, взял ездить на работу, уже пол года служит. Все отлично"
                }
            ],
            "price": random([680, 809, 700, 1100, 2300, 500, 1300, 456, 6050, 305, 780, 670, 950, 900, 800, 890]),
            "photo": [
                random(["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png", "/8.png", "/9.png", "/10.png", "/11.png", "/12.png", "/13.png", "/14.png", "/15.png", "/16.png", "/17.png", "/18.png", "/19.png"]),
                "/7.png",
                "/8.png",
                "/9.png"
            ],
            "count": random([1, 2, 3, 4, 5, 22]),
            "views": random([4, 66, 45, 12, 67, 89, 56, 4, 54, 76, 8, 897, 3, 45, 34, 213, 45, 78, 34, 23, 45, 34, 23, 5, 27, 73, 8, 5869, 36, 26]),
            "code": "68000",
            "desc-short": "Мужской портфель, подходит как для школы  и для работы",
            "desc-full": "Портфель на все случаи жизни. Удобный, легкий, вместительный. Мужской портфель, подходит как для школы та и для работы",
            "tags": [random([
                "портфель",
                "черный",
                "мужской",
                "город",
                "школа",
                "работа",
                "спорт"
            ])],
            "sail": random([5, 10, 15, 20]),
            "isNew": random([true, false]),
            "category": [random(["мужской", "городской", "школа", 'детский', 'практичный', 'женский'])],
            "isExists": random([true, false]),
            "isNewGood": random([true, false]),
            "producer": random(["China", "Ukraine", "Italy", "Germany", "France"])
        };
        try {
            name = await Good.create(
                //{name: name}
                tempName
            );
            console.log(name, 'after');
            console.log(name, 'Name');
            count++
            resp.json(name);
        } catch ({message}) {
            console.log(tempName, message, ' | message');
            return next({
                status: 400,
                message
            });
        }
    }, 300)

})
// app.get('/test', cors(), checkToken, (req, resp)=>{ // check token in headers
//     resp.json('Success');
// });


// app.use('/api', checkToken,  userRoute); // get user route

// app.use('/api', checkToken,  pageRoute); // Use API if all normal

app.get('*', (req, res) => {
    res.render(path.join(__dirname + '/www/index.ejs'), {assets});
    // res.sendFile(path.join(__dirname+'/www/index.ejs'));
});

app.use(errorMiddleWare); // Обработчик ошибок должен быть последним
// todo сделать на фронте таблицу с ошибками 500, 404
app.all('*', (req, resp)=> resp.status(404).json({message: "Resource not found, API-SHOP", type: 404}));

//site-opener
siteOpener();

export default app;

