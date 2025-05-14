import { FETCH_CAMPUS } from '../actions/actionTypes';

const initialState = {
  name: null,
  address: null,
  description: null,
  imageUrl: null,
  Students: []
};

const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campus;