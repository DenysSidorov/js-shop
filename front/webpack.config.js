const isProduction = process.argv.indexOf('-p') !== -1;
const prodMode = isProduction ? 'production' : 'development';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const JavaScriptObfuscator = require('webpack-obfuscator');
// const AssetsPlugin = require('assets-webpack-plugin'); // creates json with dependencies
const checkENVs = require('./src/helpers/check-envs');

console.log('Webpack mode is - ', prodMode);

function getConfig(env = {}) {
  console.log(env);
  const config = {
    entry: {
      app: ['formdata-polyfill', path.resolve(__dirname, './src/app.tsx')],
      common_css: [
        path.resolve(__dirname, './src/styles/main'),
        path.resolve(__dirname, './src/styles/reset'),
        path.resolve(__dirname, './src/styles/helpers/font-awesome.less')
      ]
    },
    output: {
      path: path.resolve(__dirname, './www/assets/'),
      chunkFilename: isProduction ? '[name].[hash].js' : '[id].js',
      filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js',
      publicPath: '/assets/' // for dev-mode

      // filename: '[name].bundle.[hash].js',
    },
    devServer: {
      inline: true,
      port: 3002,
      hot: true,
      contentBase: path.resolve(__dirname, './www/'),
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', 'less', '.scss', '.ts', '.tsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom' // react-hot-reloading for new React features
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: '/node_modules/',
          use: 'ts-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
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
          test: /\.s(a|c)ss$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
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
          test: /\.less$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction
              }
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                sourceMap: !isProduction
              }
            }
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
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          path.resolve(__dirname, 'www/assets/'),
          path.resolve(__dirname, 'www/index.html')
        ]
      }), // output will be removed before every build
      new webpack.DefinePlugin({
        'process.env': {
          // process.env.NODE_ENV in JavaScript
          NODE_ENV: JSON.stringify(prodMode)
        }
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
      }),
      // new AssetsPlugin({
      //   filename: 'assets.json',
      //   path: `${__dirname}/www/assets`
      // }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'www/template.html'),
        filename: isProduction ? '../index.html' : './index.html',
        minify: false,
        alwaysWriteToDisk: true,
        excludeAssets: [/common_css.bundle.*.js/, /app.*.css/]
      }),
      new HtmlWebpackExcludeAssetsPlugin(),
      new HtmlWebpackHardDiskPlugin({
        // todo: move it to dev, adds index.html to root
        outputPath: path.resolve(__dirname, 'www')
      })
    ],
    devtool: 'source-map',
    optimization: {
      noEmitOnErrors: true,
      minimizer: []
    }
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

    // const obfuscator = new JavaScriptObfuscator({
    //   compact: true,
    //   identifierNamesGenerator: 'hexadecimal'
    // }, []);

    config.optimization.minimizer.push(ugly);
    // config.plugins.push(obfuscator);
  }

  return config;
}

module.exports = (env) => {
  checkENVs(env, prodMode);
  return getConfig(env);
};
