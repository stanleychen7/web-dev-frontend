import * as at from '../actions/actionTypes';

const allCampuses = (state = [], action) => {
    switch(action.type) {
        case at.FETCH_ALL_CAMPUSES:
            return action.payload;
        case at.FETCH_CAMPUS:
            // Add or update the single campus in the list
            const campus = action.payload;
            const exists = state.find(c => c.id === campus.id);
            if (exists) {
                return state.map(c => c.id === campus.id ? campus : c);
            } else {
                return [...state, campus];
            }
        case at.ADD_CAMPUS:
            return [...state, action.payload];
        case at.DELETE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case at.EDIT_CAMPUS:
            return state.map(campus =>
                campus.id === action.payload.id ? action.payload : campus
            );
        default:
            return state;
    }
};

export default allCampuses;