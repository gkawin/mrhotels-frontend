import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  Language: { languages: Array },

  LoginRequested: { state: String },
  LoginSucceeded: { state: String },
  LoginFail:      { state: String },
})

export const {
  Language,

  LoginRequested,
  LoginSucceeded,
  LoginFail
} = Action
