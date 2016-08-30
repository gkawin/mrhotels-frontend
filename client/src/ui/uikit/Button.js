
import React from 'react'

const Button = ({ children }) => (
  <button>
    {children}
  </button>
)

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Button
