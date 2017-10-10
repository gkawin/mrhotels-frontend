import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'mh-design'

import Input from './Input.jsx'

class RevealPasswordInput extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  state = {
    type: 'password',
    password: null,
  }

  componentDidMount () {
    this.setState({ password: this.props.value })
  }

  onChangeInputType = (e) => {
    this.setState({ type: this.state.type === 'password' ? 'text' : 'password' })
  }

  onChangeInput = async (e) => {
    await this.setState({ password: e.target.value })
    await this.props.onChange(this.state.password)
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
          value={this.state.password}
        />
        <span className='btn-reveal-toggle' onClick={this.onChangeInputType}>{buttonContent}</span>
      </div>
    )
  }
}

export default styled(RevealPasswordInput)`
  .btn-reveal-toggle {
    background: ${colors.$grey100};
    padding: 12px;
    box-sizing: border-box;
    line-height: 20px;
    display: inline-block;
    vertical-align: bottom;
    cursor: pointer;
    width: 60px;
  }
`
