import React  from 'react';

const UserCard = ({ image, id, name, score, answeredCount, questionCount }) => {

  return (
    <div className="card">
        <div className="color-overlay">
          <div className="image-wrapper">
            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={image} alt={id}/>
            <h4 className="user-name" style={{ textAlign: 'center', padding: '10px' }}>{name}</h4>
          </div>

          <div className="content">
            <div className="header">
              <h1 className="title" style={{ textAlign: 'center', color: 'greenyellow' }}>
                TOTAL SCORE: {score}
              </h1>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>
                Question Asked: {answeredCount}
              </h4>
              <h4 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>
                Question Answered: {questionCount}
              </h4>
            </div>
          </div>

        </div>
      </div>
  )
};

export default UserCard;
