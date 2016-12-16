import React from 'react'
import _ from 'lodash'

import './FormInput.styl'

const fields = [
  'name', 'disabled', 'onChange', 'onFocus', 'onBlur',
  'onMouseUp', 'autoFocus', 'placeholder', 'value', 'defaultValue'
]

export const propFields = ({ type, ...props }) => (
  _.assign({ type: type }, _.pick(props, fields))
)

const FormInput = (props) => (
  <div className='form-input'>
    <input { ...propFields(props) }/>
  </div>
)

export default FormInput
