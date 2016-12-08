
const generateWebpackConfig = require('../config/generateWebpackConfig')

const webpackConfig = generateWebpackConfig({})

module.exports = {
  output: { },
  module: webpackConfig.module,
  postcss: webpackConfig.postcss,
  node: { fs: 'empty' },
}
