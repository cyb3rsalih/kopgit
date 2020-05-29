import {
	SET_USER_TOKEN,
	SET_USER_PROFILE_INFO,
	LOGIN,
	LOGIN_FULFILLED,
	LOGIN_PENDING,
	LOGIN_REJECTED,
	READY
} from '../actions/dataAction';

const initialState = {
	isReady:false,
	isSuccess: false,
	isFetching: false,
	userToken: null,
	userInfo: null,
	gradientColorStyles: [ '#000000', '#8877ff' ]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_TOKEN:
			return {
				...state,
				userToken: action.payload
			};
		case SET_USER_PROFILE_INFO:
			return {
				...state,
				userInfo: action.payload
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
				userInfo: user,
				userToken: token,
				isSuccess,
				isFetching:false
			};

		case LOGIN_PENDING:
			console.log('pending');
			return {
				...state,
				isFetching:true
			};

		case LOGIN_REJECTED:
			console.log('reject');
			return {
				...state,
				isSuccess: false,
				isFetching:false
			};
		case READY:
			return{
				...state,
				isReady:action.payload
			}

		default:
			return state;
	}
};
