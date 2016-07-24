import Immutable from 'immutable'

export const InitialState = Immutable.Map()

export default function logins(state = InitialState, action) {
  switch (action.type) {
    case 'LoginRequested': {
      return state.push({ state: 'loading' })
    }
    default:
      return state
  }
}
