import Header from './Header'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentView from '../views/StudentView'
import { fetchStudentThunk } from '../../store/thunk';

class StudentContainer extends Component {
    componentDidMount () {
        this.props.fetchStudents(this.props.match.params.id);
    }


    render () {
        return (
            <div>
                <Header/>
                <StudentView student={this.props.student}/>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        student: state.student,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    };
};

export default connect(mapState, mapDispatch)(StudentContainer);

