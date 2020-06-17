import API from '../../config/API';
import { loginUrl } from '../../config/urls';

export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';
export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const ADD_REPORT = 'ADD_REPORT'
export const ADD_REPORT_PENDING = 'ADD_REPORT_PENDING'
export const ADD_REPORT_FULFILLED = 'ADD_REPORT_FULFILLED'
export const ADD_REPORT_REJECTED = 'ADD_REPORT_REJECTED'
export const SET_SCORE = 'SET_SCORE'
export const READY = 'READY'
export const GET_REPORTS = "GET_REPORTS"
export const GET_REPORTS_PENDING = "GET_REPORTS_PENDING"
export const GET_REPORTS_FULFILLED = "GET_REPORTS_FULFILLED"
export const GET_REPORTS_REJECTED = "GET_REPORTS_REJECTED"
export const DELETE_REPORT = "DELETE_REPORT"
export const DELETE_REPORT_PENDING = "DELETE_REPORT_PENDING"
export const DELETE_REPORT_FULFILLED = "DELETE_REPORT_FULFILLED"
export const DELETE_REPORT_REJECTED = "DELETE_REPORT_REJECTED"
export const LIST_FAQ = "LIST_FAQ"
export const LIST_FAQ_PENDING = "LIST_FAQ_PENDING"
export const LIST_FAQ_FULFILLED = "LIST_FAQ_FULFILLED"
export const LIST_FAQ_REJECTED = "LIST_FAQ_REJECTED"
export const GET_LEVELS = "GET_LEVELS"
export const GET_LEVELS_PENDING = "GET_LEVELS_PENDING"
export const GET_LEVELS_FULFILLED = "GET_LEVELS_FULFILLED"
export const GET_LEVELS_REJECTED = "GET_LEVELS_REJECTED"
export const CREATE_USER = "CREATE_USER"
export const CREATE_USER_PENDING = "CREATE_USER_PENDING"
export const CREATE_USER_FULFILLED = "CREATE_USER_FULFILLED"
export const CREATE_USER_REJECTED = "CREATE_USER_REJECTED"



export function getLevels(){
	return {
		type: GET_LEVELS,
		payload: API.get('/Level/GetUserLevels').then((res) => res.data).catch((onrejected) => {
			console.log(onrejected)
		})
	};
}

export function listFaq(){
	return {
		type: LIST_FAQ,
		payload: API.get('/Faqs/ListFaq').then((res) => res.data)
	};
}

export function deleteReport(readingReportId){
	return {
		type: DELETE_REPORT,
		payload: API.post('/ReadingLog/DeleteUserReport', readingReportId).then((res) => res.data)
	};
}

export function createUser(registerData){
	return {
		type: CREATE_USER,
		payload: API.post('/Auth/CreateUser',registerData).then((res) => res.data).catch((onrejected) => {
			console.log(onrejected)
		})
	};
}

export function loginUser(userData) {
	return {
		type: LOGIN,
		payload: API.post('/Auth/Login', userData).then((res) => res.data)
	};
}

export function addUserReport(data){
	return {
		type: ADD_REPORT,
		payload: API.post('/ReadingLog/AddUserReport', data).then((res) => res.data)
	};
}

export function getUserReadingReports(data){
	return {
		type: GET_REPORTS,
		payload: API.post('/ReadingLog/GetUserReadingReports', data).then((res) => res.data)
	};
}

export function setScore(payload) {
	return {
		type: SET_SCORE,
		payload
	};
}

export function isReady(payload) {
	return {
		type: READY,
		payload
	};
}

export function setUserToken(token) {
	return {
		type: SET_USER_TOKEN,
		payload: token,
	};
}

export function setUserProfileInfo(userInfo) {
	return {
		type: SET_USER_PROFILE_INFO,
		payload: userInfo
	};
}
