// ./test-entry.js
// This example assumes you are using Mocha test framework,
// but test-bed should work with any browser-based test framework,
// as long as it exposes the necessary hooks.

// 1. Set up your test environment. (e.g. mocha, power-assert, chai)
//    Let’s use an adapter for mocha.
var TestBedMocha = require('test-bed/adapters/mocha')
TestBedMocha.setup({ ui: 'bdd' }) // this makes `describe`, `it` available.

// 2. Set up your test environment.
global.chai = require('chai')
global.expect = global.chai.expect

TestBedMocha.run({
  // Specify the test context: https://webpack.github.io/docs/context.html
  context: require.context(
    '../src',        // ← Look for test files inside `src` directory.
    true,           // ← Recurse into subdirectories.
    /\.spec\.js$/   // ← Only consider files ending in `.spec.js`.
  )
})