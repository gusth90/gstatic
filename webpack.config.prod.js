var path = require('path')
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
      { test: /\.pug$/, use: [{ loader: 'file-loader', options: { name: '[name].html' } }, { loader: 'pug-html-loader', options: { data: { uuid: uuid() } }}] },
      { test: /\.styl$/, use: [{ loader: 'file-loader', options: { name: '[name].css' } }, 'postcss-loader', 'stylus-loader'] }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static/' }]),
    new CleanWebpackPlugin('dist')
  ]
}