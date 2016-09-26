
import * as Action from '../action'

const initialState = [ ]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LanguagesReceived':
      return [{'foo': 'baz'}]
  }

  return initialState
}
