process.env.NODE_ENV = 'development'

const path         = require('path')
const autoprefixer = require('autoprefixer')

//resolve path files.
const SOURCE_PATH = path.resolve(__dirname, '..', 'src')
const BUILD_PATH = path.resolve(__dirname, '..', 'build')

//export webpack configuration
module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    bundle: [ 'babel-polyfill', path.resolve(SOURCE_PATH, 'index.entry.js') ]
  },
  output: {
    path: BUILD_PATH,
    publicPath: 'http://localhost:2000/asserts/',
    filename: '[name].js',
    pathinfo: true,
  },
  module: {
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
        test: /\.(json)$/,
        loader: 'json',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory',
      }
    ],
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['> 1%', 'IE 10', 'last 2 versions'],
        cascade: false,
      })
    ]
  },
  devServer: {
    historyApiFallback: true,
    progress: true,
    stats: {
      children: false,
      chunks: false,
      colors: true,
      modules: false
    },
  }
}
