window.$ = window.jQuery = require('jquery')
require('jquery.scrollto')
require('jquery.transit')
require('./spec-helpers')

const requireAllTests = context => context.keys().forEach(function (name) {
  describe(name, function () {
    context(name)
  })
})

requireAllTests(require.context('../src', true, /\.spec\.js$/))

