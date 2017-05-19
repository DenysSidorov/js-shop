const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack'); // ставиться локально для того чтоб вытаскивать плагины и доп. инструменты
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // собирает все css в один файл
//const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
//const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');


// TODO Создать тестовые js, less, import less/css in js, и посмотреть как отображается // IN PROGRESS
// TODO для лучшего понимания - посмотреть Кантора   // IN PROGRESS

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Production state is ' + NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: ["webpack-dev-server/client"],
        app: ['./app.js', './startToo.js'], // можно собирать несколько файлов в один, точка входа - app
        startToo: './startToo.js', // другая точка входа
        vendor: ['react', 'react-dom'], // если вручную не писать './', а просто 'react'
        globalStyles: ['./less/test1'] // точка входа для стилей, она глобальная (не можем без js-точки - она пустая)
    },
    output: {
        path: path.resolve(__dirname, './www/assets'),
        filename: '[name].b.js', // точки входа
        chunkFilename: '[id].js', // только для require.ensure ajax подгрузке js
        library: '[name]',
        publicPath:  /* CDN link here */ '/assets/', // строка-шаблон в адрессе для картинок, скриптов полезна для CDN
    },

    resolve: {
        extensions: [ '.js', '.jsx', '.css', '.less'], // какие файлы ищет в модулях
    },
    module: {
        rules: [
            // https://www.npmjs.com/package/pug-loader - использование, описание
            {
                test:   /\.(jade|pug)$/,
                loader: "pug-loader"
            },
            // images in js/css like base64
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'url-loader?name=[path][name].[hash:6][ext]',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            },
            // js es6
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015', "es2016", "es2017",  'react'] },

                }],
            },
           //css
            {
                test: /\.css$/,
                //include: path.resolve(__dirname, 'src'),
                //use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
                loader: ExtractTextPlugin.extract({
                    exclude: /node_modules/,
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'postcss-loader']
                })
            },
            //less
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    exclude: /node_modules/,
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'less-loader', 'postcss-loader'],
                })
            }

            // Loaders for other file types can go here
        ],
    },
    // …
    plugins: [
        // Автоматически загружаемые модули
        // Модуль (значение) автоматически загружается, если идентификатор (ключ) используется в модуле в виде переменной
        // Содержимое модуля экспортируется в переменную с именем, соответствующим ключу
        new webpack.ProvidePlugin({
            // Делаем jQuery доступным глобально для не-AMD зависимостей, таких как Bootstrap
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.HotModuleReplacementPlugin(),
        //  Если в консоли при сборке были ошибkи - бандлы не будут собраны!
        new webpack.NoEmitOnErrorsPlugin(),
        // общие скрипты, которые использ в нескольких местах
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].b.js',  // сборка в файл commons.js
            minChunks: 2, // повторение боле чем n раз будет в commons.js
        }),
        // собирает все в один .css
        new ExtractTextPlugin({ filename: "[name].b.css", allChunks: true}),

        // передача env-переменных в js файлы https://habrahabr.ru/post/245991/
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        // postcss autoprefixer
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ],
    devServer: {
        host: "localhost", // default
        port: 8080, // default
        contentBase: path.resolve(__dirname, './www'), // отдает по умолчанию(можн указ люб папку), есди нет бандлов

    },
    // source-maps
    devtool: NODE_ENV == 'development' ?  "cheap-module-inline-source-map" : "source-map",

};
