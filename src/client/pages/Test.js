import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Test</h1>
    </div>
  );
};

export default { component: Test };
