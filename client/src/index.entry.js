//endpoint file
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import './ui/design/index.styl'

import LanguagesContainer from './containers/languages'
import store from './store'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={LanguagesContainer} />
    </Router>
  </Provider>
, document.getElementById('react'))
