import { UserRequestsActions, UserRequestState } from '../../types/user'
import {
  forgotPasswordActions,
  loginActions,
  logoutActions,
  postUserActions,
  registerActions,
  resetPasswordActions,
  updateTokenActions,
  userActions,
} from '../constants'

const initialState = {
  user: null,
  request: false,
  error: false,
  isResetPassword: false,
  userRequest: false,
}

export const userReducer = (state: UserRequestState = initialState, action: UserRequestsActions) => {
  switch (action.type) {
    case userActions.GET_USER_REQUEST: {
      return {
        ...state,
        request: true,
        userRequest: true,
        error: false,
      }
    }
    case userActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        userRequest: false,
      }
    }
    case userActions.GET_USER_FAILED: {
      return {
        ...state,
        error: true,
        userRequest: false,
      }
    }
    case loginActions.LOGIN_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case loginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        isAuth: true,
        user: action.payload,
      }
    }
    case loginActions.LOGIN_FAILED: {
      return {
        ...state,
        error: true,
      }
    }
    case registerActions.REGISTER_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case registerActions.REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        request: false,
        error: false,
      }
    }
    case registerActions.REGISTER_FAILED: {
      return {
        ...state,
        request: false,
        error: true,
      }
    }
    case resetPasswordActions.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case resetPasswordActions.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: action.payload,
      }
    }
    case resetPasswordActions.RESET_PASSWORD_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case forgotPasswordActions.FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        request: true,
        error: false,
      }
    }
    case forgotPasswordActions.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        isResetPassword: true,
        user: action.payload,
      }
    }
    case forgotPasswordActions.FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
        isResetPassword: false,
      }
    }
    case updateTokenActions.UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case updateTokenActions.UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case postUserActions.POST_USER_REQUEST: {
      return {
        ...state,
        request: true,
      }
    }
    case postUserActions.POST_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        request: false,
      }
    }
    case postUserActions.POST_USER_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    case logoutActions.LOGOUT_REQUEST: {
      return {
        ...state,
        error: false,
        request: true,
      }
    }
    case logoutActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        request: false,
        error: false,
        user: null,
      }
    }

    case logoutActions.LOGOUT_FAILED: {
      return {
        ...state,
        error: true,
        request: false,
      }
    }
    default: {
      return state
    }
  }
}
