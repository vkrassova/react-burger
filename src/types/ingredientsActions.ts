import { Ingredients } from './data'

type IngredientsSuccessAction = {
  type: 'GET_INGREDIENTS_SUCCESS'
  ingredients: Ingredients[]
}

type IngredientsBaseAction = {
  type: 'GET_INGREDIENTS_REQUEST' | 'GET_INGREDIENTS_FAILED'
}

export type IngredientsState = {
  ingredients: Ingredients[]
  ingredientsRequest: boolean
  ingredientsFailed: boolean
}

export type IngredientsActions = IngredientsBaseAction | IngredientsSuccessAction
