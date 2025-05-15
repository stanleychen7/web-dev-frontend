import Header from './Header'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentView from '../views/StudentView'
import { fetchStudentThunk } from '../../store/thunk';
import { useParams } from 'react-router-dom';

class StudentContainer extends Component {
    componentDidMount () {
        this.props.fetchStudent(this.props.studentId);
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

// Wrapper to inject params as props
const StudentContainerWrapper = (props) => {
    const { studentId } = useParams();
    return <StudentContainer {...props} studentId={studentId} />;
};

export default connect(mapState, mapDispatch)(StudentContainerWrapper);