const path = require('path')
const development = process.env.NODE_ENV === 'development'

module.exports = [
  {
    test: /\.js$/,
    include: [
      path.join(__dirname, '..', 'src')
    ],
    exclude: [/(node_modules|bower_components)/],
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          [ 'env', { module: false } ],
          'react'
        ],
        plugins: [
          [ 'styled-components', { 'displayName': development } ],
          'transform-runtime',
          'transform-decorators-legacy',
          'transform-class-properties'
        ]
      }
    }
  }
]
