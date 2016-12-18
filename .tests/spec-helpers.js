const chai = require('chai')
const expect = chai.expect

Object.assign(global, {
  expect,
})

chai.use(require('sinon-chai'))
chai.use(require('chai-jquery'))
chai.use(require('chai-as-promised'))
chai.use(require('dirty-chai'))
chai.use(require('chai-enzyme'))