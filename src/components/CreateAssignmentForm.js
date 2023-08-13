import React, { useState } from 'react';
import axios from 'axios';
import '../css/AssignmentForm.css';

const CreateAssignmentForm = () => {
  const [assignment, setAssignment] = useState({
    assignee: '',
    description: '',
    dueDate: '',
    percentComplete: '',
    isPriority: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert percentComplete to null if it's an empty string
    const finalAssignment = {
        ...assignment,
        percentComplete: assignment.percentComplete === '' ? null : assignment.percentComplete,
    };

    try {
        const response = await axios.post('https://localhost:7287/Assignments', finalAssignment);
  
        // Success! Handle the response or any actions after a successful POST
        console.log('Assignment created successfully');
      } catch (error) {
        // Handle any network or other errors
        console.error('Error:', error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for assignee, description, dueDate, percentComplete, and isPriority */}
      {/* Use the assignment state and handleChange function to manage the form fields */}
      <div>
        <label>
          Assignee:
          <input
            type="text"
            name="assignee"
            value={assignment.assignee}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={assignment.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Due Date:
          <input
            type="text"
            name="dueDate"
            value={assignment.dueDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Percent Complete:
          <input
            type="text"
            name="percentComplete"
            value={assignment.percentComplete}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Is Priority:
          <input
            type="checkbox"
            name="isPriority"
            value={assignment.isPriority}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default CreateAssignmentForm;
