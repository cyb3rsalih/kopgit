import { LOADING, SET_USER_TOKEN } from '../actions/dataAction';

const initialState = {
    isLoading: true,
    userToken: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload,
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};
