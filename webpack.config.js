
const path = require('path')
const moduleRulesCommon = require('./webpack/moduleRulesCommon')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const moduleAliases = require('./webpack/moduleAliases')
const development = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'entry.js'),
    vendor: [ 'jquery', 'lodash', 'react', 'react-dom', 'prop-types' ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'mh-design$': require.resolve('./src/design') }
    )
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
      ...moduleRulesBabel,
      ...moduleRulesCommon({ css: false })
    ]
  },
  plugins: require('./webpack/plugins'),
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}
