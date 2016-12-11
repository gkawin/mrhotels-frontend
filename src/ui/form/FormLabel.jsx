import React from 'react'
import Classnames from 'classnames'

export const labelClassName = ({ className }) => Classnames('label', className)

const Label = (props) => (
  <label className={labelClassName(props)}>
    {props.children}
  </label>
)

Label.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
}

export default Label
