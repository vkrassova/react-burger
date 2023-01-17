import { UserModel } from './responses'
import {
  forgotPasswordActions,
  loginActions,
  postUserActions,
  registerActions,
  resetPasswordActions,
  updateTokenActions,
  userActions,
  logoutActions,
} from '../constants'

export const getUserRequestActions = () => {
  return {
    type: userActions.GET_USER_REQUEST,
  }
}

export const getUserFailedAction = () => {
  return {
    type: userActions.GET_USER_FAILED,
  }
}

export const getUserSuccessAction = (payload: UserModel) => {
  return {
    type: userActions.GET_USER_SUCCESS,
    payload,
  }
}

export const loginRequestActions = () => {
  return {
    type: loginActions.LOGIN_REQUEST,
  }
}

export const loginFailedActions = () => {
  return {
    type: loginActions.LOGIN_FAILED,
  }
}

export const loginSuccessAction = (payload: UserModel) => {
  return {
    type: loginActions.LOGIN_SUCCESS,
    payload,
  }
}

export const logoutRequestActions = () => {
  return {
    type: logoutActions.LOGOUT_REQUEST,
  }
}

export const logoutFailedActions = () => {
  return {
    type: logoutActions.LOGOUT_FAILED,
  }
}

export const logoutSuccessAction = () => {
  return {
    type: logoutActions.LOGOUT_SUCCESS,
  }
}

export const registerRequestAction = () => {
  return {
    type: registerActions.REGISTER_REQUEST,
  }
}

export const registerFailedAction = () => {
  return {
    type: registerActions.REGISTER_FAILED,
  }
}

export const registerSuccessAction = (payload: UserModel) => {
  return {
    type: registerActions.REGISTER_SUCCESS,
    payload,
  }
}

export const resetPasswordRequestAction = () => {
  return {
    type: resetPasswordActions.RESET_PASSWORD_REQUEST,
  }
}

export const resetPasswordFailedAction = () => {
  return {
    type: resetPasswordActions.RESET_PASSWORD_FAILED,
  }
}

export const resetPasswordSuccessAction = (payload: UserModel) => {
  return {
    type: resetPasswordActions.RESET_PASSWORD_SUCCESS,
    payload,
  }
}

export const forgotPasswordRequestAction = () => {
  return {
    type: forgotPasswordActions.FORGOT_PASSWORD_REQUEST,
  }
}

export const forgotPasswordFailedAction = () => {
  return {
    type: forgotPasswordActions.FORGOT_PASSWORD_FAILED,
  }
}

export const forgotPasswordSuccessAction = (payload: UserModel) => {
  return {
    type: forgotPasswordActions.FORGOT_PASSWORD_SUCCESS,
    payload,
  }
}

export const updateTokenRequestAction = () => {
  return {
    type: updateTokenActions.UPDATE_TOKEN_REQUEST,
  }
}

export const updateTokenFailedAction = () => {
  return {
    type: updateTokenActions.UPDATE_TOKEN_FAILED,
  }
}

export const postUserSuccessAction = (payload: UserModel) => {
  return {
    type: postUserActions.POST_USER_SUCCESS,
    payload,
  }
}

export const postUserRequestAction = () => {
  return {
    type: postUserActions.POST_USER_REQUEST,
  }
}

export const postUserFailedAction = () => {
  return {
    type: postUserActions.POST_USER_FAILED,
  }
}

interface GetUserRequestActions {
  readonly type: userActions
  payload: UserModel
}

interface LoginRequestActions {
  readonly type: loginActions
  payload: UserModel
}

interface RegisterRequestActions {
  readonly type: registerActions
  payload: UserModel
}

interface ResetPasswordRequestActions {
  readonly type: resetPasswordActions
  payload: UserModel
}

interface ForgotPasswordRequestActions {
  readonly type: forgotPasswordActions
  payload: UserModel
}

interface UpdateTokenRequestAction {
  readonly type: updateTokenActions
}

interface postRequestActions {
  readonly type: postUserActions
  payload: UserModel
}

interface UserLogoutActions {
  readonly type: logoutActions
}

export type UserRequestsActions =
  | GetUserRequestActions
  | LoginRequestActions
  | RegisterRequestActions
  | ResetPasswordRequestActions
  | ForgotPasswordRequestActions
  | postRequestActions
  | UpdateTokenRequestAction
  | UserLogoutActions

export type UserRequestState = {
  user: null | UserModel
  request: boolean
  error: boolean
  isAuth: boolean
  isResetPassword: boolean
  userRequest: boolean
}
