const isProduction = process.argv.indexOf('-p') !== -1;
const prodMode = isProduction ? 'production' : 'development';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin'); // exclude js/css from finish version of index.html
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin'); // generate index.html in dev-mode
const confFront = require('./config');

console.log('Webpack mode is - ', prodMode);

function getConfig(env = {}) {
  const config = {
    // context: path.resolve(__dirname, './src'),
    entry: {
      main: ['webpack-dev-server/client'], // for dev mode
      app: ['@babel/polyfill', /*path.resolve(__dirname, 'src/index.js')*/ path.resolve(__dirname, 'src/app.js'), path.resolve(__dirname, 'src/vendor/startToo.js')],
      vendor: ['react', 'react-dom', 'jquery'],
      common_css: [path.resolve(__dirname, 'src/less/main.less'), path.resolve(__dirname, 'src/less/reset.less'), path.resolve(__dirname, 'src/less/font-awesome.less')]
      // common_css: ['./src/less/main', './src/less/reset', './src/less/font-awesome']
    },

    output: {
      path: path.resolve(__dirname, './www/assets'), // for bundle files
      filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js',
      chunkFilename: isProduction ? '[name].[hash].js' : '[id].js',
      // publicPath: isProduction ? '/assets/' : '/' // for dev-mode
      publicPath: isProduction ? '' : '/assets/', // for dev-mode
      library: '[name]'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', 'less', '.scss', 'sass']
    },
    module: {
      rules: [
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !isProduction
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        },
        {
          test: /\.css$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: !isProduction
              }
            },
            'postcss-loader'
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            }
          ]
        },

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
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 65000
              } // Convert images < 65k to base64 strings
            }
          ]
        },
        {
          test: /\.(svg|ttf|eot|woff|woff2)$/,
          loader: 'file-loader?name=../fonts/[name].[ext]'
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'www'),
      host: "127.0.0.1",
      port: confFront['FRONT_PORT'],
      historyApiFallback: true,
      https: true,
      hot: true,
      inline: true
    },
    node: {
      fs: 'empty',
      child_process: 'empty'
    },
    plugins: [
      new CleanWebpackPlugin(['www/assets/*.*']), // clean folder before  every bundling
      new CleanWebpackPlugin(['www/index.html']), // clean file before every bundling
      new webpack.NoEmitOnErrorsPlugin(),
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     // process.env.NODE_ENV in JavaScript
      //     'NODE_ENV': JSON.stringify(prodMode),
      //     // 'PATH_ENGAGE': env.ENGAGE ? JSON.stringify(env.ENGAGE) : '',
      //     // 'PATH_API': env.API ? JSON.stringify(env.API) : '',
      //     // 'PATH_SERVICE': env.SERVICE ? JSON.stringify(env.SERVICE) : '',
      //     // 'PATH_PUBLISH': env.PUBLISH ? JSON.stringify(env.PUBLISH) : '',
      //     // 'PATH_REDIRECTION_LINK': env.DEFAULT_REDIRECTION ? JSON.stringify(env.DEFAULT_REDIRECTION) : '',
      //     // 'PATH_AUTH': env.AUTH ? JSON.stringify(env.AUTH) : ''
      //   }
      // }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ]
        }
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'www/index2.html'),
        filename: 'index.html',
        minify: false,
        alwaysWriteToDisk: true,
        excludeAssets: [/main.bundle.*.js/]
        // output: path
      }),
      new HtmlWebpackExcludeAssetsPlugin(),
      new HtmlWebpackHardDiskPlugin({
        outputPath: path.resolve(__dirname, 'www')
      })
    ],
    devtool: 'source-map',
    optimization: {minimizer: []}
  };

  if (isProduction) {

    config.devtool = false;

    const ugly = new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          drop_console: true
        },
        sourceMap: false
      }
    });

    config.optimization.minimizer.push(ugly);

  }

  return config;
}

module.exports = env => {
  return getConfig(env);
};
