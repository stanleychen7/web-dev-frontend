import Header from './Header'
import { Component } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import NewStudentView from '../views/NewStudentView'
import { addStudentThunk } from '../../store/thunk'

// Wrapper to use hooks in class component
function NewStudentContainerWrapper(props) {
  const navigate = useNavigate();
  return <NewStudentContainer {...props} navigate={navigate} />;
}

class NewStudentContainer extends Component {
  handleSubmit = async (form) => {
    const cleanedForm = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        imageUrl: form.imageUrl?.trim() || null,
        gpa: form.gpa.trim() || 0
    };
    const newStudent = await this.props.addStudent(cleanedForm);
    if (newStudent && newStudent.id) {
      this.props.navigate('/students');
    }
  };

  render() {
    return (
      <div>
        <Header />
        <NewStudentView onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student)),
});

export default connect(null, mapDispatch)(NewStudentContainerWrapper);