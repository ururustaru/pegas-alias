import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  TLoginActions
} from './../actions/login';

type TLoginInitState = {
  user: any
  userRegistration: any
  login: any
  logout: any
}

const userInitialState: TLoginInitState = {
  user: {},
  userRegistration: {},
  login: {},
  logout: {}
}

export const loginReducer = (state = userInitialState, action: TLoginActions) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST: {
      return {
        ...state,
        userRegistration: {
          request: true,
          success: false,
        },
      }
    }
    default: {
      return state
    }
  }
}