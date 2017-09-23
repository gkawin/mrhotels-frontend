const moduleRulesCommon = require('../webpack/moduleRulesCommon')
const moduleAliases = require('../webpack/moduleAliases')
const moduleRulesBabel = require('../webpack/moduleRulesBabel')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      ...moduleRulesBabel,
      ...moduleRulesCommon({ css: true })
    ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'mh-design$': require.resolve('../src/design') }
    )
  }
}
