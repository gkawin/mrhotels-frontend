const path = require('path')

module.exports = {
  test: /\.js$/,
  include: [
    path.join(__dirname, '..', 'src')
  ],
  exclude: [/(node_modules|bower_components)/],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['env', 'react'],
      plugins: ['transform-runtime', 'transform-class-properties']
    }
  }
}
