import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login'

export const rootReducer = combineReducers({
  login,
  routing: routerReducer
})

console.log(rootReducer)

export default rootReducer
