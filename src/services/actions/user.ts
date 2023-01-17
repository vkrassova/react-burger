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

import {
  getUserRequestActions,
  getUserFailedAction,
  getUserSuccessAction,
  loginRequestActions,
  loginSuccessAction,
  loginFailedActions,
  registerFailedAction,
  registerRequestAction,
  registerSuccessAction,
  resetPasswordSuccessAction,
  resetPasswordFailedAction,
  resetPasswordRequestAction,
  forgotPasswordRequestAction,
  forgotPasswordSuccessAction,
  forgotPasswordFailedAction,
  updateTokenRequestAction,
  updateTokenFailedAction,
  postUserRequestAction,
  postUserSuccessAction,
  postUserFailedAction,
  logoutRequestActions,
  logoutFailedActions,
  logoutSuccessAction,
} from '../../types/user'

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
