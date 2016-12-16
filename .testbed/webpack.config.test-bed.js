const Path = require('path')
const BASE = Path.resolve(__dirname, '..')
const webpack = require('webpack')

const config = {
  entry: 'babel!./.testbed/test-bed.entry.js',
  output: {
    path: Path.join(BASE, 'build/test-assets'),
    filename: 'test.bundle.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  plugins: [
    // Enzyme
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/),
  ],
  devtool: 'eval-cheap-module-source-map',
  hot: false
}

module.exports = config