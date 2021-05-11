import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import QuestionCard from './QuestionCard';


const Home = ({ loggedInUser, questionsMap }) => {
  const [showOnlyAnswered, setAnsweredOption] = useState(false);
  const userAnsweredQuestions = Object.keys(loggedInUser.answers);

  let qIdsToShow = showOnlyAnswered?
    userAnsweredQuestions: Object.keys(questionsMap).filter(qid => !userAnsweredQuestions.includes(qid));

  qIdsToShow = qIdsToShow.sort((a,b) => questionsMap[b].timestamp - questionsMap[a].timestamp);

  return (
    <>
      <Header />
      <div className="col-md-12" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className={`btn btn-${showOnlyAnswered? 'outline-': ''}primary btn-lg`}
          onClick={() => setAnsweredOption(false)}
          style={{ marginRight: '10px' }}>
          Unanswered
        </button>
        <button
          className={`btn btn-${showOnlyAnswered? '': 'outline-'}primary btn-lg`}
          onClick={() => setAnsweredOption(true)}>
          Answered
        </button>
      </div>

      { qIdsToShow.length === 0?
        <h4 style={{ marginTop: '50px', textAlign: 'center' }}>No Question Available!</h4>:
        qIdsToShow.map(qId => <QuestionCard key={qId} {...questionsMap[qId]} />)
      }

    </>
  )
};

function mapStateToProps({authReducer, users, questions}) {
	return {
	  loggedInUser: users[authReducer.userId],
    questionsMap: questions
	}
}

export default connect(mapStateToProps)(Home);
