
const isTest = process.env.NODE_ENV === 'test'

const nib = require('nib')

const config = {
  type: 'react-app',
  webpack: {
    loaders: {
      stylus: { config: { use: [ nib() ] } },
      babel: { test: /\.jsx?/ }
    },
    extra: {
      resolve: { extensions: ['', '.js', '.jsx', '.json'] }
    },
    defined: {
      __VERSION__: JSON.stringify(require('./package.json').version)
    }
  }
}

if (isTest) {
  config.webpack.compat = {
    enzyme: true,
    sinon: true
  }

  config.karma = {
    testContext: './.tests/tests-entry.js',
    plugins: [
      require('karma-chai'),
      require('karma-spec-reporter'),
      require('karma-sinon')
    ],
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['spec']
  }
}

module.exports = config
