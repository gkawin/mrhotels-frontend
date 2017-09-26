import React from 'react'
import PropTypes from 'prop-types'
import styled from './Button.style'

class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func
  }
  onClick = (e) => {
    e.preventDefault()
    this.props.onClick(e.target.value)
  }
  render () {
    return (
      <button className={this.props.className} onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default styled(Button)
