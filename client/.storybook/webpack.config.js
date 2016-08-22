
const webpackConfig = require('../config/webpack.config.dev')

module.exports = {
  output: {},
  module: webpackConfig.module,
  postcss: webpackConfig.postcss,
  node: {
    fs: 'empty'
  },
}
