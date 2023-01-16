import { UserModel } from './responses'

interface GetUserRequestActions {
  readonly type: 'GET_USER_REQUEST' | 'GET_USER_FAILED'
}

interface GetUserSuccessActions {
  readonly type: 'GET_USER_SUCCESS'
  payload: UserModel
}

interface LoginSuccessActions {
  readonly type: 'LOGIN_SUCCESS'
  payload: UserModel
}

interface LoginRequestActions {
  readonly type: 'LOGIN_REQUEST' | 'LOGIN_FAILED'
}

interface SignUpSuccessActions {
  readonly type: 'REGISTER_SUCCESS'
  payload: UserModel
}

interface SignUpRequestActions {
  readonly type: 'REGISTER_REQUEST' | 'REGISTER_FAILED'
}

interface ResetPasswordSuccessActions {
  readonly type: 'RESET_PASSWORD_SUCCESS'
  payload: UserModel
}

interface ResetPasswordRequestActions {
  readonly type: 'RESET_PASSWORD_REQUEST' | 'RESET_PASSWORD_FAILED'
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
  | GetUserSuccessActions
  | LoginRequestActions
  | LoginSuccessActions
  | SignUpSuccessActions
  | SignUpRequestActions
  | ResetPasswordRequestActions
  | ResetPasswordSuccessActions
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
