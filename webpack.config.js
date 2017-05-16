console.log(5);

const path = require('path');
const webpack = require('webpack'); // ставиться локально для того чтоб вытаскивать плагины и доп. инструменты
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // собирает все css в один файл
// TODO postcss autoprefixer
// TODO devServer


// TODO Создать тестовые js, less, import less/css in js, и посмотреть как отображается // IN PROGRESS
// TODO для лучшего понимания - посмотреть Кантора   // IN PROGRESS

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Production state is ' + NODE_ENV);

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: ['./app.js', './startToo.js'], // можно собирать несколько файлов в один, точка входа - app
        startToo: './startToo.js', // другая точка входа
        vendor: ['react', 'react-dom'], // если вручную не писать './', а просто 'react'
    },
    output: {
        path: path.resolve(__dirname, './www'),
        filename: '[name].b.js',
        publicPath:  /* CDN link here */ '/www/', // строка-шаблон в адрессе для картинок, скриптов полезна для CDN
    },

    resolve: {
        extensions: [ '.js', '.jsx', '.css', '.less'], // какие файлы ищет модулях
    },
    module: {
        rules: [
            // images in js/css like base64

            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'url-loader',
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
           // css
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                loader: ExtractTextPlugin.extract({
                    exclude: /node_modules/,
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            // less
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    exclude: /node_modules/,
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!less-loader'
                })
            }

            // Loaders for other file types can go here
        ],
    },
    // …
    plugins: [
        //  Если в консоли при сборке были ошиби - бандлы не будут собраны!
        new webpack.NoEmitOnErrorsPlugin(),
        // общие скрипты, которые использ в нескольких местах
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].b.js',  // сборка в файл commons.js
            minChunks: 2, // повторение боле чем n раз будет в commons.js
        }),
        // собирает все в один .css
        new ExtractTextPlugin("[name].b.css"),

        // передача env-переменных в js файлы https://habrahabr.ru/post/245991/
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './www'),
    },
    // source-maps
    devtool: NODE_ENV == 'development' ?  "cheap-module-inline-source-map" : false,

};
