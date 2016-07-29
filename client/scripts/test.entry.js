
import React from 'react'
import chai from 'chai'
import assert from 'power-assert'

const expect = chai.expect
Object.assign(global, {
  React,
  expect,
  assert
})

chai.use(require('sinon-chai'))

// Require ALL THE TESTS
const requireAllTests = context => context.keys().forEach(function (name) {
  describe(name, function () {
    context(name)
  })
})

requireAllTests(require.context('../src', true, /\.spec\.js$/))
