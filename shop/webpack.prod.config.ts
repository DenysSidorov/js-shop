import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { SubresourceIntegrityPlugin } from "webpack-subresource-integrity";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import {cssModuleRegExp, cssRegExp, fontRegExp, imageRegExp, sassModuleRegExp, sassRegExp} from './webpack.dev.config';
import checkENVs from './src/helpers/check-envs';
import webpack from 'webpack';

function getConfig(env = {} as any) {
  const isEnabledSRI = env.RD_SRI_ENABLED !== 'false';
  console.log('IS SRI ENABLED: ', isEnabledSRI);
  const config = {
    mode: "production",
    entry: "./src/app.tsx",
    output: {
      path: path.resolve(__dirname, "www/assets"),
      filename: "[name].[contenthash].js",
      chunkFilename: '[id].[contenthash].js',
      publicPath: "/assets/",
      crossOriginLoading: "anonymous"
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },

        {
          test: /\.less$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
            },
            // {
            //   loader: 'postcss-loader'
            // }
          ]
        },

        {
          test: sassRegExp,
          exclude: sassModuleRegExp,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
            },
            // {
            //   loader: 'postcss-loader'
            // }
          ]
        },
        {
          test: sassModuleRegExp,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: cssRegExp,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ],
          include: cssModuleRegExp
        },
        {
          test: cssRegExp,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader'
            }
          ],
          exclude: cssModuleRegExp
        },
        {
          test: imageRegExp,
          type: 'asset/resource'
        },
        {
          test: fontRegExp,
          type: 'asset/inline',
        },
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, "css-loader"],
        // },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: "asset/resource",
        // },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
      // new Dotenv(),
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: '../index.html'
      }),
      new webpack.EnvironmentPlugin({
        'PATH_API': env.API || '',
        'PATH_PORT': env.PORT || '',
        'PATH_HOSTNAME': env.hostname ? JSON.stringify(env.hostname) : '',
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        files: ['src']
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css"
      }),
      new SubresourceIntegrityPlugin({
        enabled: isEnabledSRI,
        hashFuncNames: ['sha256']
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress : {
            drop_console: true
          }
        }
      })],
    },
  };
  return config;
}


export default getConfig;
