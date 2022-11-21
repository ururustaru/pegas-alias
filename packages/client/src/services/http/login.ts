import { instanse } from './axios'

export const registerUser = (data: any) => {
  instanse
    .post('/auth/signup', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export const loginUser = (data: any) => {
  instanse
    .post('/auth/signin', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export const signUpYaOAuth = () => {
  const result = instanse
    .get('/oauth/yandex/service-id')
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
  return result
}
export const signInYaOAuth = (data: any) => {
  const result = instanse
    .post('/oauth/yandex', data)
    .then(response => response)
    .catch(error => {
      console.log(error)
    })
  return result
}
export const logoutUser = () => {
  instanse.post('/auth/logout')
}
