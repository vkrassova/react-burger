import { UserModel } from './responses'

export enum userActions {
  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILED = 'GET_USER_FAILED',
}

export enum loginActions {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_FAILED = 'LOGIN_FAILED',
}

export enum registerActions {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILED = 'REGISTER_FAILED',
}

export enum resetPasswordActions {
  RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED',
}

export const getUserRequestActions = () => {
  return {
    type: userActions.GET_USER_FAILED || userActions.GET_USER_REQUEST,
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

interface ForgotPasswordSuccessActions {
  readonly type: 'FORGOT_PASSWORD_SUCCESS'
  payload: UserModel
}

interface ForgotPasswordRequestActions {
  readonly type: 'FORGOT_PASSWORD_REQUEST' | 'FORGOT_PASSWORD_FAILED'
}

interface UpdateTokenRequestAction {
  readonly type: 'UPDATE_TOKEN_REQUEST' | 'UPDATE_TOKEN_FAILED'
}

interface UpdateTokenSuccessAction {
  readonly type: 'UPDATE_TOKEN_SUCCESS'
}

interface UserEditRequestActions {
  readonly type: 'POST_USER_REQUEST' | 'POST_USER_ERROR'
}

interface UserEditSuccessActions {
  readonly type: 'POST_USER_SUCCESS'
  payload: UserModel
}

interface UserLogoutActions {
  readonly type: 'LOGOUT_REQUEST' | 'LOGOUT_FAILED' | 'LOGOUT_SUCCESS'
}

export type UserRequestsActions =
  | GetUserRequestActions
  | LoginRequestActions
  | RegisterRequestActions
  | ResetPasswordRequestActions
  | ForgotPasswordRequestActions
  | ForgotPasswordSuccessActions
  | UpdateTokenRequestAction
  | UpdateTokenSuccessAction
  | UserEditRequestActions
  | UserEditSuccessActions
  | UserLogoutActions

export type UserRequestState = {
  user: null | UserModel
  request: boolean
  error: boolean
  isAuth: boolean
  isResetPassword: boolean
  userRequest: boolean
}
