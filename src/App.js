import { BrowserRouter, Route, Switch } from "react-router-dom";
import { bindActionCreators } from 'redux';
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Home from './components/Home';
import LogIn from './components/SignIn';
import NotFound from './components/NotFound';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import { fetchUsersQuestions } from './actions/users';
import QuestionDetail from './components/QuestionDetail';
import AuthRoute from './components/AuthRoute'

function App(props) {

  useEffect(() => {
    props.fetchUsersQuestions()
  })

  return (
        props.isUserLoggedIn ?
          <BrowserRouter>
            <Switch>
              <>
                <AuthRoute path='/' exact component={Home} />
                <AuthRoute path='/add' component={NewQuestion} />
                <AuthRoute path='/leaderboard' exact component={LeaderBoard} />
                <AuthRoute path="/questions/:id" component={QuestionDetail} />
                <Route component={NotFound} />
              </>
            </Switch>
          </BrowserRouter> :
          <LogIn />
  )
}

function mapStateToProps({ authReducer }) {
  return {
    isUserLoggedIn: authReducer && authReducer.userId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsersQuestions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

