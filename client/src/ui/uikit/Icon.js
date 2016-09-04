import React from 'react'
import classnames from 'classnames'

import './Icon.styl'

const clsIconFeatures = (name, className) => classnames(
  `icon-name__${name}`,
  className
)

const Icon = ({ className, onClick, name }) => (
  <i
    className={clsIconFeatures(name, className)}
    onClick={onClick}
  />
)

Icon.getAllIcons = () => {
  return ''
}

Icon.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
}


export default Icon
