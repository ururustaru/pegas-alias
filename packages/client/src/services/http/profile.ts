
import { instanse } from './axios';

export const getUserAPI = async () => {
  const result = await instanse.get('/auth/user')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
  return result;
}

export const changeProfileAPI = (data: any) => {
  const result = instanse.put('/user/profile', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    })
  return result;
}

export const changePasswordAPI = (data: any) => {
  const result = instanse.put('/user/password', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    })
  return result;
}

export const changeProfileAvatarAPI = (data: any) => {
  const result = instanse.put('/user/profile/avatar', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    })
  return result;
}