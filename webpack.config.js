const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // собирает все css в один файл
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
        publicPath: '/assets', // строка-шаблон в адрессе для картинок, скриптов полезна для CDN
    },
    module: {
        rules: [
            // js es6
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015']},
                }],
            },
           // css
            {
                test: /\.css$/,
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.b.js',  // сборка в файл commons.js
            minChunks: 2, // повторение боле чем n раз будет в commons.js
        }),
        new ExtractTextPlugin("[name].css")
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './src'),  // TODO не запускается - посмотреть
    },

};