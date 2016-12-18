const chai = require('chai')
const assert = require('power-assert')

const expect = chai.expect

Object.assign(global, {
  expect,
  assert
})

chai.use(require('sinon-chai'))
chai.use(require('chai-jquery'))
chai.use(require('chai-as-promised'))
chai.use(require('dirty-chai'))
chai.use(require('chai-enzyme'))