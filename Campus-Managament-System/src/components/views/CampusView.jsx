import React from "react";

const DEFAULT_IMAGE = "https://via.placeholder.com/300x200?text=No+Image";

const CampusView = ({ campus, students = [] }) => {
  if (!campus) return <p>Campus not found.</p>;

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

      <h2>Enrolled Students</h2>
      {students.length === 0 ? (
        <p>No students are enrolled at this campus.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.firstname} {student.lastname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampusView;