import React from 'react'
import Classnames from 'classnames'

import './FormRow.styl'

export const classFormRow = (classname) => Classnames('form-row', classname)

const FormRow = ({ children, className }) => (
  <div className={classFormRow(className)}>
    {children}
  </div>
)

FormRow.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
}

export default FormRow
