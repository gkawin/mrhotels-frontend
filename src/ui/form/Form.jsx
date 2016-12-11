import React from 'react'
import classnames from 'classnames'

export const formClassname = (className) => classnames('form', className)

const Form = ({ children, className, ...other }) => (
  <form className={formClassname(className)} {...other}>
    {children}
  </form>
)

Form.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
}

export default Form
