import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses = [], onDeleteCampus }) => (
  <div>
    <h1>All Campuses</h1>
    <Link to="/campus/new">
      <button>Add New Campus</button>
    </Link>
    {(!Array.isArray(allCampuses) || allCampuses.length === 0) ? (
      <p>No campuses found. Please add a new campus.</p>
    ) : (
      <ul>
        {allCampuses.map((campus) => (
          <li key={campus.id} style={{ marginBottom: "1em" }}>
            <Link to={`/campus/${campus.id}`}>
              <strong>{campus.name}</strong>
            </Link>
            <button
              style={{ marginLeft: "1em" }}
              onClick={() => onDeleteCampus && onDeleteCampus(campus.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default AllCampusesView;