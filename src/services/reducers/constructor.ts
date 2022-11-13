import { DELETE_INGREDIENT, RESET_INGREDIENTS, ADD_INGREDIENTS_TO_CONSTRUCTOR, MOVE_CARD } from '../actions/constructor'

import { Ingredients } from '../../types/data'

type AddIngredientAction = {
  type: 'ADD_INGREDIENT'
  ingredientsList: Ingredients[]
}

type AddIngredientToConstructorAction = {
  type: 'ADD_INGREDIENTS_TO_CONSTRUCTOR'
  item: Ingredients
}

type MoveCardAction = {
  type: 'MOVE_CARD'
  dragIndex: number
  hoverIndex: number
}

type ConstructorBaseAction = {
  id: string | undefined
  type: 'RESET_INGREDIENTS' | 'DELETE_INGREDIENT'
}

type ConstructorState = {
  ingredientsList: Ingredients[]
}

export type ConstructorActions =
  | AddIngredientAction
  | ConstructorBaseAction
  | AddIngredientToConstructorAction
  | MoveCardAction

const initialState = {
  ingredientsList: [],
}

export const constructorReducer = (state: ConstructorState = initialState, action: ConstructorActions) => {
  switch (action.type) {
    case ADD_INGREDIENTS_TO_CONSTRUCTOR: {
      return {
        ...state,
        ingredientsList: [...state.ingredientsList, action.item],
      }
    }
    case MOVE_CARD: {
      const dragCards = [...state.ingredientsList]
      dragCards.splice(action.hoverIndex, 0, dragCards.splice(action.dragIndex, 1)[0])
      return {
        ...state,
        ingredientsList: dragCards,
      }
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredientsList: [...state.ingredientsList.filter((el) => el.id !== action.id)],
      }
    }
    case RESET_INGREDIENTS: {
      return {
        ...state,
        ingredientsList: [],
      }
    }

    default: {
      return state
    }
  }
}
