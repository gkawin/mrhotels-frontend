const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')

chai.use(chaiEnzyme())

// Require ALL THE TESTS
const requireAllTests = context => context.keys().forEach(function (name) {
  describe(name, function () {
    context(name)
  })
})

requireAllTests(require.context('./src', true, /\.spec\.js$/))

