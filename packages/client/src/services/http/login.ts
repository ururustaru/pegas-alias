import { instanse } from './axios'

export const registerUser = (data: any) => {
  return instanse
    .post('/auth/signup', data)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export const loginUser = (data: any) => {
  return instanse
    .post('/auth/signin', data)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export const logoutUser = () => {
  return instanse
    .post('/auth/logout')
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
