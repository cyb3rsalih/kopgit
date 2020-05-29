import axios from 'axios';
const prod = 'https://kopgitapi.atalayemrah.com/api';
const local = 'http://localhost:3000';

let API = axios.create({
	baseURL: `${prod}`,
	responseType: 'json',
	headers: {
		'content-type': 'application/json; charset=utf-8'
	},
	withCredentials: true
});

export default API;
