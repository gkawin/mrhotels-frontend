const autoprefixer = require('autoprefixer')

module.exports = {
  output: {},
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
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['> 1%', 'IE 10', 'last 2 versions'],
        cascade: false,
      })
    ]
  },
  node: {
    fs: 'empty'
  },
}
