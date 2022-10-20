import { UserInfo } from "../../../../types/user";
import {
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_REQUEST,
  USER_REQUEST_FAILED,
  USER_REQUEST_SUCCESS,
  USER_UPDATE_PASSWORD_FAILED,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS
} from "./const";

interface IAction<T> {
  readonly type: T;
}

interface IUser<T> extends IAction<T> {
  readonly user: UserInfo;
}


type TUserUpdatePasswordConst = typeof USER_UPDATE_PASSWORD_FAILED | typeof USER_UPDATE_PASSWORD_REQUEST | typeof USER_UPDATE_PASSWORD_SUCCESS;
type TUserUpdatePassword = IAction<TUserUpdatePasswordConst>;

type TUserRequestConst = typeof USER_REQUEST | typeof USER_REQUEST_FAILED;
type TUserRequest = IAction<TUserRequestConst> | IUser<typeof USER_REQUEST_SUCCESS>;

type TUserUpdateConst = typeof UPDATE_USER_FAILED | typeof UPDATE_USER_REQUEST;
type TUserUpdate = IAction<TUserUpdateConst> | IUser<typeof UPDATE_USER_SUCCESS>;


export type TUserActions = TUserUpdatePassword | TUserRequest | TUserUpdate;

