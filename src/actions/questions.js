import { _saveQuestionAnswer, _saveQuestion } from '../api/_DATA'
import { addUserQuestion, saveUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAnswer (authedUserId, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUserId,
    qid,
    answer,
  }
}

export function handleAnswerSubmission (qid, option) {
  return (dispatch, getState) => {
    const { authReducer } = getState()
    _saveQuestionAnswer({ authedUserId: authReducer.userId, qid, answer: option })
      .then(() => {
        dispatch(saveQuestionAnswer(authReducer.userId, qid, option))
        dispatch(saveUserAnswer(authReducer.userId, qid, option))
      })
  }
}

export function submitNewQuestion (questionData) {
  return (dispatch) => {
    return _saveQuestion(questionData)
      .then((question) => {
        dispatch(addNewQuestion(question))
        dispatch(addUserQuestion(question.author, question.id))
      })

  }
}
