import {
	SET_USER_TOKEN,
	SET_USER_PROFILE_INFO,
	LOGIN,
	LOGIN_FULFILLED,
	LOGIN_PENDING,
	LOGIN_REJECTED,
	READY,
	ADD_REPORT,
	ADD_REPORT_FULFILLED,
	ADD_REPORT_PENDING,
	ADD_REPORT_REJECTED,
	SET_SCORE
} from '../actions/dataAction';

const initialState = {
	isReady:false,
	isSuccess: false,
	isFetching: false,
	userToken: null,
	fuserToken:null,
	userInfo: null,
	gradientColorStyles:  ['#000','#f0f'],
	currentScore:0,
	isSuccess:false,
	message:''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_TOKEN:
			return {
				...state,
				userToken: action.payload,
				isReady:true
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
			const { user,token,isSuccess } = action.payload;
			return {
				...state,
				userInfo: user,
				fuserToken: token,
				isFetching:false,
				isSuccess
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
		case ADD_REPORT:
			return {
				...state
			}
		case ADD_REPORT_PENDING:
			return {
				...state,
				isFetching:true,
			}
		case ADD_REPORT_FULFILLED:
			const { currentScore,message } = action.payload;
			return {
				...state,
				isFetching:false,
				currentScore,
				isSuccess: action.payload.isSuccess,
				message
			}
		case ADD_REPORT_REJECTED:
			return {
				...state,
				isSuccess:false,
				isFetching:false
			}
		case SET_SCORE:
			return {
				...state,
				currentScore:action.payload
			}
		case READY:
			return{
				...state,
				isReady:action.payload
			}

		default:
			return state;
	}
};
