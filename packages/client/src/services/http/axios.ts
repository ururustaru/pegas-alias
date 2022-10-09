import axios from 'axios';

export const instanse = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2',
    withCredentials: true,
    headers:{
        'Content-Type': 'application/json; charset=utf-8'
    }
})