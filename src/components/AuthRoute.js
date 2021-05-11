
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={function(props) {
      return (
        rest.isUserLoggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
      )}
    } />
  );
}

function mapStateToProps({ authReducer }) {
  return {
    isUserLoggedIn: authReducer && authReducer.userId
  }
}

export default connect(mapStateToProps)(AuthRoute);
