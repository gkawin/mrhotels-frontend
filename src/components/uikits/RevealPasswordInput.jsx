import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input.jsx'

class RevealPasswordInput extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  state = {
    type: 'password',
    password: null,
  }

  onChangeInputType = (e) => {
    this.setState({ type: this.state.type === 'password' ? 'text' : 'password' })
  }

  onChangeInput = (e) => {
    this.setState({ password: e.target.value })
  }

  render () {
    const buttonContent = this.state.type === 'password'
      ? 'Show'
      : 'Hide'
    return (
      <div className={this.props.className}>
        <Input
          type={this.state.type}
          onChange={this.onChangeInput}
        />
        <span onClick={this.onChangeInputType}>{buttonContent}</span>
      </div>
    )
  }
}

export default RevealPasswordInput
