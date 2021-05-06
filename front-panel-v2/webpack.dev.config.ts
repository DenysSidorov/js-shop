import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackHardDiskPlugin from 'html-webpack-harddisk-plugin';

export const tsJSXRegExp = /\.(ts|js)x?$/i;
export const sassRegExp = /\.s(a|c)ss$/;
export const sassModuleRegExp = /\.module.(s(a|c)ss)$/;
export const cssRegExp = /\.css$/;
export const cssModuleRegExp = /\.module\.css$/;
export const imageRegExp = /\.(png|svg|jpg|jpeg|gif)$/i;
export const fontRegExp = /\.(woff(2)?|eot|ttf|otf|svg|)$/;

const config = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "www/assets"),
        publicPath: '/assets/'
    },
    entry: './src/index.tsx',
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
                            modules: true,
                            sourceMap: true
                        }
                    },
                    // 'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: cssRegExp,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: cssModuleRegExp
            },
            {
                test: cssRegExp,
                use: [
                    'style-loader',
                    'css-loader'
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
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
        // 'www/assets/*.*', 'www/index.html'
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join(__dirname, 'www/assets/*.*'),
                path.join(__dirname, 'www/index.html')
            ],
            dangerouslyAllowCleanPatternsOutsideProject: true,
            // cleanStaleWebpackAssets: false,
            // dry: true
        }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, 'www/template.html'),
            // filename: 'index.html',
            // template: 'src/index.html'
            template: 'src/index.html',
            filename: '../index.html',
            minify: false,
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHardDiskPlugin({
            outputPath: path.resolve(__dirname, 'www/assets/')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx']
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    }
};

export default config;
