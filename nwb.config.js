
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  type: 'react-app',
  webpack: {
    defined: {
      __VERSION__: JSON.stringify(require('./package.json').version)
    },
    loaders: {
      css: {
        modules: true,
        localIdentName: (isDevelopment ? '[path][name]__[local]__' : '') + '[hash:base64:5]'
      }
    }
  }
}
