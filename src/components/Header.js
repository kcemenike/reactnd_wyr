import { Link, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { signOut } from '../actions/auth';


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark " style={{ backgroundColor: '#2a9fff' }}>
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Would You Rather</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">New Question</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">Leader Board</NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <span style={{ color: '#ffffff', fontWeight: 'bold', padding: '10px' }}>
              {props.loggedInUser.name}
            </span>
            <button className="btn btn-danger" onClick={() => { props.signOut() }}>
              Logout
              </button>
          </span>
        </div>

      </div>
    </nav>
  )
}

function mapStateToProps({ authReducer, users }) {
  return {
    loggedInUser: users[authReducer.userId]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOut }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
