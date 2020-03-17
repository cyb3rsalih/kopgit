import axios from 'axios';
const prod = 'https://api.sozlerkosku.com.tr/api';
const local = 'http://localhost:3000';

let API = axios.create({
    baseURL: `${local}`,
    responseType: 'json',
    headers: {
        'content-type': 'application/json; charset=utf-8',
    },
    withCredentials: true,
});

export default API;
