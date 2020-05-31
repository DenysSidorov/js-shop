const isProduction = process.argv.indexOf('-p') !== -1;
const prodMode = isProduction ? 'production' : 'development';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  // context: path.resolve(__dirname, './src'),
  entry: {
    // app: path.resolve(__dirname, './src/app')
    app: ['formdata-polyfill', path.resolve(__dirname, './src/app')] // entry point
    // common_css: [
    //   './styles/main',
    //   './styles/reset',
    //   './styles/helpers/font-awesome.less'
    // ] // global styles sets
  },
  output: {
    path: path.resolve(__dirname, './www/assets/'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/assets/'// for dev-mode

    // filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js',
    // chunkFilename: isProduction ? '[name].[hash].js' : '[id].js',
  },
  devServer: {
    inline: true,
    port: 3002,
    hot: true,
    contentBase: path.resolve(__dirname, './www/'),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', 'less', '.scss'],
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
      // {
      //   test: /\.css$/,
      //   loader: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        loader: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction
            }
          },
          'postcss-loader'
        ]
      }
      // css
      // {
      //   test: /\.css$/,
      //   // include: path.resolve(__dirname, 'src'),
      //   // use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      //   use: ExtractTextPlugin.extract({
      //     // exclude: /node_modules/,
      //     fallback: 'style-loader',
      //     // use: ['css-loader[contenthash]?sourceMap', 'postcss-loader'],
      //     use: ['css-loader?sourceMap', 'postcss-loader']
      //   })
      // },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'www/assets/'),
        path.resolve(__dirname, 'www/index.html')]
    }), // output will be removed before every build
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
    }),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, 'www/rd2hash/template.html'),
      template: path.resolve(__dirname, 'www/template.html'),
      // filename: path.resolve(__dirname, 'www/index.html'),
      filename: isProduction ? '../index.html' : './index.html',
      minify: false,
      alwaysWriteToDisk: true,
      excludeAssets: [/common_css.bundle.*.js/]
    }),
    new HtmlWebpackHardDiskPlugin({   // todo: move it to dev, adds index.html to root
      outputPath: path.resolve(__dirname, 'www')
    })
  ]
};
