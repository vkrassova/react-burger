export interface UserModel {
  email: string
  password?: string
  name?: string
  code?: string
}

export interface UserResponse {
  success: boolean
  user: UserModel
}

export type LoginResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
  user: UserModel
}

