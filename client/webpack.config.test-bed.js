process.env.NODE_ENV = 'test'

const path         = require('path')
const webpack      = require('webpack')

//resolve path files.
const BASE = path.resolve(__dirname, '..')

//export webpack configuration
module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: 'babel!./scripts/test-bed.entry.js',
  output: {
    path: path.join(BASE, 'build/test-assets'),
    filename: 'test.bundle.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  plugins: [
    // Enzyme
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/),
  ],
  hot: false,
}
