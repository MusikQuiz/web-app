const config = require('./webpack.config.js')
const webpack = require('webpack')

config.plugins.push(new webpack.optimize.UglifyJsPlugin())

module.exports = config