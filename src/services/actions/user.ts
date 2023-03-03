import {AppDispatch, AppThunk} from '../index'
import {UserModel} from '../../types/responses'
import {UserRequestsActions} from '../../types/user'
import {
    forgotPasswordRequest,
    getUserRequest,
    login,
    logOut,
    patchUserRequest,
    refreshTokenRequest,
    resetPasswordRequest,
    userRegisterRequest,
} from '../../utils/api'
import {
    forgotPasswordActions,
    loginActions,
    logoutActions,
    postUserActions,
    registerActions,
    resetPasswordActions,
    updateTokenActions,
    userActions
} from '../constants/user'

export const getUserRequestActions = (): UserRequestsActions => ({
    type: userActions.GET_USER_REQUEST
})

export const getUserFailedAction = (): UserRequestsActions => ({
    type: userActions.GET_USER_FAILED,
})

export const getUserSuccessAction = (payload: UserModel): UserRequestsActions => ({
    type: userActions.GET_USER_SUCCESS,
    payload,
})

export const loginRequestActions = (): UserRequestsActions => ({
    type: loginActions.LOGIN_REQUEST,
})

export const loginFailedActions = (): UserRequestsActions => ({
    type: loginActions.LOGIN_FAILED,
})

export const loginSuccessAction = (payload: UserModel): UserRequestsActions => ({
    type: loginActions.LOGIN_SUCCESS,
    payload,
})

export const logoutRequestActions = (): UserRequestsActions => {
    return {
        type: logoutActions.LOGOUT_REQUEST,
    }
}

export const logoutFailedActions = (): UserRequestsActions => ({
    type: logoutActions.LOGOUT_FAILED,
})

export const logoutSuccessAction = (): UserRequestsActions => ({
    type: logoutActions.LOGOUT_SUCCESS,
})

export const registerRequestAction = (): UserRequestsActions => ({
    type: registerActions.REGISTER_REQUEST,
})

export const registerFailedAction = (): UserRequestsActions => ({
    type: registerActions.REGISTER_FAILED,
})

export const registerSuccessAction = (payload: UserModel): UserRequestsActions => ({
    type: registerActions.REGISTER_SUCCESS,
    payload,
})

export const resetPasswordRequestAction = (): UserRequestsActions => ({
    type: resetPasswordActions.RESET_PASSWORD_REQUEST,
})

export const resetPasswordFailedAction = (): UserRequestsActions => ({
    type: resetPasswordActions.RESET_PASSWORD_FAILED,
})

export const resetPasswordSuccessAction = (payload: UserModel): UserRequestsActions => {
    return {
        type: resetPasswordActions.RESET_PASSWORD_SUCCESS,
        payload,
    }
}

export const forgotPasswordRequestAction = (): UserRequestsActions => {
    return {
        type: forgotPasswordActions.FORGOT_PASSWORD_REQUEST,
    }
}

export const forgotPasswordFailedAction = (): UserRequestsActions => {
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

export const updateTokenRequestAction = (): UserRequestsActions => {
    return {
        type: updateTokenActions.UPDATE_TOKEN_REQUEST,
    }
}

export const updateTokenFailedAction = (): UserRequestsActions => {
    return {
        type: updateTokenActions.UPDATE_TOKEN_FAILED,
    }
}

export const postUserSuccessAction = (payload: UserModel): UserRequestsActions => {
    return {
        type: postUserActions.POST_USER_SUCCESS,
        payload,
    }
}

export const postUserRequestAction = (): UserRequestsActions => {
    return {
        type: postUserActions.POST_USER_REQUEST,
    }
}

export const postUserFailedAction = (): UserRequestsActions => {
    return {
        type: postUserActions.POST_USER_FAILED,
    }
}


const refreshToken =
    (afterRefresh: AppThunk): AppThunk =>
        (dispatch: AppDispatch) => {
            dispatch(updateTokenRequestAction())
            return refreshTokenRequest()
                .then((res) => {
                    if (res && res.success) {
                        dispatch(getUserRequestActions())

                        dispatch(afterRefresh)

                        localStorage.setItem('refreshToken', res.refreshToken)
                        localStorage.setItem('accessToken', res.accessToken)
                    } else {
                        dispatch(updateTokenFailedAction())

                        localStorage.removeItem('refreshToken')
                    }
                })
                .catch(() => {
                    dispatch(updateTokenFailedAction())
                })
        }

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequestActions())
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
        dispatch(getUserFailedAction())
      }
    })
}

export const signIn = (user: UserModel) => (dispatch: AppDispatch) => {
    dispatch(loginRequestActions())
    return login(user)
        .then((res) => {
            if (res && res.success) {
                dispatch(loginSuccessAction(res.user))

                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch(loginRequestActions())
            }

            return res
        })
        .catch(() => {
            dispatch(loginFailedActions())
        })
}

export const signUp = (user: UserModel) => (dispatch: AppDispatch) => {
    dispatch(registerRequestAction())
    return userRegisterRequest(user)
        .then((res) => {
            if (res && res.success) {
                dispatch(registerSuccessAction(res.user))
                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch(registerFailedAction())
            }
        })
        .catch(() => {
            dispatch(registerFailedAction())
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
    dispatch(postUserRequestAction())

    return patchUserRequest(user)
        .then((res) => {
            if (res && res.success) {
                dispatch(postUserSuccessAction(res.user))
            } else {
                dispatch(postUserFailedAction())
            }
        })
        .catch(() => {
            dispatch(postUserFailedAction())
        })
}

export const signOut = () => (dispatch: AppDispatch) => {
    dispatch(logoutRequestActions())

    return logOut()
        .then((res) => {
            if (res && res.success) {
                dispatch(logoutSuccessAction())

                localStorage.removeItem('refreshToken')
                localStorage.removeItem('accessToken')
            } else {
                dispatch(logoutFailedActions())
            }

            return res
        })
        .catch(() => {
            dispatch(logoutFailedActions())
        })
}
