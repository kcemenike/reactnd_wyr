import { RECEIVE_QUESTIONS, ADD_NEW_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_NEW_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question,
      }
    case SAVE_QUESTION_ANSWER:
      const { authedUserId, qid, answer } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUserId]),
          },
        },
      }
    default:
      return state
  }
}
