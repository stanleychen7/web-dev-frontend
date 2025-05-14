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
    const newStudent = await this.props.addStudent(form);
    if (newStudent && newStudent.id) {
      this.props.navigate(`/student/${newStudent.id}`);
    } else {
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