import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../design'

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = { theme }

  render () {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}

export default MainLayout
