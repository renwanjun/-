const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-souce-map',
    entry: './index.js',
    devServer: {
        port:8080,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }

}