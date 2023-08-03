import React from 'react';
import { Link } from 'react-router-dom'; // If you plan to use React Router for navigation in the future

const MainHomePage = () => {
  return (
    <div>
      <h1>Welcome to Main Home Page</h1>
      <p>Click on the links below to navigate:</p>
      <ul>
        <li>
          <Link to="/create-assignments">Create Assignments</Link>
        </li>
        <li>
          <Link to="/assignments-list">Assignments List</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainHomePage;