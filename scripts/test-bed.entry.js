
import React from 'react'
import chai from 'chai'
import assert from 'power-assert'

// 1. Set up your test environment. (e.g. mocha, power-assert, chai)
//    Let’s use an adapter for mocha.
var TestBedMocha = require('test-bed/adapters/mocha')
TestBedMocha.setup({ ui: 'bdd' }) // this makes `describe`, `it` available.

// 2. Set up your test environment.
// Globally available objects…
const expect = chai.expect
Object.assign(global, {
  React,
  expect,
  assert
})

// 3. Run test-bed, sending the webpack context.
TestBedMocha.run({
  // Specify the test context: https://webpack.github.io/docs/context.html
  context: require.context(
    '../src',        // ← Look for test files inside `src` directory.
    true,           // ← Recurse into subdirectories.
    /\.spec\.js$/   // ← Only consider files ending in `.spec.js`.
  )
})
