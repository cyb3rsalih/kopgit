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
	SET_SCORE,
	GET_REPORTS,
	GET_REPORTS_FULFILLED,
	GET_REPORTS_PENDING,
	GET_REPORTS_REJECTED,
	DELETE_REPORT,
	DELETE_REPORT_FULFILLED,
	DELETE_REPORT_PENDING,
	DELETE_REPORT_REJECTED,
	LIST_FAQ,
	LIST_FAQ_PENDING,
	LIST_FAQ_FULFILLED,
	LIST_FAQ_REJECTED,
	GET_LEVELS,
	GET_LEVELS_FULFILLED,
	GET_LEVELS_PENDING,
	GET_LEVELS_REJECTED,
	CREATE_USER,
	CREATE_USER_PENDING,
	CREATE_USER_FULFILLED,
	CREATE_USER_REJECTED
	
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
	message:'',
	userReadingReports:[],
	faqs:[],
	userLevels:[],
	isAllTasksCompleted:false
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
		case GET_REPORTS:
			return {
				...state
			}
		case GET_REPORTS_PENDING:
			return {
				...state,
				isFetching:true
			}
		
		case GET_REPORTS_FULFILLED:
			return {
				...state,
				isFetching:false,
				userReadingReports:action.payload.userReadingReports,
				isSuccess:action.payload.isSuccess,
				message:action.payload.message
			}
		case GET_REPORTS_REJECTED:
			return {
				...state,
				isFetching:false,
				message:'BİR ŞEYLER TERS GİTTİ...'
			}
		case DELETE_REPORT:
			return {
				...state
			}
		case DELETE_REPORT_FULFILLED:
			return {
				...state,
				isFetching:false
			}
		case DELETE_REPORT_PENDING:
			return {
				...state,
				isFetching:true
			}
		case DELETE_REPORT_REJECTED:
			return {
				...state,
				isFetching:false
			}
		case LIST_FAQ:
			return {
				...state
			}
		case LIST_FAQ_FULFILLED:
			return {
				...state,
				faqs:action.payload,
				isFetching:false
			}
		case LIST_FAQ_PENDING:
			return {
				...state,
				isFetching:true
			}
		case LIST_FAQ_REJECTED:
			return {
				...state,
				isFetching:false
			}
		case GET_LEVELS:
			return {
				...state
			}
		case GET_LEVELS_FULFILLED:
			return {
				...state,
				userLevels:action.payload.userLevels,
				isSuccess:action.payload.isSuccess,
				isFetching:false
			}
		case GET_LEVELS_PENDING:
			return {
				...state,
				isFetching:true
			}
		case GET_LEVELS_REJECTED:
			return {
				...state,
				isFetching:false
			}
		case CREATE_USER:
			return {
				...state
			}
		case CREATE_USER_FULFILLED:
			return {
				...state,
				isSuccess:action.payload.isSuccess,
				isFetching:false
			}
		case CREATE_USER_PENDING:
			return {
				...state,
				isFetching:true
			}
		case CREATE_USER_REJECTED:
			return {
				...state,
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
