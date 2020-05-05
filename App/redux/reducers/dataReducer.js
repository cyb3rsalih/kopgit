import { LOADING, SET_USER_TOKEN, SET_USER_PROFILE_INFOS } from '../actions/dataAction';

const initialState = {
	isLoading: true,
	userToken: null,
	userInfos: null,
	gradientColorStyles: [ '#555555', '#000000' ]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_TOKEN:
			return {
				...state,
				userToken: action.payload
			};
		case SET_USER_PROFILE_INFOS:
			return {
				...state,
				userInfos: action.payload
			};
		case LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		default:
			return state;
	}
};
