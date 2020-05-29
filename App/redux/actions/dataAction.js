import API from '../../config/API';
import { loginUrl } from '../../config/urls';

export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';
export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const READY = 'READY'

export function loginUser(userData) {
	return {
		type: LOGIN,
		payload: API.post(loginUrl, userData).then((res) => res.data)
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
		payload: token
	};
}

export function setUserProfileInfo(userInfo) {
	return {
		type: SET_USER_PROFILE_INFO,
		payload: userInfo
	};
}
