var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var app   = path.join(__dirname, 'src')
var build = path.join(__dirname, 'dist')

module.exports = {
  entry: app + '/index.jsx',
  output: {
    path: build,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: app, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: app + '/index.html',
      inject: 'body'
    })
  ]
}