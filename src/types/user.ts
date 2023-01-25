import { UserModel } from './responses'
import {
  forgotPasswordActions,
  loginActions,
  logoutActions,
  postUserActions,
  registerActions,
  resetPasswordActions,
  updateTokenActions,
  userActions,
} from '../services/actions/user'

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
