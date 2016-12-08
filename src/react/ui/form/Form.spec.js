
import { formClassname } from './Form'

describe('Form', () => {
  it('formClassname should be return mixed classname', () => {
    const test = 'foo'
    const expect = `form ${test}`
    assert.equal(formClassname(test), expect)
  })
})
