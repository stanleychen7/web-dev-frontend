import { FETCH_CAMPUS } from '../actions/actionTypes'

const initialState = {
    students: [],
};

const campus = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPUS:
            return {
                ...state,
                campus: action.payload,
            };
        default:
            return state;
    }
};

export default campus;