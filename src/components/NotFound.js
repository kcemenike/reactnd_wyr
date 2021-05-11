import React  from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <>
      <h2>PAGE NOT FOUND. </h2>
      <Link to="/">Redirect to Home Page</Link>
    </>
  )
};

export default NotFound;
