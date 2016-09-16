
import { propFields } from './FormInput'

describe('FormInput', () => {
  it('propFields should be pick defined props', () => {
    const test = {
      type: 'text',
      onChange: () => {},
      placeholder: 'foo@bar.com'
    }
    const expect = test
    assert.deepEqual(propFields(test), expect)
  })

  it('propFields should be drop props if their prop is not defined', () => {
    const test = {
      type: 'text',
      kaka: 'hoho',
      data: 'foo@bar.com'
    }
    const expect = test
    assert.notDeepEqual(propFields(test), expect)
  })
})
