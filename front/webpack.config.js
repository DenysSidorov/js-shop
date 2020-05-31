const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './www/assets'),
    // path: path.join(__dirname, '/dist'),
    filename: 'app_bin.js'
  },
  devServer: {
    inline: true,
    port: 3002,
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom' // react-hot-reloading for new React features
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // query: {
        //   presets: ['@babel/preset-env', "@babel/preset-react"],
        // },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // output will be removed before every build
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
