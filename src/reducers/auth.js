import { SIGN_IN, SIGN_OUT } from '../actions/auth'

export default function authReducer(state = null, action) {
  switch (action.type) {
    case SIGN_IN:
      return { userId: action.userId }
    case SIGN_OUT:
      return { userId: null }
    default:
      return state
  }
}
