
import React from 'react'
import Classnames from 'classnames'

import './Button.styl'

export const classButton = ({ className, style, raised }) => Classnames(
  'button',
  className,
  {
    '--raised': raised
  },
  `--${style}`,
)

const Button = (props) => (
  <button
    className={classButton(props)}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
}

export default Button
