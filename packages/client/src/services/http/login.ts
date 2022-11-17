import { apiInstance } from './axios'

export const registerUser = (data: any) => {
  apiInstance
    .post('/auth/signup', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export const loginUser = (data: any) => {
  apiInstance
    .post('/auth/signin', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export const logoutUser = () => {
  apiInstance.post('/auth/logout')
}
