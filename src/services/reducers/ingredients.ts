import { IngredientsActions, IngredientsState } from '../../types/ingredientsActions'
import { getIngredientsActions } from '../actions/ingredients'

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientsReducer = (state: IngredientsState = initialState, action: IngredientsActions) => {
  switch (action.type) {
    case getIngredientsActions.GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      }
    }
    case getIngredientsActions.GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        ingredientsRequest: false,
        ingredientsFailed: false,
      }
    }
    case getIngredientsActions.GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      }
    }
    default: {
      return state
    }
  }
}
