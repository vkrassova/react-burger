export interface Ingredients {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
  id?: string
  key?: number
  index?: number
}

export enum StatusCodes {
  created = 'created',
  pending = 'pending',
  done = 'done',
}

export interface Orders {
  ingredients: string[]
  _id: string
  status: StatusCodes
  number: number
  createdAt: string
  updatedAt: string
  name: string
}
