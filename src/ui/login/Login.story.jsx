
import React from 'react'
import Login from './Login'

export { module }

export const KingsLanding = ({ children }) => (
  <div style={{
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
)

export const stories = {
  'Initial State': () => (
    <KingsLanding>
      <Login />
    </KingsLanding>
  )
}
