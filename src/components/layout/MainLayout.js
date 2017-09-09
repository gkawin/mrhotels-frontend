import React from 'react'
import PropTypes from 'prop-types'

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  render () {
    return (<div>{React.Children.only(this.props.children)}</div>)
  }
}

export default MainLayout
