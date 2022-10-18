import {
  USER_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_FAILED,
  TUserActions,
  USER_UPDATE_PASSWORD_FAILED,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
} from '../actions/index'
type TUserInitialState = {
  login: string
  email: string
  phone: string
  display_name: string
  first_name: string
  second_name: string
  userRequest: boolean
  isLoggedIn: boolean
  passwordRequest: boolean
  isForgotPassword: boolean
  resetPasswordRequest: boolean
  isResetPassword: boolean
  logoutRequest: boolean
  logoutFailed: boolean
  updateUserRequest: boolean
  updateUserSuccess: boolean
  tokenRequest: boolean
  tokenSuccess: boolean
  updatePasswordRequest: boolean
  updatePasswordSuccess: boolean
}
const userInitialState: TUserInitialState = {
  login: '',
  email: '',
  phone: '',
  display_name: '',
  first_name: '',
  second_name: '',
  userRequest: false,
  isLoggedIn: false,
  passwordRequest: false,
  isForgotPassword: false,
  resetPasswordRequest: false,
  isResetPassword: true,
  logoutRequest: false,
  logoutFailed: false,
  updateUserRequest: false,
  updateUserSuccess: false,
  tokenRequest: false,
  tokenSuccess: false,
  updatePasswordRequest: false,
  updatePasswordSuccess: false,
}
export const userReducer = (
  state = userInitialState,
  action: TUserActions
): TUserInitialState => {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
      }
    }
    case USER_REGISTRATION_SUCCESS: {
      return {
        ...state,
        userRequest: false,
        login: action.user.login,
        email: action.user.email,
        isLoggedIn: true,
      }
    }
    case USER_REGISTRATION_FAILED: {
      return {
        ...state,
        userRequest: false,
        isLoggedIn: false,
        email: '',
        login: '',
      }
    }
    case USER_REQUEST_SUCCESS: {
      return {
        ...state,
        userRequest: false,
        login: action.user.login,
        email: action.user.email,
        phone: action.user.phone ? action.user.phone : '',
        display_name: action.user.display_name ? action.user.display_name : '',
        first_name: action.user.first_name ? action.user.first_name : '',
        second_name: action.user.second_name ? action.user.second_name : '',
        isLoggedIn: true,
      }
    }
    case USER_REQUEST_FAILED: {
      return {
        ...state,
        userRequest: false,
        isLoggedIn: false,
        email: '',
        login: '',
        phone: '',
        display_name: '',
        first_name: '',
        second_name: '',
      }
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        passwordRequest: true,
        isResetPassword: false,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        passwordRequest: false,
        isForgotPassword: true,
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        passwordRequest: false,
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        isResetPassword: true,
        isForgotPassword: false,
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        email: '',
        login: '',
        phone: '',
        display_name: '',
        first_name: '',
        second_name: '',
        logoutRequest: false,
        logoutFailed: false,
        isLoggedIn: false,
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserSuccess: false,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserSuccess: true,
        login: action.user.login,
        email: action.user.email,
        phone: action.user.phone ? action.user.phone : '',
        display_name: action.user.display_name ? action.user.display_name : '',
        first_name: action.user.first_name ? action.user.first_name : '',
        second_name: action.user.second_name ? action.user.second_name : '',
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserSuccess: false,
      }
    }
    case TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
        tokenSuccess: false,
      }
    }
    case TOKEN_SUCCESS: {
      return {
        ...state,
        tokenRequest: false,
        tokenSuccess: true,
      }
    }
    case TOKEN_FAILED: {
      return {
        ...state,
        tokenRequest: false,
        tokenSuccess: false,
      }
    }
    case USER_UPDATE_PASSWORD_REQUEST: {
      return {
        ...state,
        updatePasswordRequest: true,
        updatePasswordSuccess: false,
      }
    }
    case USER_UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        updatePasswordRequest: false,
        updatePasswordSuccess: true,
      }
    }
    case USER_UPDATE_PASSWORD_FAILED: {
      return {
        ...state,
        updatePasswordRequest: false,
        updatePasswordSuccess: false,
      }
    }
    default: {
      return state
    }
  }
}
