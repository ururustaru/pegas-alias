import * as userAPI from '../http/profile'
import * as loginAPI from '../http/login'
import { AppDispatch, AppThunk } from '../../types/common'
//import { setTokens, signOut } from '../../utils/utils'
export const USER_REQUEST = 'USER_REQUEST' as const
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS' as const
export const USER_REGISTRATION_FAILED = 'USER_REGISTRATION_FAILED' as const
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS' as const
export const USER_REQUEST_FAILED = 'USER_REQUEST_FAILED' as const
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST' as const
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS' as const
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED' as const
export const USER_UPDATE_PASSWORD_REQUEST =
  'USER_UPDATE_PASSWORD_REQUEST' as const
export const USER_UPDATE_PASSWORD_SUCCESS =
  'USER_UPDATE_PASSWORD_SUCCESS' as const
export const USER_UPDATE_PASSWORD_FAILED =
  'USER_UPDATE_PASSWORD_FAILED' as const
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST' as const
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS' as const
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED' as const
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const
export const LOGOUT_FAILED = 'LOGOUT_FAILED' as const
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST' as const
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS' as const
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED' as const
export const TOKEN_REQUEST = 'TOKEN_REQUEST' as const
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS' as const
export const TOKEN_FAILED = 'TOKEN_FAILED' as const
interface IUserRequestAction {
  readonly type: typeof USER_REQUEST
}
interface IUserRegistrationSuccessAction {
  readonly type: typeof USER_REGISTRATION_SUCCESS
  readonly user: {
    login: string
    email: string
  }
}
interface IUserRegistrationFailedAction {
  readonly type: typeof USER_REGISTRATION_FAILED
}
interface IUserRequestSuccessAction {
  readonly type: typeof USER_REQUEST_SUCCESS
  readonly user: {
    login: string
    email: string
    phone?: string
    display_name?: string
    first_name?: string
    second_name?: string
  }
}
interface IUserRequestFailedAction {
  readonly type: typeof USER_REQUEST_FAILED
}
interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST
}
interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS
}
interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED
}
interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST
}
interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS
}
interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED
}
interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST
}
interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS
}
interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED
}
interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST
}
interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS
  readonly user: {
    login: string
    email: string
    phone?: string
    display_name?: string
    first_name?: string
    second_name?: string
  }
}
interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED
}
interface ITokenRequestAction {
  readonly type: typeof TOKEN_REQUEST
}
interface ITokenSuccessAction {
  readonly type: typeof TOKEN_SUCCESS
}
interface ITokenFailedAction {
  readonly type: typeof TOKEN_FAILED
}
interface IUserUpdatePasswordRequestAction {
  readonly type: typeof USER_UPDATE_PASSWORD_REQUEST
}
interface IUserUpdatePasswordSuccessAction {
  readonly type: typeof USER_UPDATE_PASSWORD_SUCCESS
}
interface IUserUpdatePasswordFaiedAction {
  readonly type: typeof USER_UPDATE_PASSWORD_FAILED
}
export type TUserActions =
  | IUserRequestAction
  | IUserRegistrationSuccessAction
  | IUserRegistrationFailedAction
  | IUserRequestSuccessAction
  | IUserRequestFailedAction
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | ITokenRequestAction
  | ITokenSuccessAction
  | ITokenFailedAction
  | IUserUpdatePasswordRequestAction
  | IUserUpdatePasswordSuccessAction
  | IUserUpdatePasswordFaiedAction
interface IRegistration {
  login: string
  email: string
  password: string
}
export const registration: AppThunk = (data: IRegistration) => {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST,
    })
    loginAPI
      .registerUser(data)
      .then(res => {
        if (res) {
          //setTokens(res)
          dispatch({
            type: USER_REGISTRATION_SUCCESS,
            user: res.data.user,
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
interface IAuthorization {
  email: string
  password: string
}
export const authorization: AppThunk = (data: IAuthorization) => {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST,
    })
    loginAPI
      .loginUser(data)
      .then(res => {
        if (res) {
          //setTokens(res)
          dispatch({
            type: USER_REQUEST_SUCCESS,
            user: res.data.user,
          })
        } else {
          dispatch({
            type: USER_REQUEST_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: USER_REQUEST_FAILED,
        })
      })
  }
}
/*
interface IForgotPassword {
  email: string
}
export const forgotPassword: AppThunk = (email: IForgotPassword) => {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    })
    loginAPI.forgotPasswordUser(email)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          })
        } else {
          dispatch({
            type: FORGOT_PASSWORD_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        })
      })
  }
}
interface IResetPassword {
  password: string
  token: string
}
export const resetPassword: AppThunk = (data: IResetPassword) => {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    })
    loginAPI.resetPasswordUser(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          })
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        })
      })
  }
}*/
export const logout: AppThunk = (callback: () => void) => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    })
    loginAPI
      .logoutUser()
      .then(res => {
        if (res) {
          dispatch({
            type: LOGOUT_SUCCESS,
          })
          //signOut()
          callback()
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: LOGOUT_FAILED,
        })
      })
  }
}
/*export const getNewToken: AppThunk = () => {
  return function (dispatch) {
    dispatch({
      type: TOKEN_REQUEST,
    })
    loginAPI.refreshToken()
      .then(res => {
        if (res && res.success) {
          setTokens(res)
          dispatch({
            type: TOKEN_SUCCESS,
          })
        } else {
          dispatch({
            type: TOKEN_FAILED,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: TOKEN_FAILED,
        })
      })
  }
}*/
interface IChangeUserProfile {
  login: string
  email: string
  phone?: string
  display_name?: string
  first_name?: string
  second_name?: string
}
export const changeUserProfile: AppThunk = (data: IChangeUserProfile) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    })
    userAPI
      .changeProfileAPI(data)
      .then(res => {
        if (res) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.data.user,
          })
        } else {
          dispatch({
            type: UPDATE_USER_FAILED,
          })
        }
      })
      .catch(err => {
        /*if (
          err.message === 'jwt expired' ||
          err.message === 'Token is invalid'
        ) {
          dispatch(getNewToken())
          dispatch(changeUserProfile(data))
        } else {*/
        dispatch({
          type: UPDATE_USER_FAILED,
        })
        //}
      })
  }
}
interface IChangeUserPassword {
  oldPassword: string
  newPassword: string
}
export const changeUserPassword: AppThunk = (data: IChangeUserPassword) => {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_PASSWORD_REQUEST,
    })
    userAPI
      .changePasswordAPI(data)
      .then(res => {
        if (res) {
          dispatch({
            type: USER_UPDATE_PASSWORD_SUCCESS,
          })
        } else {
          dispatch({
            type: USER_UPDATE_PASSWORD_FAILED,
          })
        }
      })
      .catch(err => {
        /*if (
          err.message === 'jwt expired' ||
          err.message === 'Token is invalid'
        ) {
          dispatch(getNewToken())
          dispatch(changeUserProfile(data))
        } else {*/
        dispatch({
          type: USER_UPDATE_PASSWORD_FAILED,
        })
        //}
      })
  }
}
export const getUser: AppThunk = () => {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST,
    })
    userAPI
      .getUserAPI()
      .then(res => {
        if (res) {
          dispatch({
            type: USER_REQUEST_SUCCESS,
            user: res.user,
          })
        } else {
          dispatch({
            type: USER_REQUEST_FAILED,
          })
        }
      })
      .catch(err => {
        /*if (
          err.message === 'jwt expired' ||
          err.message === 'Token is invalid'
        ) {
          dispatch(getNewToken())
          dispatch(getUser())
        } else {*/
        dispatch({
          type: USER_REQUEST_FAILED,
        })
        //}
      })
  }
}
