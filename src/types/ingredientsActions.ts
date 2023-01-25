import { Ingredients } from './data'

type IngredientsSuccessAction = {
  readonly type: 'GET_INGREDIENTS_SUCCESS'
  payload: Ingredients[]
}

type IngredientsBaseAction = {
  readonly type: 'GET_INGREDIENTS_REQUEST' | 'GET_INGREDIENTS_FAILED'
}

export type IngredientsState = {
  ingredients: Ingredients[]
  ingredientsRequest: boolean
  ingredientsFailed: boolean
}

export type IngredientsActions = IngredientsBaseAction | IngredientsSuccessAction
