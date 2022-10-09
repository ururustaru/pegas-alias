import { instanse } from './axios';

export const registerUser = (data: any) => {
  instanse.post('/auth/signup', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}

export const loginUser = (data: any) => {
  instanse.post('/auth/signin', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}

export const logoutUser = () => {
  instanse.post('/auth/logout');
}