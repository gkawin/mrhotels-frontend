const moduleRulesCommon = require('../webpack/moduleRulesCommon')
const moduleAliases = require('../webpack/moduleAliases')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      ...moduleRulesCommon({ css: true })
    ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'mh-design$': require.resolve('../src/design') }
    )
  }
}
