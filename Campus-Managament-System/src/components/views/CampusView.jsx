import React, { useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://via.placeholder.com/300x200?text=No+Image";

const CampusView = ({ campus, onRemoveStudent, onDeleteCampus }) => {
  if (!campus) return <p>Campus not found.</p>;

  const students = campus.Students || [];

  return (
    <div>
      <h1>{campus.name}</h1>
      <img
        src={campus.imageUrl || DEFAULT_IMAGE}
        alt={campus.name}
        style={{ maxWidth: "300px", borderRadius: "8px" }}
      />
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>

      <div style={{ margin: "1em 0" }}>
        <Link to={`/newStudent?campusId=${campus.id}`}>
          <button>Add New Student</button>
        </Link>
        <button
          style={{ marginLeft: "1em", background: "#d32f2f", color: "#fff" }}
          onClick={() => onDeleteCampus && onDeleteCampus(campus.id)}
        >
          Delete Campus
        </button>
      </div>

      <h2>Enrolled Students</h2>
      {students.length === 0 ? (
        <p>No students are enrolled at this campus.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id} style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <button
                style={{ marginLeft: "1em" }}
                onClick={() => onRemoveStudent && onRemoveStudent(student)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampusView;