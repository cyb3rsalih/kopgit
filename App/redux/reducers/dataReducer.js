import { LOADING, SET_USER_TOKEN, SET_MISSION, MISSIONS_DATA } from '../actions/dataAction';

const initialState = {
	isLoading: true,
	userToken: null,
	missions: []
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
		case MISSIONS_DATA:
			return state, state.missions.concat(action.payload);
		case SET_MISSION:
			return {
				...state,
				missions: { isActive: true }
			};
		default:
			return state;
	}
};
