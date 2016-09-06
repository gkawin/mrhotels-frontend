
//NOTE: We're using https://github.com/andreypopp/react-fa is called  REACT FONT AWESOME
//easy to use and integration.

import React from 'react'
import ReactFontAwesome from 'react-fa'
import Classnames from 'classnames'
import _ from 'lodash'

import './Icon.styl'

export const iconClassname = (className) => Classnames('icon', className)

const propFields = [
  'name', 'size', 'rotate', 'flip', //string
  'pulse', 'inverse', 'spin' //boolean
]

export const getAllIcons = () => _(document.styleSheets)
  .toArray()
  .map('cssRules')
  .map(_.toArray)
  .flatten()
  .map('selectorText')
  .compact()
  .map(selector => selector.match(/^\.fa-(.*?)::before/))
  .compact()
  .map(1)
  .sortBy()
  .value()

const Icon = (props) => (
  <ReactFontAwesome
    className={iconClassname(props.className)}
    onClick={props.onClick}
    {..._.pick(props, propFields)}
  />
)


Icon.propTypes = {
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
}

export default Icon
