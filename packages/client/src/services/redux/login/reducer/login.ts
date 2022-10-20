import { USER_SIGNUP_REQUEST } from "../type/const"
import { TLoginActions } from "../type/type"

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
    case USER_SIGNUP_REQUEST: {
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