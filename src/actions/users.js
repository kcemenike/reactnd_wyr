import { fetchData } from '../api/api'
import { receiveQuestions } from './questions'

export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function getUsers(allUsers){
    return{
        type: FETCH_USERS,
        user: allUsers
    }
}

export function fetchUsersQuestions() {
    return (dispatch) => {
        return fetchData()
            .then(({ users, questions})=> {
                dispatch(getUsers(users));
                dispatch(receiveQuestions(questions))
        })
    }
}

export function addUserQuestion (authedUserId, qid) {
    return {
      type: ADD_USER_QUESTION,
      authedUserId,
      qid
    }
  }

export function saveUserAnswer (auth, qid, option) {
  return {
    type: SAVE_USER_ANSWER,
    auth,
    qid,
    option
  }
}
