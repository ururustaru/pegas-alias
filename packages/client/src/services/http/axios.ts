import axios from 'axios'
import { YA_PRACTICUM_URL } from '../../constants'

export const apiInstance = axios.create({
  baseURL: YA_PRACTICUM_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export const serverInstance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
