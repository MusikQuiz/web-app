const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app  : path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  entry: PATHS.app + '/index.jsx',

  output: {
    path: PATHS.build,
    filename: 'app.[hash].js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      inject: 'body'
    })
  ]
}
