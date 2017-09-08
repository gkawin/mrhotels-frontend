
const Path = require('path')

module.exports = {
  entry: Path.resolve(__dirname, 'src', 'App.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
}
