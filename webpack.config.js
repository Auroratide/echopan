const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = [ {
  name: 'client',
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist', 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [ {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [ {
        loader: 'ts-loader'
      } ]
    }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    } ]
  },
  plugins: [
    new CopyPlugin([ {
      from: path.join(__dirname, 'public'),
      to: path.join(__dirname, 'dist', 'public')
    } ])
  ]
} ]