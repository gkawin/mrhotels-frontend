
const path = require('path')
const development = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'entry.js'),
    vendor: ['jquery', 'lodash', 'react', 'react-dom', 'prop-types']
  },
  output: {
    filename: '[name].bundle.js',
    pathinfo: development
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
            plugins: ['transform-runtime', 'transform-class-properties']
          }
        }
      }
    ]
  },
  plugins: require('./webpack/plugins'),
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}
