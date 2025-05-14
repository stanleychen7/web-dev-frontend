import Header from './Header'
import { Component } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addCampusThunk } from '../../store/thunk'
import NewCampusView from '../views/NewCampusView'

// Wrapper to use hooks in class component
function NewCampusContainerWrapper(props) {
  const navigate = useNavigate();
  return <NewCampusContainer {...props} navigate={navigate} />;
}

class NewCampusContainer extends Component {
  handleSubmit = async (form) => {
    const newCampus = await this.props.addCampus(form);
    if (newCampus && newCampus.id) {
      this.props.navigate(`/campuses/${newCampus.id}`);
    } else {
      this.props.navigate('/campuses');
    }
  };

  render() {
    return (
      <div>
        <Header />
        <NewCampusView onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default connect(null, mapDispatch)(NewCampusContainerWrapper);