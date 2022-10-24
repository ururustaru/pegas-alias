import { TUserActions } from './../type/type';
import { UserInfo } from '../../../../types/user';
import { USER_REQUEST_SUCCESS } from '../type/const';

type TUserInitialState = {
  user: UserInfo
}

const userInitialState: TUserInitialState = {
  user: {
    id: 0,
    first_name: '',
    second_name: '',
    display_name: '',
    email: '',
    login: '',
    phone: '',
    avatar: ''
  }
}

export const userReducer = (state = userInitialState, action: TUserActions): TUserInitialState => {

  switch (action.type) {
    case USER_REQUEST_SUCCESS: {
      console.log('salam')
      return{
        ...state,
        user: action.user
      }
    }
    // case USER_REQUEST: {
    //   return {
    //     ...state,
    //     userRequest: {},
    //   }
    // }
    // case USER_REGISTRATION_SUCCESS: {
    //     return {
    //         ...state,
    //         userRequest: false,
    //         login: action.user.login,
    //         email: action.user.email,
    //         isLoggedIn: true,
    //     }
    // }
    default: {
      return state
    }
  }
}
