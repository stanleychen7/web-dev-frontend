import React from "react";
import { Link } from "react-router-dom";

const SingleCampusView = ({
  campus,
  students = [],
  onDeleteCampus,
  onDeleteStudent,
  onAddStudent,
}) => {
  if (!campus) return <p>Campus not found.</p>;

  return (
    <div>
      <h1>{campus.name}</h1>
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>
      {campus.imageUrl && (
        <img src={campus.imageUrl} alt={campus.name} style={{ maxWidth: "300px" }} />
      )}

      <div style={{ margin: "1em 0" }}>
        <Link to={`/campus/${campus.id}/edit`}>
          <button>Edit Campus</button>
        </Link>
        <button onClick={() => onDeleteCampus && onDeleteCampus(campus.id)} style={{ marginLeft: "1em" }}>
          Delete Campus
        </button>
      </div>

      <h2>Enrolled Students</h2>
      {students.length === 0 ? (
        <p>No students are enrolled at this campus.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                {student.firstname} {student.lastname}
              </Link>
              <button
                style={{ marginLeft: "1em" }}
                onClick={() => onDeleteStudent && onDeleteStudent(student.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "1em" }}>
        <Link to={`/student/new?campusId=${campus.id}`}>
          <button>Add New Student</button>
        </Link>
        <Link to={`/student/add-existing?campusId=${campus.id}`}>
          <button style={{ marginLeft: "1em" }}>Add Existing Student</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCampusView;