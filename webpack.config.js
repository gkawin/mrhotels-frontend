
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
      require('./webpack/moduleRulesBabel')
    ]
  },
  plugins: require('./webpack/plugins'),
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}
