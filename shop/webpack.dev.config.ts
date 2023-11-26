import path from 'path';
import webpack, {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackHardDiskPlugin from 'html-webpack-harddisk-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
export const tsJSXRegExp = /\.(ts|js)x?$/i;
export const sassRegExp = /\.s(a|c)ss$/;
export const sassModuleRegExp = /\.module.(s(a|c)ss)$/;
export const cssRegExp = /\.css$/;
export const cssModuleRegExp = /\.module\.css$/;
export const imageRegExp = /\.(png|svg|jpg|jpeg|gif)$/i;
export const fontRegExp = /\.(woff(2)?|eot|ttf|otf|svg|)$/;

function getConfig(env = {} as any) {
  const config = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'www/assets'),
      publicPath: '/assets/'
    },
    entry: './src/app.tsx',
    module: {
      rules: [
        {
          test: tsJSXRegExp,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        },
        {
          test: /\.less$/i,
          use: [
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: sassRegExp,
          exclude: sassModuleRegExp,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: sassModuleRegExp,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: '[local]___[hash:base64:5]'
                },
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: cssRegExp,
          include: cssModuleRegExp,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]___[hash:base64:5]'
                },
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: cssRegExp,
          exclude: cssModuleRegExp,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: imageRegExp,
          type: 'asset/resource'
        },
        {
          test: fontRegExp,
          type: 'asset/inline'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
      // new Dotenv(),
      new webpack.ProgressPlugin({}),
      new NodePolyfillPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          path.join(__dirname, 'www/assets/*.*'),
          path.join(__dirname, 'www/index.html')
        ],
        dangerouslyAllowCleanPatternsOutsideProject: true
      }),
      new webpack.EnvironmentPlugin({
        'PATH_API': env.API || '',
        'PATH_PORT': env.PORT || '',
        'PATH_HOSTNAME': env.hostname ? JSON.stringify(env.hostname) : '',
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: '../index.html',
        minify: false,
        alwaysWriteToDisk: true
      }),
      new HtmlWebpackHardDiskPlugin({
        outputPath: path.resolve(__dirname, 'www/assets/')
      }),
      // new webpack.HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js'],
        files: ['src']
      }),
      new StylelintPlugin({
        configFile: '.stylelintrc.json'
      })
    ],
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      https: true,
      // server: 'https',
      hot: true,
      // host: env.hostname ? env.hostname : 'Error reason in host name',
      static: path.join(__dirname, 'www'),
      port: 443,
      allowedHosts: 'all',
      open: {
        target: ['/mypage'],
        app: {
          name: 'Google Chrome',
          arguments: ['--incognito', '--new-window'],
        },
      },
    }
  };
  return config;
}

export default getConfig;
