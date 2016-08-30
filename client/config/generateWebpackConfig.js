
if (!process.env.NODE_ENV)
  throw new Error('should be assign enviroment between "development" or "test" or "production"')

const webpack      = require('webpack')
const path         = require('path')
const autoprefixer = require('autoprefixer')

//Enviroment
const isDevelopment = (process.env.NODE_ENV === 'development')
const isTest = (process.env.NODE_ENV === 'test')

//resolve path files.
const SOURCE_PATH = path.resolve(__dirname, '..', 'src')
const BUILD_PATH = path.resolve(__dirname, '..', 'build')

function getModuleLoaders () {
  return {
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
        test: /\.(jpe?g|mp4|otf|svg|ttf|woff|woff2|eot)(?:$|\?)/,
        loader: 'file',
        query: { name: '[name]-[hash:8].[ext]' }
      },
      {
        test: /\.(gif|png|ico)$/,
        loader: 'url',
        query: { name: '[name]-[hash:8].[ext]', limit: 10240 }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { cacheDirectory: true }
      }
    ],
  }
}

function normalEnviroment (options) {
  return {
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
    module: getModuleLoaders(),
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
}

function testEnviroment (options) {
  const isTestBed = (options.mode === 'test-bed')
  const devtool = isTestBed
    ? 'eval-cheap-module-source-map'
    : 'inline-cheap-module-source-map'
  const entry = isTestBed
    ? 'babel!./scripts/test-bed.entry.js'
    : './scripts/test.entry.js'

  return {
    devtool,
    entry,
    output: {
      path: path.resolve(BUILD_PATH, 'test-assets'),
      filename: 'test.bundle.js',
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    },
    module: getModuleLoaders(),
    plugins: [
      // Enzyme
      new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
      new webpack.IgnorePlugin(/react\/addons/),
    ],
    hot: false,
  }
}

module.exports = (options) => isTest ? testEnviroment(options) : normalEnviroment(options)
module.exports.getModuleLoaders = getModuleLoaders
