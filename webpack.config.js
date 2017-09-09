
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const development = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'App.js')
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
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/template', 'index.html')
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}
