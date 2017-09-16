const moduleRulesCommon = require('../webpack/moduleRulesCommon')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      ...moduleRulesCommon({ css: true })
    ]
  }
}
