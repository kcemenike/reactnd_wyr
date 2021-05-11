import { FETCH_USERS, SAVE_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.auth]: {
          ...state[action.auth],
          answers: {
            ...state[action.auth].answers,
            [action.qid]: action.option
          }
        }
      };
    case FETCH_USERS:
      return {
        ...state,
        ...action.user
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.authedUserId]: {
          ...state[action.authedUserId],
          questions: state[action.authedUserId].questions.concat([action.qid])
        }
      };
    default:
      return state
  }
}
