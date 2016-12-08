import { createStore } from 'redux'
import rootReducer from '../reducers'

export function configureStore () {
  const store = createStore(rootReducer)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

export default configureStore
