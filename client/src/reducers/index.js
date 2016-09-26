import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import languages from '../reducers/languages'

export const rootReducer = combineReducers({
  languages: languages,
  routing: routerReducer
})

export default rootReducer
