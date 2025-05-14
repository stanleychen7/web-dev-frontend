import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import EditCampusView from "../views/EditCampusView";
import Header from "./Header";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunk";

// Wrapper to inject params and navigation into class component
function EditCampusContainerWrapper(props) {
  const { campusId } = useParams();
  const navigate = useNavigate();
  return <EditCampusContainer {...props} campusId={campusId} navigate={navigate} />;
}

class EditCampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.campusId);
  }

  handleSubmit = async (form) => {
    const updatedCampus = await this.props.editCampus(this.props.campusId, form);
    if (updatedCampus && updatedCampus.id) {
      this.props.navigate(`/campuses/${updatedCampus.id}`);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <EditCampusView campus={this.props.campus} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus, 
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
});

export default connect(mapState, mapDispatch)(EditCampusContainerWrapper);