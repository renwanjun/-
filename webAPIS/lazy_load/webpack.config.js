const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.[contentash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "图片懒加载",
    }),
  ],
  devServer: {
    port: 8082,
    contentBase: "./public",
    hot: true,
  },
};
