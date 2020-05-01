import API from '../../config/API';
export const LOADING = 'LOADING';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const USER_LOGIN = 'USER_LOGIN';
export const SET_MISSION = 'SET_MISSION';
export const MISSIONS_DATA = 'MISSIONS_DATA';

export function userLogin(loginData) {
	return {
		type: USER_LOGIN,
		payload: loginData
	};
}

export function setUserToken(token) {
	return {
		type: SET_USER_TOKEN,
		payload: token
	};
}
export function setMission(id) {
	return {
		type: SET_MISSION,
		payload: id
	};
}
export function missionsData(payload) {
	return {
		type: MISSIONS_DATA,
		payload
	};
}
export function loading(payload) {
	return {
		type: LOADING,
		payload
	};
}
