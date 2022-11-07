import axios from 'axios'
import { YA_PRACTICUM_URL } from '../../constants'

export const instanse = axios.create({
  baseURL: YA_PRACTICUM_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
