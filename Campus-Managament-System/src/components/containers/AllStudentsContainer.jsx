import Header from './Header'
import { Component } from 'react'
import { connect } from 'react-redux'

import {
    fetchAllStudentsThunk,
    deleteStudentThunk
} from '../../store/thunk'

import AllStudentView from '../views/AllStudentsView'

class AllStudentsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllStudents();
    }

    render () {
        return (
            <div>
                <Header/>
                <AllStudentView 
                    allStudents={this.props.allStudents}
                    onDeleteStudent={this.props.deleteStudent}/>
            </div>
        );
    };
} 

const mapState = (state) => {
    return {
        allStudents: state.allStudents,
    };
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    };
};

export default connect(mapState, mapDispatch)(AllStudentsContainer);
