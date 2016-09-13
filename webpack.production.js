const config = require('./webpack.config.js')
const webpack = require('webpack')

const CompressionPlugin = require('compression-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

config.plugins.push(
  new LodashModuleReplacementPlugin,
  new webpack.optimize.OccurrenceOrderPlugin,
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),

  // Helps minify React.js code and gets rid of warnings
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  }),

  new CompressionPlugin({
    asset: '[file]',
    algorithm: 'gzip',
    test: /\.js$|\.css$/,
    threshold: 10240,
    minRatio: 0.8
  })
)

module.exports = config
