import { LOADING, SET_USER_TOKEN, SET_MISSION, MISSIONS_DATA, USER_LOGIN } from '../actions/dataAction';

const initialState = {
	isLoading: true,
	userToken: null,
	isSuccess: false,
	user: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_TOKEN:
			return {
				...state,
				userToken: action.payload
			};
		case LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		case USER_LOGIN:
			return {
				...state,
				userToken: action.payload.token,
				isSuccess: action.payload.isSuccess,
				user: action.payload.user
			};
		case SET_MISSION:
			return {
				...state,
				missions: { isActive: true }
			};
		default:
			return state;
	}
};
