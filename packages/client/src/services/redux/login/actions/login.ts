import * as loginAPI from './../../../http/login';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, USER_SIGNUP_FAILED, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../type/const';
import { AppThunk } from '../../common';
import { UserLogin, UserSignup } from '../../../../types/user';

export const registration: AppThunk = (data: UserSignup) => {
  return function (dispatch) {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })
    loginAPI
      .registerUser(data)
      .then(res => {
        if (res) {
          //setTokens(res)
          dispatch({
            type: USER_SIGNUP_SUCCESS,
            user: res,
          })
        } else {
          dispatch({
            type: USER_SIGNUP_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: USER_SIGNUP_FAILED,
        })
      })
  }
}


export const authorization: AppThunk = (data: UserLogin) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })
    loginAPI
      .loginUser(data)
      .then(res => {
        if (res) {
          //setTokens(res)
          dispatch({
            type: LOGIN_SUCCESS,
            user: res,
          })
        } else {
          dispatch({
            type: LOGIN_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILED,
        })
      })
  }
}