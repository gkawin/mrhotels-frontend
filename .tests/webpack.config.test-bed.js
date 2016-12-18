const Path = require('path')
const BASE = Path.resolve(__dirname, '..')
const webpack = require('webpack')
const createWebpackConfig = require('../node_modules/nwb/lib/createWebpackConfig')

const config = createWebpackConfig.default({},{})
const loaders = config.module.loaders

module.exports = {
  entry: 'babel!./.tests/test-bed-entry.js',
  module: { loaders },
  plugins: [
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/)
  ],
  devtool: 'eval-cheap-module-source-map',
  hot: false
}