const path = require("path");
const webpack = require("webpack");
const htmlWebpack = require("html-webpack-plugin");
const htmlWebpackConfig = new htmlWebpack({
  template: path.join(__dirname, "client/index.html"),
  filename: "index.html",
  inject: "body"
})

module.exports = {
  entry: path.join(__dirname, "client/index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index_bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  },
  mode:"development",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  },
  plugins: [htmlWebpackConfig]
}