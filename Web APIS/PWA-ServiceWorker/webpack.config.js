const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin=require('workbox-webpack-plugin')

const { NODE_ENV } = process.env
module.exports = {
    mode: NODE_ENV == 'production' ? 'production' : 'development',
    devtool: 'inline-souce-map',
    entry: './index.js',
    devServer: {
        port: 8080,
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: '渐进式网络应用程序'
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

}