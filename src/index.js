import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainHomePage from './components/MainHomePage'; // Import the MainHomePage component
//import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAssignments from './components/CreateAssignmentForm'; // Import the CreateAssignments component here
import AssignmentsList from './components/GetAssignmentsForm'; // Import the AssignmentsList component here

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/create-assignments" element={<CreateAssignments />} />
        <Route path="/assignments-list" element={<AssignmentsList />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <MainHomePage /> {/* Render the MainHomePage component here */}
//   </BrowserRouter>,
// )
// root.render(
//   <React.StrictMode>
//     <MainHomePage /> {/* Render the MainHomePage component here */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
