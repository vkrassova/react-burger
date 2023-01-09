export interface UserModel {
  email: string | undefined
  password?: string | undefined
  name?: string | undefined
  code?: string | undefined
}

export type LoginResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
  user: UserModel
}

export interface UserResponse extends LoginResponse {
  success: boolean
  user: UserModel
}
