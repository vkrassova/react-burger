import {
    GET_USER_REQUEST,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    UPDATE_TOKEN_FAILED,
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS,
} from '../actions/user'

import {UserModel} from '../../types/responses'

export type UserRequestsActions = {
    type: 'GET_USER_REQUEST' | 'GET_USER_FAILED' | 'GET_USER_SUCCESS' | 'LOGIN_REQUEST' | 'LOGIN_SUCCESS' | 'LOGIN_FAILED'
    payload?: UserModel
}

type UserRequestState = {
    user: null | UserModel,
    request: boolean,
    success: boolean,
    error: boolean,
    isAuth: boolean,
}

const initialState = {
    user: null,
    request: false,
    success: false,
    error: false,
    isAuth: false,
}

export const userReducer = (state: UserRequestState = initialState, action: UserRequestsActions) => {
    switch (action.type) {
        case 'GET_USER_REQUEST': {
            return {
                ...state,
                request: true,
            }
        }
        case 'GET_USER_SUCCESS': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'LOGIN_REQUEST': {
            return {
                ...state,
                request: true
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                success: true,
                isAuth: true,
                user: action.payload
            }
        }
        case 'LOGIN_FAILED': {
            return {
                ...state,
                success: false,
                isAuth: false,
                error: true
            }
        }
        default: {
            return state
        }
    }
}