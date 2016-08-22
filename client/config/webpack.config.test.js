process.env.NODE_ENV = 'test'

const path         = require('path')
const webpack      = require('webpack')

const webpackConfig = require('../config/webpack.config.dev')

//resolve path files.
const BASE = path.resolve(__dirname, '..')

//export webpack configuration
module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: './scripts/test.entry.js',
  output: {
    path: path.join(BASE, 'build', 'test-assets'),
    filename: 'test.bundle.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  module: webpackConfig.module,
  plugins: [
    // Enzyme
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/),
  ],
  hot: false,
}
