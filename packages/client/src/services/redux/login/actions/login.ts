import * as loginAPI from './../../../http/login';
import { AppDispatch, AppThunk } from './../../../../types/common';

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST' as const;
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS' as const;
export const USER_REGISTRATION_FAILED = 'USER_REGISTRATION_FAILED' as const;

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const
export const LOGIN_FAILED = 'LOGIN_FAILED' as const

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const
export const LOGOUT_FAILED = 'LOGOUT_FAILED' as const

interface IAction<T> {
  readonly type: T
}

interface IUser<T> extends IAction<T> {
  readonly user: {
    login: string
    email: string
    phone?: string
    display_name?: string
    first_name?: string
    second_name?: string
  }
}

interface IRegistration {
  login: string
  email: string
  phone?: string
  first_name?: string
  second_name?: string
  password: string
}

interface IAuthorization {
  login: string
  password: string
}

export type TLoginActions =
  | IAction<typeof USER_REGISTRATION_REQUEST>
  | IAction<typeof USER_REGISTRATION_SUCCESS>
  | IAction<typeof USER_REGISTRATION_FAILED>
  | IAction<typeof LOGIN_REQUEST>
  | IAction<typeof LOGIN_SUCCESS>
  | IAction<typeof LOGIN_FAILED>
  | IAction<typeof LOGOUT_REQUEST>
  | IAction<typeof LOGOUT_SUCCESS>
  | IAction<typeof LOGOUT_FAILED>

export const registration: AppThunk = (data: IRegistration) => {
  return function (dispatch) {
    dispatch({
      type: USER_REGISTRATION_REQUEST,
    })
    loginAPI
      .registerUser(data)
      .then(res => {
        if (res) {
          //setTokens(res)
          dispatch({
            type: USER_REGISTRATION_SUCCESS,
            user: res,
          })
        } else {
          dispatch({
            type: USER_REGISTRATION_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: USER_REGISTRATION_FAILED,
        })
      })
  }
}


export const authorization: AppThunk = (data: IAuthorization) => {
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