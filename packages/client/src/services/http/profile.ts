import { apiInstance } from './axios'

export const getUserAPI = async () => {
  return await apiInstance
    .get('/auth/user')
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export const changeProfileAPI = (data: any) => {
  return apiInstance
    .put('/user/profile', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export const changePasswordAPI = (data: any) => {
  return apiInstance
    .put('/user/password', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export const changeProfileAvatarAPI = (data: any) => {
  return apiInstance
    .put('/user/profile/avatar', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
