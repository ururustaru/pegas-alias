import { getUserAPI, changeProfileAPI, changePasswordAPI } from './../../../http/profile';
import {
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    USER_UPDATE_PASSWORD_FAILED,
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_SUCCESS,
} from './../type/const';
import { IUserChangePassword, UserEdit } from '../../../../types/user';
import { AppThunk } from '../../common';

export const getUser: AppThunk = () => {
    return function (dispatch) {
        dispatch({
            type: USER_REQUEST,
        })

        getUserAPI()
            .then(res => {
                if (res) {
                    dispatch({
                        type: USER_REQUEST_SUCCESS,
                        user: res,
                    })
                } else {
                    dispatch({
                        type: USER_REQUEST_FAILED,
                    })
                }
                //return res;
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
        // console.log('welcome to golag', result)
        // dispatch({
        //             type: USER_REQUEST_SUCCESS,
        //             user: result,
        //         })
    }
}


export const changeUserProfile: AppThunk = (data: UserEdit) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_REQUEST,
        })
        changeProfileAPI(data)
            .then(res => {
                if (res) {
                    dispatch({
                        type: UPDATE_USER_SUCCESS,
                        user: res,
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

export const changeUserPassword: AppThunk = (data: IUserChangePassword) => {
    return function (dispatch) {
        dispatch({
            type: USER_UPDATE_PASSWORD_REQUEST,
        })
        changePasswordAPI(data)
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
