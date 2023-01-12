import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../actions/ingredients'
import { IngredientsActions, IngredientsState } from '../../types/ingredientsActions'

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientsReducer = (state: IngredientsState = initialState, action: IngredientsActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_FAILED: {
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
