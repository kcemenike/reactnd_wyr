import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'

import { signIn } from '../actions/auth'

const LogIn = ({ usersData, signIn }) => {

  const renderUserOption = (usersData) => (
    usersData.map(
      user =>
        <option key={user.userId} value={user.userId}>
          {user.name}
        </option>
    )
  )

  return (
    <div
      className="col-md-12 text-center"
      style={{ margin: '30px', marginRight: '100px', paddingTop: '30px', backgroundColor: '#2a9fff' }}>

      <h2>Please sign in to continue</h2>
      <label htmlFor="inputState" className="form-label">Select user from the following</label>
      <select id="inputState" value="" className="form-select" onChange={event => signIn(event.target.value)}>
        <option value="" disabled>-----------</option>
        {renderUserOption(usersData)}
      </select>

    </div>

  )
}

function mapStateToProps({ users }) {
  return {
    usersData: users ? Object.values(users).map(user => ({ userId: user.id, name: user.name })) : [],
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
