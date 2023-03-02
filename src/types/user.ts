import {UserModel} from './responses'
import {
    forgotPasswordActions,
    loginActions, logoutActions, postUserActions,
    registerActions,
    resetPasswordActions, updateTokenActions,
    userActions
} from '../services/constants/user';

interface GetUserRequestActions {
    readonly type: userActions.GET_USER_REQUEST
}

interface GetUserSuccessActions {
    readonly type: userActions.GET_USER_SUCCESS
    payload: UserModel
}

interface GetUserFailedActions {
    readonly type: userActions.GET_USER_FAILED
}

interface LoginSuccessAction {
    readonly type: loginActions.LOGIN_SUCCESS
    payload: UserModel
}

interface LoginFailedAction {
    readonly type: loginActions.LOGIN_FAILED
}

interface LoginRequestActions {
    readonly type: loginActions.LOGIN_REQUEST
}

interface RegisterRequestActions {
    readonly type: registerActions.REGISTER_REQUEST
}

interface RegisterSuccessActions {
    readonly type: registerActions.REGISTER_SUCCESS
    payload: UserModel
}

interface RegisterFailedActions {
    readonly type: registerActions.REGISTER_FAILED
}

interface ResetPasswordRequestActions {
    readonly type: resetPasswordActions.RESET_PASSWORD_REQUEST
}

interface ResetPasswordSuccessActions {
    readonly type: resetPasswordActions.RESET_PASSWORD_SUCCESS
    payload: UserModel
}

interface ResetPasswordFailedActions {
    readonly type: resetPasswordActions.RESET_PASSWORD_FAILED
}

interface ForgotPasswordRequestActions {
    readonly type: forgotPasswordActions.FORGOT_PASSWORD_REQUEST
}

interface ForgotPasswordSuccessActions {
    readonly type: forgotPasswordActions.FORGOT_PASSWORD_SUCCESS
    payload: UserModel
}

interface ForgotPasswordFailedActions {
    readonly type: forgotPasswordActions.FORGOT_PASSWORD_FAILED
}

interface UpdateTokenRequestAction {
    readonly type: updateTokenActions.UPDATE_TOKEN_REQUEST
}

interface UpdateTokenFailedAction {
    readonly type: updateTokenActions.UPDATE_TOKEN_FAILED
}

interface PostUserRequestActions {
    readonly type: postUserActions.POST_USER_REQUEST
}

interface PostUserSuccessActions {
    readonly type: postUserActions.POST_USER_SUCCESS
    payload: UserModel
}

interface PostUserFailedActions {
    readonly type: postUserActions.POST_USER_FAILED
}

interface UserLogoutRequestActions {
    readonly type: logoutActions.LOGOUT_REQUEST
}

interface UserLogoutSuccessActions {
    readonly type: logoutActions.LOGOUT_SUCCESS
}

interface UserLogoutFailedActions {
    readonly type: logoutActions.LOGOUT_FAILED
}

export type UserRequestsActions =
    | GetUserRequestActions
    | GetUserSuccessActions
    | GetUserFailedActions
    | LoginRequestActions
    | LoginFailedAction
    | LoginSuccessAction
    | RegisterRequestActions
    | RegisterFailedActions
    | RegisterSuccessActions
    | ResetPasswordRequestActions
    | ResetPasswordSuccessActions
    | ResetPasswordFailedActions
    | ForgotPasswordRequestActions
    | ForgotPasswordSuccessActions
    | ForgotPasswordFailedActions
    | PostUserRequestActions
    | PostUserSuccessActions
    | PostUserFailedActions
    | UpdateTokenRequestAction
    | UpdateTokenFailedAction
    | UserLogoutRequestActions
    | UserLogoutSuccessActions
    | UserLogoutFailedActions

export type UserRequestState = {
    user: null | UserModel
    request: boolean
    error: boolean
    isAuth: boolean
    isResetPassword: boolean
    userRequest: boolean
}
