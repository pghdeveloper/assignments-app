import React, { useState } from 'react';
import axios from 'axios';

const GetAssignmentsForm = () => {
  const [assignee, setAssigneeName] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleSearchClick = () => {
    // Replace this URL with your actual endpoint and add any required headers
    axios.get(`https://localhost:7287/Assignments?assignee=${assignee}`)
    .then((response) => setAssignments(response.data))
    .catch((error) => console.error('An error occurred:', error));
  };

  const handleAssigneeClick = (assignment) => {
    setSelectedAssignment({ ...assignment });
  };

  const handleUpdateClick = () => {
    // Update the selected assignment with an API call
    axios.post(`https://localhost:7287/Assignments`, selectedAssignment)
      .then(() => {
        alert('Assignment has been updated successfully.');
        setSelectedAssignment(null);
        handleSearchClick(); // Refresh the assignments
      })
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
            <td><a href="#" onClick={() => handleAssigneeClick(assignment)}>{assignment.assignee}</a></td>
            <td>{assignment.dueDate}</td>
            <td>{assignment.description}</td>
            <td>{assignment.isPriority ? 'Yes' : 'No'}</td>
            <td>{assignment.percentComplete != null ? `${assignment.percentComplete}%` : ''}</td>
          </tr>
        ))}
      </tbody>
      </table>
      {/* Modal for editing the selected assignment */}
      {selectedAssignment && (
        <div>
          <label>Due Date:</label>
          <input
            type="text"
            value={selectedAssignment.dueDate}
            onChange={(e) => setSelectedAssignment({ ...selectedAssignment, dueDate: e.target.value })}
          />
          <label>Description:</label>
          <input
            type="text"
            value={selectedAssignment.description}
            onChange={(e) => setSelectedAssignment({ ...selectedAssignment, description: e.target.value })}
          />
          <label>Percent Complete:</label>
          <input
            type="text"
            value={selectedAssignment.percentComplete}
            onChange={(e) => setSelectedAssignment({ ...selectedAssignment, percentComplete: e.target.value })}
          />
          <label>Is Priority:</label>
          <input
            type="checkbox"
            value={selectedAssignment.isPriority}
            onChange={(e) => setSelectedAssignment({ ...selectedAssignment, isPriority: e.target.value })}
          />
          <button onClick={handleUpdateClick}>Update Assignment</button>
          <button onClick={() => setSelectedAssignment(null)}>Cancel</button>
        </div>
      )}
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <label htmlFor="assignee">Assignee Name:</label>
  //       <input
  //         type="text"
  //         id="assignee"
  //         value={assignee}
  //         onChange={(e) => setAssigneeName(e.target.value)}
  //       />
  //       <button onClick={handleSearchClick}>Get Assignments</button>
  //     </div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Assignee Name</th>
  //           <th>Due Date</th>
  //           <th>Description</th>
  //           <th>Is Priority</th>
  //           <th>Percent Complete</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {assignments.map((assignment) => (
  //           <tr key={assignment.externalId} data-external-id={assignment.externalId}>
  //             <td>{assignment.assignee}</td>
  //             <td>{assignment.dueDate}</td>
  //             <td>{assignment.description}</td>
  //             <td>{assignment.isPriority ? 'Yes' : 'No'}</td>
  //             <td>{assignment.percentComplete != null ? `${assignment.percentComplete}%` : ''}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

export default GetAssignmentsForm;