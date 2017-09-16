
const path = require('path')
const moduleRulesCommon = require('./webpack/moduleRulesCommon')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const development = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'entry.js'),
    vendor: ['jquery', 'lodash', 'react', 'react-dom', 'prop-types']
  },
  resolve: require('./webpack/resolve'),
  output: {
    filename: '[name].bundle.js',
    pathinfo: development
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      ...moduleRulesCommon({ css: false }),
      ...moduleRulesBabel()
    ]
  },
  plugins: require('./webpack/plugins'),
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}
