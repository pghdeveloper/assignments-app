import React, { useState } from 'react';
import axios from 'axios';

const GetAssignmentsForm = () => {
  const [assignee, setAssigneeName] = useState('');
  const [assignments, setAssignments] = useState([]);

  const handleSearchClick = () => {
    // Replace this URL with your actual endpoint and add any required headers
    axios.get(`https://localhost:7287/Assignments?assignee=${assignee}`)
    .then((response) => setAssignments(response.data))
    .catch((error) => console.error('An error occurred:', error));
  };

  return (
    <div>
      <div>
        <label htmlFor="assignee">Assignee Name:</label>
        <input
          type="text"
          id="assignee"
          value={assignee}
          onChange={(e) => setAssigneeName(e.target.value)}
        />
        <button onClick={handleSearchClick}>Get Assignments</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Assignee Name</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Is Priority</th>
            <th>Percent Complete</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.externalId} data-external-id={assignment.externalId}>
              <td>{assignment.assignee}</td>
              <td>{assignment.dueDate}</td>
              <td>{assignment.description}</td>
              <td>{assignment.isPriority ? 'Yes' : 'No'}</td>
              <td>{assignment.percentComplete != null ? `${assignment.percentComplete}%` : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAssignmentsForm;