import {AppDispatch, AppThunk} from '../index'
import {getUserRequest, login} from '../../utils/api'
import {UserModel} from '../../types/responses';

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'

//получаем данные о пользователе
export const getUser = (): AppThunk => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: GET_USER_REQUEST,
        })
        return getUserRequest()
            .then(res => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: res.user
                })
            })
            .catch((err) => {
                console.log(err)
                if (err.message === 'jwt expired') {
                    console.log(111)
                } else {
                    dispatch({
                        type: GET_USER_FAILED
                    })
                }
            })
    }
}

//Авторизация пользователя
export const signIn = (user: string): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        login(user)
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.user
                    })

                    localStorage.setItem('refreshToken', res.refreshToken);
                    localStorage.setItem('accessToken', res.accessToken);
                } else {
                    dispatch({
                        type: LOGIN_FAILED
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}