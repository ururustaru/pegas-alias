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

export const signUpYaOAuth = () => {
  const result = apiInstance
    .get('/oauth/yandex/service-id')
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
  return result
}
export const signInYaOAuth = (data: any) => {
  const result = apiInstance
    .post('/oauth/yandex', data)
    .then(response => response)
    .catch(error => {
      console.log(error)
    })
  return result
}
export const logoutUser = () => {
  apiInstance.post('/auth/logout')
}
