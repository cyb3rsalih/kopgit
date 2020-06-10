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


export function deleteReport(readingReportId){
	return {
		type: DELETE_REPORT,
		payload: API.post('/ReadingLog/DeleteUserReport', readingReportId).then((res) => res.data)
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
