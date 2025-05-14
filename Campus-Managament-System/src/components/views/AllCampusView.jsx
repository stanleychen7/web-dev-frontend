import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://via.placeholder.com/150?text=No+Image";

const AllCampusesView = ({ allCampuses = [], onDeleteCampus }) => (
  <div>
    <h1>All Campuses</h1>
    <Link to="/newCampus">
      <button>Add New Campus</button>
    </Link>
    {(!Array.isArray(allCampuses) || allCampuses.length === 0) ? (
      <p>No campuses found. Please add a new campus.</p>
    ) : (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {allCampuses.map((campus) => (
          <li key={campus.id} style={{ marginBottom: "2em", display: "flex", alignItems: "center" }}>
            <img
              src={campus.imageUrl || DEFAULT_IMAGE}
              alt={campus.name}
              style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "1em", borderRadius: "8px" }}
            />
            <div>
              <Link to={`/campuses/${campus.id}`}>
                <strong style={{ fontSize: "1.2em" }}>{campus.name}</strong>
              </Link>
              <div>
                <button
                  style={{ marginTop: "0.5em" }}
                  onClick={() => onDeleteCampus && onDeleteCampus(campus.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default AllCampusesView;