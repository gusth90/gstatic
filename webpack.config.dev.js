var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var uuid = require('uuid/v4')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, use: ['raw-loader', { loader: 'pug-html-loader', options: { data: { uuid: uuid() } }}] },
      { test: /\.styl$/, use: ['raw-loader', 'postcss-loader', 'stylus-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([{ from: 'static/' }]),
    new CleanWebpackPlugin('dist')
  ]
}