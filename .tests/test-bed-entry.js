
const TestBedMocha = require('test-bed/adapters/mocha')
TestBedMocha.setup({ ui: 'bdd' })

window.$ = window.jQuery = require('jquery')
require('jquery.scrollto')
require('jquery.transit')
require('./spec-helpers')

TestBedMocha.run({
  context: require.context(
    '../src',        // ← Look for test files inside `src` directory.
    true,           // ← Recurse into subdirectories.
    /\.spec\.js$/   // ← Only consider files ending in `.spec.js`.
  )
})