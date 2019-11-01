import path from "path";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParse from "body-parser";
import fs from "fs";
var cors = require('cors');

var cluster = require('cluster');
var https = require('https');
var http = require('http');
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
import assets from "./app-server/assets.json";
import siteOpener from "./app-server/helper/site-opener";
import config from "./config/index";
import authRoute from "./app-server/routes/auth";
import userRoute from "./app-server/shop/routes/user";
import goodRoute from "./app-server/shop/routes/goodRoute";
import orderRoute from "./app-server/shop/routes/orderRoute";
import errorMiddleWare from "./app-server/middlewares/errors";
import rdRoute from "./app-server/shop/routes/rdRoute";
import createGoods from "./app-server/shop/routes/createGoods";

// process.env.NODE_ENV = 'production';

var privateKey  = fs.readFileSync('app-server/sslcert/private.key', 'utf8');
var certificate = fs.readFileSync('app-server/sslcert/certificate.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// app.use(cors() // for all app

/** Подключение к базе данных mongodb*/
// function getValue(value, def){
//     if(value === 'undefined' || value === undefined || value === 0 || value === ''){
//         return def;
//     } else return value;
// }

console.log('DEV MODE = ', process.env.NODE_ENV);

mongoose.Promise = require('bluebird'); // Для асинхронного кода, а не колбэков которые по умолчанию
if (process.env.NODE_ENV == 'development') {
  mongoose.set('debug', true); // выводить в консоль все запросы
}

mongoose.connect(config.backend.database, {
  // useMongoClient: true,
  reconnectTries: 30,
}, err => {
  if (err) throw err;
  console.log(`Mongo connected!`);
});

// if (cluster.isMaster) {
//
//   var cpuCount = require('os').cpus().length;
//
//   for (var i = 0; i < cpuCount; i += 1) {
//     cluster.schedulingPolicy = cluster.SCHED_NONE;
//     cluster.fork();
//   }
//
//   cluster.on('exit', function (worker) {
//     console.log('Worker ' + worker.id + ' died :(');
//     cluster.fork();
//   });
//
// } else {


//Нужно запускать после подключения к базе, гарантия что не будет запросов  к базе, если соед с ней еще не установлено!
const app = express(); // Запуск приложения
app.use(redirectToHTTPS([`/localhost:${process.env.PORT}/`] /*, ignoreRoutes*/ ));
app.disable('x-powered-by'); // Отключить определение, что это express

// app.use(require('prerender-node'));
app.use(require('prerender-node').set('prerenderToken', 'nVFIY5P2oHmWGlW1r6B3'));

/** Запуск приожения на порте*/
console.log(process.env.PORT, 'port');

// app.listen(config.backend.port, (err) => {
//   if (err) throw err;
//   console.log('Server listening on port ' + config.backend.port);
// });

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

// app.use('/api/rd', cors(), rdRoute);
app.use('/api/goods', cors(), goodRoute);
app.use('/api/orders', cors(), orderRoute);
app.use('/api/', cors(), authRoute); // singin singup
app.use('/api/users', userRoute);
// app.use('/start', cors(), createGoods);
// app.use('/api', checkToken,  userRoute); // get user route
// app.use('/api', checkToken,  pageRoute); // Use API if all normal

// app.get('/', (req, res)=>{
//   res.render(path.join(__dirname + '/www/main.ejs'));
// });

app.get('*', (req, res) => {
  res.render(path.join(__dirname + '/www/index.ejs'), {assets});
  // res.sendFile(path.join(__dirname+'/www/index.ejs'));
});


app.use(errorMiddleWare); // Обработчик ошибок должен быть последним
// todo сделать на фронте таблицу с ошибками 500, 404
app.all('*', (req, resp) => resp.status(404).json({
  message: "Resource not found, API-SHOP",
  type: 404
}));

//site-opener
// siteOpener();


//************************* GARBAGE ***********************************
// Для работы с garbage collector запустите проект с параметрами:
// node --nouse-idle-notification --expose-gc app.js

//   var gcInterval;
//
//   function init() {
//     gcInterval = setInterval(function () {
//       gcDo();
//     }, 60000);
//   }
//
//   function gcDo() {
//     global.gc();
//     clearInterval(gcInterval);
//     init();
//   }
//
//   init();
//************************************************************
// }

process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
});

// export default app;

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


app.listen(config.backend.port, (err) => {
  if (err) throw err;
  console.log('Server listening on port ' + config.backend.port);
});

// httpServer.listen(8080);
// httpsServer.listen(config.backend.port, (err) => {
//   if (err) throw err;
//   console.log('Server listening on port ' + config.backend.port);
// }  );
// + поменять urlApi

