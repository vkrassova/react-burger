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
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/user'

import { UserModel } from '../../types/responses'

export type GetUserActions = {
  type: 'GET_USER_REQUEST' | 'GET_USER_FAILED' | 'GET_USER_SUCCESS'
  payload?: UserModel
}

export type LoginActions = {
  type: 'LOGIN_REQUEST' | 'LOGIN_SUCCESS' | 'LOGIN_FAILED'
  payload?: UserModel
}

export type SignUpActions = {
  type: 'REGISTER_REQUEST' | 'REGISTER_SUCCESS' | 'REGISTER_FAILED'
  payload?: UserModel
}

export type UserRequestsActions = GetUserActions | LoginActions | SignUpActions

type UserRequestState = {
  user: null | UserModel
  request: boolean
  success: boolean
  error: boolean
  isAuth: boolean
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
        error: false,
      }
    }
    case 'GET_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      }
    }
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        request: true,
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        success: true,
        isAuth: true,
        user: action.payload,
      }
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        success: false,
        error: true,
      }
    }
    case 'REGISTER_REQUEST': {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case 'REGISTER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
        request: false,
        success: true,
        error: false,
      }
    }
    case 'REGISTER_FAILED': {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}
