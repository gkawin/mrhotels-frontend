//endpoint file
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import routes from './routes'

// Import stylesheets to use
require('font-awesome/css/font-awesome.css')

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
  ,
  document.getElementById('react')
)
