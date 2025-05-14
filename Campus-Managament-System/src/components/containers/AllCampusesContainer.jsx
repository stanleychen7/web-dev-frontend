import Header from './Header'
import { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { fetchAllCampusesThunk, deleteCampusThunk } from '../../store/thunk'
import AllCampusesView from '../views/AllCampusView'

class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
        <Header />
        <AllCampusesView
          allCampuses={this.props.allCampuses}
          onDeleteCampus={this.props.deleteCampus}
        />
      </div>
    );
  }
}

const mapState = (state) => {
    return {
        allCampuses: state.allCampuses,
    };
};


const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
    };
};

AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllCampusesContainer);