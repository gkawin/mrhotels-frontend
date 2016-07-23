const webpack      = require('webpack')
const path         = require('path')
const autoprefixer = require('autoprefixer')

//resolve path files.
const SOURCE_PATH = path.resolve(__dirname, '..', 'src')
const BUILD_PATH = path.resolve(__dirname, '..', 'build')

//export webpack configuration
module.export = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    travel_bylon: [ 'babel-polyfill', './index.js' ]
  },
  output: {
    //no required in dev mode, nonetheless it will be crashes without them.
    path: BUILD_PATH,
    pathinfo: true,
    filename: `[name]${development ? '' : ''}.js`,
    publicPath: 'http://localhost:2000/asserts/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: SOURCE_PATH,
      }
    ],
    loaders: [
      {
        test: /\.(css)$/,
        loaders: [ 'style', 'css' ],
      },
      {
        test: /\.(styl)$/,
        loaders: [ 'style', 'css', 'postcss', 'stylus' ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory',
      }
    ],
  },
}
