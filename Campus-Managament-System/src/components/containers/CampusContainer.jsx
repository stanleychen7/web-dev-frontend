import Header from './Header'
import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchCampusThunk } from '../../store/thunk'

import CampusView from "../views"

class CampusContainer extends Component {
    componentdidMount() {
        this.props.fetchCampus(this.props.match.params.id);
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

const mapState = (state) => {
    return {
        campus: state.campus,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(CampusContainer);