import API from '../../config/API';

export const LOADING = 'LOADING';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_PROFILE_INFOS = 'SET_USER_PROFILE_INFOS';

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
