import Header from './Header'
import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampusThunk } from '../../store/thunk'
import { useParams } from 'react-router-dom'

import CampusView from "../views/CampusView"

class CampusContainer extends Component {
    componentDidMount() {
        this.props.fetchCampus(this.props.campusId);
    }

    render () {
        return (
            <div>
                <Header/>
                <CampusView campus={this.props.campus}/>
            </div>
        );
    }
}

const mapState = (state) => ({
    campus: state.campus,
});

const mapDispatch = (dispatch) => ({
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
});

const CampusContainerWrapper = (props) => {
    const { campusId } = useParams();
    return <CampusContainer {...props} campusId={campusId}/>
}

export default connect(mapState, mapDispatch)(CampusContainerWrapper);