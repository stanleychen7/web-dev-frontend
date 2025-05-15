import Header from './Header'
import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampusThunk, fetchAllStudentsThunk, editStudentThunk, deleteCampusThunk } from '../../store/thunk'
import { useParams, useNavigate } from 'react-router-dom'

import CampusView from "../views/CampusView"

class CampusContainer extends Component {
    handleDeleteCampus = async (campusId) => {
        await this.props.deleteCampus(campusId);
        this.props.navigate('/campuses');
    };

    componentDidMount() {
        this.props.fetchCampus(this.props.campusId);
        this.props.fetchAllStudents();
    }

    render () {
        return (
            <div>
                <Header/>
                <CampusView
                    campus={this.props.campus}
                    students={this.props.students}
                    onEnroll={this.props.editStudent}
                    onRemoveStudent={async (student) => {
                        await this.props.editStudent({ ...student, campusId: null });
                        this.props.fetchCampus(this.props.campusId);
                    }}
                    onDeleteCampus={this.handleDeleteCampus}
                />
            </div>
        );
    }
}

const mapState = (state) => ({
    campus: state.campus,
    students: state.students,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  editStudent: (student) => dispatch(editStudentThunk(student)),
  deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
});

const CampusContainerWrapper = (props) => {
    const { campusId } = useParams();
    const navigate = useNavigate();
    return <CampusContainer {...props} campusId={campusId} navigate={navigate}/>
}

export default connect(mapState, mapDispatch)(CampusContainerWrapper);