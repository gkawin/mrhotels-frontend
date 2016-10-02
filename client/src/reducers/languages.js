
const initialState = [ ]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LanguagesReceived':
      return [{'foo': 'ass'}]
  }

  return initialState
}
