import { connect } from 'react-redux';
import React from 'react';

import Header from './Header';
import UserCard from './UserCard';
import { getUserLeaderBoardInfo } from '../api/api';


const LeaderBoard = ({ users }) => {

  return (
    <>
      <Header />
      {
        users.map(user => <UserCard key={user.id} {...user} />)
      }
    </>
  )
};

function mapStateToProps({ users }) {
  users = Object.values(users).map(user => getUserLeaderBoardInfo(user));
  users.sort((a, b) => {
    return (a.score < b.score) ? 1 : -1
  })
  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard);
