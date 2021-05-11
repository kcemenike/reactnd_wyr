import { _getQuestions, _getUsers } from './_DATA.js';

export function fetchData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      return({ users, questions })
    }
  )
}

export function getReadableDate (timestamp) {
  const dateObject = new Date(timestamp)
  return [
    dateObject.toLocaleDateString('en-US'), dateObject.toLocaleTimeString('en-US')
  ]
}

export function getQuestionAnsweredOption (question, userId) {
  if (question.optionOne.votes.includes(userId)) {
    return 'opt1'
  } else if (question.optionTwo.votes.includes(userId)) {
    return 'opt2'
  }
  return ''
}

export function getQuestionPollingData (question) {
  const opt1VoteCount = question.optionOne.votes.length;
  const opt2VoteCount = question.optionTwo.votes.length;
  const totalCount = opt1VoteCount + opt2VoteCount;
  const opt1Percentage = (opt1VoteCount / totalCount) * 100;
  const opt2Percentage = (opt2VoteCount / totalCount) * 100;
  return { opt1VoteCount, opt2VoteCount, opt1Percentage, opt2Percentage }
}

export function getUserLeaderBoardInfo (user) {
  return {
    id: user.id,
    name: user.name,
    image: user.avatarURL,
    questionCount: user.questions.length,
    answeredCount: Object.keys(user.answers).length,
    score: user.questions.length + Object.keys(user.answers).length
  }
}
