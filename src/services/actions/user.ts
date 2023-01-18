import { AppDispatch, AppThunk } from '../index'
import { UserModel } from '../../types/responses'
import {
  getUserRequest,
  login,
  userRegisterRequest,
  resetPasswordRequest,
  refreshTokenRequest,
  forgotPasswordRequest,
  patchUserRequest,
  logOut,
} from '../../utils/api'

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

export enum forgotPasswordActions {
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',
}

export enum updateTokenActions {
  UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST',
  UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED',
}

export enum postUserActions {
  POST_USER_REQUEST = 'POST_USER_REQUEST',
  POST_USER_FAILED = 'POST_USER_FAILED',
  POST_USER_SUCCESS = 'POST_USER_SUCCESS',
}

export enum logoutActions {
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_FAILED = 'LOGOUT_FAILED',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
}

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

const refreshToken =
  (afterRefresh: AppThunk): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(updateTokenRequestAction)
    return refreshTokenRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch(getUserRequestActions)

          dispatch(afterRefresh)

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken)
        } else {
          dispatch(updateTokenFailedAction)

          localStorage.removeItem('refreshToken')
        }
      })
      .catch(() => {
        dispatch(updateTokenFailedAction)
      })
  }

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequestActions)
  return getUserRequest()
    .then((res) => {
      if (res && res.success) {
        dispatch(getUserSuccessAction(res.user))
      }
    })
    .catch((err) => {
      if (err.message === 'jwt expired') {
        dispatch(refreshToken(getUser()))
      } else {
        dispatch(getUserFailedAction)
      }
    })
}

export const signIn = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch(loginRequestActions)
  return login(user)
    .then((res) => {
      if (res && res.success) {
        dispatch(loginSuccessAction(res.user))

        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('accessToken', res.accessToken)
      } else {
        dispatch(loginRequestActions)
      }

      return res
    })
    .catch(() => {
      dispatch(loginFailedActions)
    })
}

export const signUp = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch(registerRequestAction)
  return userRegisterRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch(registerSuccessAction(res.user))
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('accessToken', res.accessToken)
      } else {
        dispatch(registerFailedAction)
      }
    })
    .catch(() => {
      dispatch(registerFailedAction)
    })
}

export const resetPassword = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch(resetPasswordRequestAction)

  return resetPasswordRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch(resetPasswordSuccessAction(res.user))
      } else {
        dispatch(resetPasswordFailedAction)
      }
    })
    .catch(() => {
      dispatch(resetPasswordFailedAction)
    })
}

export const forgotPassword = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch(forgotPasswordRequestAction)

  return forgotPasswordRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch(forgotPasswordSuccessAction(res.user))
      } else {
        dispatch(forgotPasswordFailedAction)
      }

      return res
    })
    .catch(() => {
      dispatch(forgotPasswordFailedAction)
    })
}

export const patchUser = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch(postUserRequestAction)

  return patchUserRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch(postUserSuccessAction(res.user))
      } else {
        dispatch(postUserFailedAction)
      }
    })
    .catch(() => {
      dispatch(postUserFailedAction)
    })
}

export const signOut = () => (dispatch: AppDispatch) => {
  dispatch(logoutRequestActions)

  return logOut()
    .then((res) => {
      if (res && res.success) {
        dispatch(logoutSuccessAction)

        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
      } else {
        dispatch(logoutFailedActions)
      }

      return res
    })
    .catch(() => {
      dispatch(logoutFailedActions)
    })
}
