//endpoint file
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './ui/App'
import { Login } from './ui/login'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='login' component={Login}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('react')
)
