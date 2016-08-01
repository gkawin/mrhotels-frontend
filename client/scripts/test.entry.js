import 'babel-polyfill'
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

const context = require.context('../src', true, /\.spec\.js$/)

context.keys().forEach(key => {
  // describe(key, function () {
    context(key)
  // })
})

module.exports = context
