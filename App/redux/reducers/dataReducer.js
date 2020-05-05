import {
	LOADING,
	SET_USER_TOKEN,
	SET_USER_PROFILE_INFOS,
	LOGIN,
	LOGIN_FULFILLED,
	LOGIN_PENDING,
	LOGIN_REJECTED
} from '../actions/dataAction';

const initialState = {
	isSuccess: false,
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
		case LOGIN:
			return {
				...state
			};

		case LOGIN_FULFILLED:
			const { user, token, isSuccess } = action.payload;
			console.log('filled');
			return {
				...state,
				userInfos: user,
				userToken: token,
				isSuccess
			};

		case LOGIN_PENDING:
			console.log('pending');
			return {
				...state
			};

		case LOGIN_REJECTED:
			console.log('reject');
			return {
				...state,
				isSuccess: false
			};

		default:
			return state;
	}
};
