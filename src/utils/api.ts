import { BASE_URL } from '../constants'
import { checkResponse } from './utils'
import { UserModel, UserResponse, FormResponse, LoginResponse} from '../types/responses'

const checkSuccess = <T extends { success: boolean }>(data: T): T | Promise<T> => {
  return data.success ? data : Promise.reject(data);
};


export const userRegisterRequest = (user: UserModel) => {
  return fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  }).then(checkResponse)
}

export const login = async (body: string): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body
  })

  const data = await checkResponse(response)
  return checkSuccess<LoginResponse>(data)
}

export const logOut = () => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
  }).then(checkResponse)
}

export const refreshToken = () => {
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
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${localStorage.getItem('accessToken')}`,
    },
  }).then(checkResponse)
}

export const patchUser = (form: string) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(form),
  }).then(checkResponse)
}
