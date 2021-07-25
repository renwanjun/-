
const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    context:path.resolve(__dirname),
    entry:'./src/index.js',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name]_[contenthash].js',
        clean:true
    }
}