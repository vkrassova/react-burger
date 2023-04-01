import { initialState, userReducer } from './user'
import { UserRequestsActions } from '../../types/user'
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
import { UserModel } from '../../types/responses'

const user: UserModel = {
  email: 'v.krassova@yandex.ru',
  name: 'User10100',
}

describe('Проверяет userReducer', () => {
  it('Проверка начального состояния', () => {
    expect(userReducer(undefined, {} as UserRequestsActions)).toEqual(initialState)
  })

  it('Проверка отправки запроса на получении информации о пользователе', () => {
    const action: UserRequestsActions = {
      type: userActions.GET_USER_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
      userRequest: true,
      error: false,
    })
  })

  it('Проверка получения данных о пользователе', () => {
    const action: UserRequestsActions = {
      type: userActions.GET_USER_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      userRequest: false,
    })
  })

  it('Проверка ошибки получения информации о пользователе', () => {
    const action: UserRequestsActions = {
      type: userActions.GET_USER_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      userRequest: false,
    })
  })

  it('Проверка отправки запроса на авторизацию пользователя', () => {
    const action: UserRequestsActions = {
      type: loginActions.LOGIN_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('Проверка успешной авторизации пользователя', () => {
    const action: UserRequestsActions = {
      type: loginActions.LOGIN_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      success: true,
      isAuth: true,
    })
  })

  it('Проверка ошибки авторизации пользователя', () => {
    const action: UserRequestsActions = {
      type: loginActions.LOGIN_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
    })
  })

  it('Проверка запроса на регистрацию пользователя', () => {
    const action: UserRequestsActions = {
      type: registerActions.REGISTER_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
      error: false,
    })
  })

  it('Проверка успешной регистрации пользователя', () => {
    const action: UserRequestsActions = {
      type: registerActions.REGISTER_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      request: false,
      error: false,
    })
  })

  it('Проверка ошибки в запросе на регистрацию пользователя', () => {
    const action: UserRequestsActions = {
      type: registerActions.REGISTER_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: false,
      error: true,
    })
  })

  it('Проверка запроса на сброс пароля', () => {
    const action: UserRequestsActions = {
      type: resetPasswordActions.RESET_PASSWORD_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
      error: false,
    })
  })

  it('Проверка успешного запроса на сброс пароля', () => {
    const action: UserRequestsActions = {
      type: resetPasswordActions.RESET_PASSWORD_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      request: false,
      error: false,
    })
  })

  it('Проверка ошибки запроса на сброс пароля', () => {
    const action: UserRequestsActions = {
      type: resetPasswordActions.RESET_PASSWORD_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      request: false,
    })
  })

  it('Проверка запроса на восстановление пароля', () => {
    const action: UserRequestsActions = {
      type: forgotPasswordActions.FORGOT_PASSWORD_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
      error: false,
    })
  })

  it('Проверка успешного запроса на восстановление пароля', () => {
    const action: UserRequestsActions = {
      type: forgotPasswordActions.FORGOT_PASSWORD_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      request: false,
      error: false,
      isResetPassword: true,
    })
  })

  it('Проверка ошибки запроса на восстановление пароля', () => {
    const action: UserRequestsActions = {
      type: forgotPasswordActions.FORGOT_PASSWORD_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      request: false,
      isResetPassword: false,
    })
  })

  it('Проверка отправки запроса на обновление токена', () => {
    const action: UserRequestsActions = {
      type: updateTokenActions.UPDATE_TOKEN_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('Проверка ошибки в отправке запроса на обновление токена', () => {
    const action: UserRequestsActions = {
      type: updateTokenActions.UPDATE_TOKEN_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      request: false,
    })
  })

  it('Проверка запроса на обновлении информации о пользователе', () => {
    const action: UserRequestsActions = {
      type: postUserActions.POST_USER_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('Проверка удачного выполнения обновления информации о пользователе', () => {
    const action: UserRequestsActions = {
      type: postUserActions.POST_USER_SUCCESS,
      payload: user,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      user,
      request: false,
    })
  })

  it('Проверка ошибки в обновлении информации о пользователе', () => {
    const action: UserRequestsActions = {
      type: postUserActions.POST_USER_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      request: false,
    })
  })

  it('Проверка проверка выполнения запроса на выход из системы', () => {
    const action: UserRequestsActions = {
      type: logoutActions.LOGOUT_REQUEST,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: false,
      request: true,
    })
  })

  it('Проверка удачного выполнения запроса на выход из системы', () => {
    const action: UserRequestsActions = {
      type: logoutActions.LOGOUT_SUCCESS,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      request: false,
      error: false,
      user: null,
    })
  })

  it('Проверка ошибки выполнения запроса на выход из системы', () => {
    const action: UserRequestsActions = {
      type: logoutActions.LOGOUT_FAILED,
    }

    const result = userReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      error: true,
      request: false,
    })
  })
})
