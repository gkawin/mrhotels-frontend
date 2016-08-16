import React from 'react'

import Login from './Login'

export { module }

export const stories = {
  'Login': () => (
    <Login />
  ),
  'Login Loading': () => (
    <div>
      Login Loading.....
      <Login />
    </div>
  )
}
