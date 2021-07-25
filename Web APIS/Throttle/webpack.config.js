// https://www.cnblogs.com/leona-d/p/12312754.html
const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require
const path = requireFunc('path')
const HtmlWebpackPlugin = requireFunc('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-souce-map',
    entry: './index.js',
    devServer: {
        port: 8080,
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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}