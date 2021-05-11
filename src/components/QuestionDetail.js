import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';

import Header from './Header';
import { handleAnswerSubmission } from '../actions/questions';
import { getQuestionAnsweredOption, getQuestionPollingData, getReadableDate } from '../api/api';

const QuestionDetail = ({ user, question, match, handleAnswerSubmission }) => {
  if (!question) {
    return <Redirect to="/not-found"/>
  }

  const { id } = match.params;
  const questionDateTime = getReadableDate(question.timestamp);
  const answeredOption = getQuestionAnsweredOption(question, user.id)
  const questionVotesData = answeredOption && getQuestionPollingData(question);


  const handleOptionClicked = (ans) => {
    handleAnswerSubmission(id, ans)
  };

  return (
    <>
      <Header />
      <div className="card" style={{ height: '400px' }}>
        <div className="color-overlay">
          <div className="image-wrapper">
            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }}
              src={user.avatarURL} alt={question.author} />
            <h4 className="user-name" style={{ textAlign: 'center', padding: '10px' }}>{user.name}</h4>
            <p style={{ textAlign: 'center' }}>
              <span>{questionDateTime[0]} <br /> {questionDateTime[1]}</span>
            </p>

          </div>
          <div className="content">
            <div className="header">
              <h1 className="title" style={{ textAlign: 'center' }}>Would You Rather</h1>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => handleOptionClicked('optionOne')}
                className={`btn ${answeredOption === 'opt1' ? 'btn-success' : 'btn-outline-info'}`}
                disabled={answeredOption}
                style={{ color: 'white' }}>
                {question.optionOne.text}
              </button>
              {
                questionVotesData &&
                <div style={{ textAlign: 'center', color: 'greenyellow', fontSize: '12px', marginTop: '10px' }}>
                  <p>Total people voted for this Option: {questionVotesData.opt1VoteCount}</p>
                  <p>Percentage of people who voted for this option: {questionVotesData.opt1Percentage}%</p>
                </div>
              }
              <h4 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>OR</h4>
              <button
                onClick={() => handleOptionClicked('optionTwo')}
                className={`btn ${answeredOption === 'opt2' ? 'btn-success' : 'btn-outline-info'}`}
                disabled={answeredOption}
                style={{ color: 'white' }}>
                {question.optionTwo.text}
              </button>
              {
                questionVotesData &&
                <div style={{ textAlign: 'center', color: 'greenyellow', fontSize: '12px', marginTop: '10px' }}>
                  <p>Total people voted for this Option: {questionVotesData.opt2VoteCount}</p>
                  <p>Percentage of people who voted for this option: {questionVotesData.opt2Percentage}%</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps({ authReducer, users, questions }, { match }) {
  const questionId = match.params.id
  return {
    user: users[authReducer.userId],
    question: questions[questionId],
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleAnswerSubmission }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)
