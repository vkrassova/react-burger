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
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
} from '../actions/user'
import { UserRequestsActions, UserRequestState } from '../../types/user'

const initialState = {
  user: null,
  request: false,
  error: false,
  isAuth: false,
  isResetPassword: false,
  userRequest: false,
}

export const userReducer = (state: UserRequestState = initialState, action: UserRequestsActions) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        request: true,
        userRequest: true,
        error: false,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        userRequest: false,
        isAuth: true,
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        error: true,
        userRequest: false,
        isAuth: false,
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        isAuth: true,
        user: action.payload,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        error: true,
      }
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        request: false,
        error: false,
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.payload,
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        isResetPassword: true,
        user: action.payload,
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
        isResetPassword: false,
      }
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
      }
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case POST_USER_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case POST_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        request: false,
      }
    }
    case POST_USER_ERROR: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        error: false,
        request: true,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        isAuth: false,
      }
    }

    case LOGOUT_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
        isAuth: true,
      }
    }
    default: {
      return state
    }
  }
}
