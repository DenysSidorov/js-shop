const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack'); // ставиться локально для того чтоб вытаскивать плагины и доп. инструменты
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // собирает все css в один файл
var AssetsPlugin = require('assets-webpack-plugin'); // создает json с зависимостями
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Чистит папку с бандлами
//const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const NODE_ENV = process.env.NODE_ENV || 'development';



// Реагируем на флаг -p
var productionArg = (process.argv.indexOf('-p') != -1 ? true : false);
var inProduction = (productionArg ? 'production' : 'development');
console.log('Production state is ' + inProduction.toUpperCase());


// Добавление hash если режим production
function addHash(template, hash) {
    return NODE_ENV == 'production' ?
        template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
}

var config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: ["webpack-dev-server/client"],
        app: ['./app.js', './startToo.js'], // можно собирать несколько файлов в один, точка входа - app
        startToo: './startToo.js', // другая точка входа
        vendor: ['react', 'react-dom', 'jquery'], // если вручную не писать './', а просто 'react'
        common_css: ['./less/main', './less/reset', './less/font-awesome'] // точка входа для стилей, она глобальная (не можем без js-точки - она пустая)
    },
    output: {
        path: path.resolve(__dirname, './www/assets'),
        filename: addHash('[name].b.js', 'chunkhash'), /*'[name].[chunkhash].b.js'*/  // точки входа
        chunkFilename: addHash('[id].js', 'chunkhash'), /*'[id].[chunkhash].js',*/  // только для require.ensure ajax подгрузке js
        library: '[name]',
        publicPath: /* CDN link here */ '/assets/', // строка-шаблон в адрессе для картинок, скриптов полезна для CDN
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less'], // какие файлы ищет в модулях
    },

    module: {
        rules: [

            // https://www.npmjs.com/package/pug-loader - использование, описание
            {
                test: /\.(jade|pug)$/,
                loader: "pug-loader"
            },
            // base64 loader
            {
                test: /\.(png|jpg|gif)$/,
                loader: addHash('url-loader?limit=65000&name=../img/[name].[ext]', 'hash:6')
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: addHash('file-loader?name=../fonts/[name].[ext]', 'hash:6')
            },
            // base64 - images in js/css like base64
            // {
            //     test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
            //     include: path.resolve(__dirname, 'src'),
            //     use: [{
            //         /*'url-loader?name=[path][name].[hash:6][ext]',*/
            //         loader: addHash('url-loader?name=../img/[name].[ext]', 'hash:6'),
            //         options: {limit: 10000} // Convert images < 10k to base64 strings
            //     }]
            // },

            // fonts
            // { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=../fonts/[name].[ext]' },
            // { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=../fonts/[name].[ext]' },
            // { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=../fonts/[name].[ext]' },
            // { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=./fonts/[name].[ext]' },
            // { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=../fonts/[name].[ext]' },
            // { test: /\.ttf$/, loader: 'url-loader?limit=65000&name=../fonts/[name].[ext]' },

            // js es6
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015', "es2016", "es2017", 'react']},

                }],
            },
            //css
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                //use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
                use: ExtractTextPlugin.extract({
                    // exclude: /node_modules/,
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'postcss-loader']
                })
            },
            //less
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    // exclude: /node_modules/,
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'less-loader', 'postcss-loader'],
                })
            }

            // Loaders for other file types can go here
        ],
    },

    plugins: [
        // передача env-переменных в js файлы https://habrahabr.ru/post/245991/
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            'NODE_ENV': JSON.stringify('production')
        }),

        // Автоматически загружаемые модули
        // Модуль (значение) автоматически загружается, если идентификатор (ключ) используется в модуле в виде переменной
        // Содержимое модуля экспортируется в переменную с именем, соответствующим ключу
        // https://habrahabr.ru/post/274385/
        new webpack.ProvidePlugin({
            // Делаем jQuery доступным глобально для не-AMD зависимостей, таких как Bootstrap
            $: 'jquery',
            d: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        //  Если в консоли при сборке были ошибkи - бандлы не будут собраны!
        new webpack.NoEmitOnErrorsPlugin(),
        // общие скрипты, которые использ в нескольких местах
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: addHash('[name].b.js', 'hash'), /*'[name].[hash].b.js',*/  // сборка в файл commons.js
            minChunks: 2, // повторение боле чем n раз будет в commons.js
        }),
        // собирает все в один .css
        new ExtractTextPlugin({
            filename: addHash('[name].b.css', 'contenthash'), /*"[name].[contenthash].b.css",*/
            allChunks: true
        }),
        // postcss autoprefixer
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        }),
        // генерит json со всеми зависямостями
        // если html всегда статичен (SPA), можно использовать другой плагин(HtmlWebpackPlugin), который сам создает
        // index.html с уже подключенными бандлами
        // https://www.youtube.com/watch?v=kxxFQZx3KOk
        new AssetsPlugin({
            filename: 'assets.json',
            path: __dirname + '/app-server', // где его хранить

        })
    ],
    devServer: {
        hot: true,
        // enable HMR on the server
        host: "localhost", // default
        port: 8090, // default
        contentBase: path.join(__dirname, 'www'), // отдает по умолчанию(можн указ люб папку), есди нет бандлов
        proxy: [{
            path: '*',
            target: 'http://localhost:3000',
        }]
    },
    // source-maps
    devtool: "source-map"  //inProduction ? "source-map" : "cheap-module-inline-source-map",
};

// Если продакшн - чистим консоль, код, папки и т.д
// isProduction
if (false/*false*/) {
    // the path(s) that should be cleaned
    let pathsToClean = [
        path.resolve(__dirname, './www/assets/*')
    ]

// the clean options to use
    let cleanOptions = {
        //root: '/',
        exclude: ['shared.js'],
        verbose: inProduction === 'production', // clean console.log
        dry: false, // просто эмулирует удаление
    }
    // очистка папки https://github.com/johnagan/clean-webpack-plugin
    var cleanPlugin = new CleanWebpackPlugin(pathsToClean, cleanOptions);
    config.plugins.push(cleanPlugin);
}

module.exports = config;





// Настройка для Node EsLint

// npm i --save-dev eslint - проверка кода
// npm i --save-dev eslint-config-airbnb - конфиг для eslint (с react)
// eslint-plugin-jsx-a11y   -  для поддержки jsx
// eslint-plugin-react - для поддержки react
// eslint-plugin-import  - дополнительная зависимость чтоб небыло конфликтов, т.к при уст. был warning
// npm i --save-dev eslint-config-prettier   отключает сторонние конфиги и правила, применяя только основные


// "eslintConfig": {
//     "extends": "airbnb"
// }