import API from '../../config/API';

export const LOADING = 'LOADING';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export function setUserToken(token) {
    return {
        type: SET_USER_TOKEN,
        payload: token,
    };
}

export function loading(payload) {
    return {
        type: LOADING,
        payload,
    };
}
