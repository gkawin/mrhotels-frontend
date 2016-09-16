//endpoint file
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import './ui/design/index.styl'

import App from './ui/App'
import { Login } from './ui/login'
import store from './store'


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
const MrHotels = window.MrHotels = { }

function render (element) {
  MrHotels.app = ReactDOM.render(element, document.getElementById('react'))
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='/login' component={Login} />
    </Router>
  </Provider>
)
