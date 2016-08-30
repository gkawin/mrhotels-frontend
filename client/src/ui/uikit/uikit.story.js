
import React from 'react'

import {
  Button
} from '.'

export { module }

const FrontPageSimulator = ({ children }) => (
  <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{backgroundColor: 'white', padding: '15px'}}>{children}</div>
  </div>
)

FrontPageSimulator.propTypes = {
  children: React.PropTypes.node
}

export const stories = {
  'Button primary': () => (
    <FrontPageSimulator>
      <Button
        raised
        style='primary'
      >
        Submit
      </Button>
    </FrontPageSimulator>
  )
}
