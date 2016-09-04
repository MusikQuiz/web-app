const config = require('./webpack.config.js')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
  new CompressionPlugin({
    asset: '[file]',
    algorithm: 'gzip',
    test: /\.js$|\.css$/,
    threshold: 10240,
    minRatio: 0.8
  })
)

module.exports = config