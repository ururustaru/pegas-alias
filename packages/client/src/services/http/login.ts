import { apiInstance } from './axios'

export const registerUser = (data: Record<string, unknown>) => {
  apiInstance
    .post('/auth/signup', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

export const loginUser = (data: Record<string, unknown>) => {
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
export const signInYaOAuth = (data: Record<string, unknown>) => {
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
