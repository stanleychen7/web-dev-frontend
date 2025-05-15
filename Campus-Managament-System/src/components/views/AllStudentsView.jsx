import React from 'react';
import { Link } from 'react-router-dom';

const AllStudentsView = ({ allStudents = [], onDeleteStudent }) => (
  <div>
    <h1>All Students</h1>
    <Link to="/newStudent">
      <button>Add New Student</button>
    </Link>
    {(!Array.isArray(allStudents) || allStudents.length === 0) ? (
      <p>No students found. Please add a new student.</p>
    ) : (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {allStudents.map(student => (
          <li key={student.id} style={{ marginBottom: "1em", display: "flex", alignItems: "center" }}>
            <Link to={`/students/${student.id}`}>
              <strong>{student.firstName} {student.lastName}</strong>
            </Link>
            <button
              style={{ marginLeft: "1em" }}
              onClick={() => onDeleteStudent && onDeleteStudent(student.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default AllStudentsView;