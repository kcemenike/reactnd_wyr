import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { getReadableDate } from '../api/api';

const QuestionCard = ({ users, id, author, optionOne, optionTwo, timestamp }) => {

  const user = users[author];
  const history = useHistory();
  const questionDateTime = getReadableDate(timestamp);

  return (
    <div className="card pointer" onClick={() => {history.push(`questions/${id}`)}}>
      <div className="color-overlay">
        <div className="image-wrapper">
          <img style={{ width: '200px', height: '200px', borderRadius: '50%' }}
               src={user.avatarURL} alt={author}/>
          <h4 className="user-name" style={{ textAlign: "center", padding: '10px' }}>{user.name}</h4>
          <p style={{ textAlign: 'center' }}>
            <span>{questionDateTime[0]} <br/> {questionDateTime[1]}</span>
          </p>
        </div>
        <div className="content">
          <div className="header">
            <h1 className="title" style={{ textAlign: "center" }}>Would You Rather</h1>
          </div>
          <div>
            <h5 style={{ color: '#2a9fff', textAlign: 'center' }}>{optionOne.text}</h5>
            <h4 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>OR</h4>
            <h5 style={{ color: '#2a9fff', textAlign: 'center' }}>{optionTwo.text}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({users}) {
	return {
	  users
	}
}

export default connect(mapStateToProps)(QuestionCard);
