export interface UserModel {
  email: string
  password?: string
  name?: string
  code?: string
}

export type LoginResponse = {
  success: boolean
  accessToken: string
  refreshToken: string
  user: UserModel
}

export interface UserResponse  extends LoginResponse{
  success: boolean
  user: UserModel
}

