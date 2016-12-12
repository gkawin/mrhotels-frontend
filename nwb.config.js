
const nib = require('nib')
module.exports = {
  type: 'react-app',
  webpack: {
    loaders: {
      stylus: {
        config: {
          use: [ nib() ]
        }
      }
    },
    defined: {
      __VERSION__: JSON.stringify(require('./package.json').version)
    }
  }
}
