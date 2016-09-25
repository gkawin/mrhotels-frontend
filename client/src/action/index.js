import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  LanguagesReceived: { languages: Array },

  LoginRequested: { state: String },
  LoginSucceeded: { state: String },
  LoginFail:      { state: String },
})

export const {
  LanguagesReceived,

  LoginRequested,
  LoginSucceeded,
  LoginFail
} = Action
