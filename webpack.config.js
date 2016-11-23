const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  app  : path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

module.exports = {
  entry: PATHS.app + '/App.jsx',

  output: {
    path: PATHS.build,
    filename: 'app.[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('app.[hash].css')
  ]
}
