import Header from './Header'
import { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { fetchAllCampusesThunk } from '../../store/thunk'
import AllCampusesView from '../views/AllCampusView'

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
        <Header />
        <AllCampusesView
          allCampuses={this.props.allCampuses}
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
    };
};

AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllCampusesContainer);