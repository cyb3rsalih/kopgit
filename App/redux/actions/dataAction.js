import API from '../../config/API';
import { loginUrl } from '../../config/urls';

export const LOADING = 'LOADING';

export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_PROFILE_INFOS = 'SET_USER_PROFILE_INFOS';
export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export function setUserToken(token) {
	return {
		type: SET_USER_TOKEN,
		payload: token
	};
}

export function setUserProfileInfos(userInfos) {
	return {
		type: SET_USER_PROFILE_INFOS,
		payload: userInfos
	};
}

export function loading(payload) {
	return {
		type: LOADING,
		payload
	};
}

export function loginUser(userData) {
	return {
		type: LOGIN,
		payload: API.post(loginUrl, userData).then((res) => res.data)
	};
}
