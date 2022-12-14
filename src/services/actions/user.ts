import { AppDispatch, AppThunk } from '../index'
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
import { UserModel } from '../../types/responses'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED'

export const POST_USER_REQUEST = 'POST_USER_REQUEST'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const POST_USER_ERROR = 'POST_USER_ERROR'

const refreshToken =
  (afterRefresh: AppThunk): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_TOKEN_REQUEST,
    })
    return refreshTokenRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_TOKEN_FAILED,
          })

          dispatch(afterRefresh)

          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken)
        } else {
          dispatch({
            type: UPDATE_TOKEN_FAILED,
          })

          localStorage.removeItem('refreshToken')
        }
      })
      .catch(() => {
        dispatch({
          type: UPDATE_TOKEN_FAILED,
        })
      })
  }

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  })
  return getUserRequest()
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.user,
        })
      }
    })
    .catch((err) => {
      if (err.message === 'jwt expired') {
        dispatch(refreshToken(getUser()))
      } else {
        dispatch({
          type: GET_USER_FAILED,
        })
      }
    })
}

export const signIn = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  })
  return login(user)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.user,
        })

        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('accessToken', res.accessToken)
      } else {
        dispatch({
          type: LOGIN_FAILED,
        })
      }

      return res
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAILED,
      })
    })
}

export const signUp = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  })
  return userRegisterRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.user,
        })
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('accessToken', res.accessToken)
      } else {
        dispatch({
          type: REGISTER_FAILED,
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAILED,
      })
    })
}

export const resetPassword = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST,
  })

  return resetPasswordRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: res.user,
        })
      } else {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        })
      }
    })
    .catch(() => {
      dispatch({
        type: RESET_PASSWORD_FAILED,
      })
    })
}

export const forgotPassword = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_REQUEST,
  })

  return forgotPasswordRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: res.user,
        })
      } else {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        })
      }

      return res
    })
    .catch(() => {
      dispatch({
        type: FORGOT_PASSWORD_FAILED,
      })
    })
}

export const patchUser = (user: UserModel) => (dispatch: AppDispatch) => {
  dispatch({
    type: POST_USER_REQUEST,
  })

  return patchUserRequest(user)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: POST_USER_SUCCESS,
          payload: res.user,
        })
      } else {
        dispatch({
          type: POST_USER_ERROR,
        })
      }
    })
    .catch(() => {
      dispatch({
        type: POST_USER_ERROR,
      })
    })
}

export const signOut = () => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  })

  return logOut()
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: LOGOUT_SUCCESS,
        })

        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
      } else {
        dispatch({
          type: LOGOUT_FAILED,
        })
      }

      return res
    })
    .catch(() => {
      dispatch({
        type: LOGOUT_FAILED,
      })
    })
}
