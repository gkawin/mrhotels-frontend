import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const ButtonBaseStyle = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  width: ${props => props.width || '200px'};
  border: none;
  outline: none;
  color: white;
  background: ${props => props.theme.secoundary.main};
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => props.theme.secoundary.dark};
  }
`

export default ButtonBaseStyle
