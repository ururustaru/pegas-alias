import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS
} from "./const";


interface IAction<T> {
  readonly type: T
}

type TUserSignupConst = typeof USER_SIGNUP_REQUEST | typeof USER_SIGNUP_SUCCESS | typeof USER_SIGNUP_FAILED;
type TUSerSignup = IAction<TUserSignupConst>;

type TUserLoginConst = typeof LOGIN_REQUEST | typeof LOGIN_SUCCESS | typeof LOGIN_FAILED;
type TUSerLogin = IAction<TUserLoginConst>;


export type TLoginActions = TUSerSignup | TUSerLogin