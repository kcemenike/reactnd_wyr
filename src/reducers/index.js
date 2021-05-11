import { combineReducers } from 'redux';

import questions from './questions';
import authReducer from './auth';
import users from './users'

export default combineReducers({
  users,
  questions,
  authReducer,
})
