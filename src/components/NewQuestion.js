import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import Header from './Header';
import { submitNewQuestion } from '../actions/questions';


const NewQuestion = (props) => {

  const history = useHistory();
  const [firstOpt, setFirstOption] = useState('');
  const [secondOpt, setSecondOption] = useState('');

  const handleFormSubmit = () => {
    const questionData = { optionOneText: firstOpt, optionTwoText: secondOpt, author: props.loggedInUserId }
    props.submitNewQuestion(questionData);
    history.push('/');
  }

  return (
    <>
      <Header />
      <div className="new-question-card" style={{ textAlign: 'center', marginTop: '20px', padding: '30px' }}>
        <h4>Would You Rather</h4>
        <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" required placeholder="Add First Option"
              value={firstOpt} onChange={(e) => setFirstOption(e.target.value)} />
            <label htmlFor="floatingInput">First Option</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Add Second Option"
              value={secondOpt} onChange={(e) => setSecondOption(e.target.value)} />
            <label htmlFor="floatingPassword">Second Option</label>
          </div>
          <div className="d-grid gap-2" style={{ margin: '30px' }}>
            <button className="btn btn-primary" type="button"
              disabled={!(firstOpt && secondOpt)} onClick={() => handleFormSubmit()}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
};

function mapStateToProps({ authReducer }) {
  return {
    loggedInUserId: authReducer.userId,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitNewQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
