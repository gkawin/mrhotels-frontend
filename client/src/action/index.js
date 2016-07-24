import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  LoginRequested: { state: String },
  LoginSucceeded: { state: String },
  LoginFail:      { state: String },
})

export const {
  LoginRequested,
  LoginSucceeded,
  LoginFail
}
