import { BASE_URL } from '../constants'
import { checkResponse } from './utils'
import { UserModel, UserResponse, LoginResponse } from '../types/responses'

export const userRegisterRequest = (user: UserModel): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  }).then(checkResponse)
}

export const login = (user: UserModel): Promise<LoginResponse> => {
  const raw = JSON.stringify({
    email: user.email,
    password: user.password,
  })
  return fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: raw,
  }).then(checkResponse)
}

export const logOut = (): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(checkResponse)
}

export const refreshTokenRequest = (): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(checkResponse)
}

export const getUserRequest = async (): Promise<UserResponse> => {
  return await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${localStorage.getItem('accessToken')}`,
    },
  }).then(checkResponse)
}

export const patchUserRequest = (user: UserModel): Promise<UserResponse> => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(user),
  }).then(checkResponse)
}

export const resetPasswordRequest = (user: UserModel) => {
  const raw = JSON.stringify({
    password: user.password,
    token: user.code,
  })

  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: raw,
  }).then(checkResponse)
}

export const forgotPasswordRequest = async (user: UserModel) => {
  const raw = JSON.stringify({
    email: user.email,
  })
  return await fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: raw,
  }).then(checkResponse)
}
