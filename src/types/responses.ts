import { Ingredients } from './data'

export interface UserModel {
  email: string | undefined
  password?: string | undefined
  name?: string | undefined
  code?: string | undefined
}

export interface UserResponse {
  success: boolean
  user: UserModel
  accessToken: string
  refreshToken: string
}

export interface IngredientsResponse {
  success: boolean
  data: Ingredients[]
}

export interface OrderNumber {
  number: number | undefined
}

export interface OrderResponse {
  order: OrderNumber
  success: boolean
}
