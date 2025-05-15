import React from "react";
import { Link } from "react-router-dom";

const SingleStudentView = ({ student }) => {
  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>GPA:</strong> {student.gpa !== undefined && student.gpa !== null ? student.gpa : "N/A"}
      </p>
      <p>
        <strong>Campus:</strong>{" "}
        {student.campus ? (
          <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>
        ) : (
          <span>This student is not enrolled in any campus.</span>
        )}
      </p>
      <div style={{ marginTop: "1em" }}>
        <Link to={`/students/${student.id}/edit`}>
          <button>Edit Student</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleStudentView;