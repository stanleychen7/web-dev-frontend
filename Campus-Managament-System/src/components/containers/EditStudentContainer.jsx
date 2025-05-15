import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import EditStudentView from "../views/EditStudentView";
import Header from "./Header";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunk";

// Wrapper to inject params and navigation into class component
function EditStudentContainerWrapper(props) {
  const { studentId } = useParams();
  const navigate = useNavigate();
  return <EditStudentContainer {...props} studentId={studentId} navigate={navigate} />;
}

class EditStudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.studentId);
  }

  handleSubmit = async (form) => {
    // Merge the id into the form object
    const updatedStudent = await this.props.editStudent({ ...form, id: this.props.studentId });
    if (updatedStudent && updatedStudent.id) {
      this.props.navigate(`/students/${updatedStudent.id}`);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <EditStudentView student={this.props.student} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainerWrapper);