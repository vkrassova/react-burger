import { DELETE_INGREDIENT, RESET_INGREDIENTS, ADD_INGREDIENTS_TO_CONSTRUCTOR, MOVE_CARD } from '../actions/constructor'

import { Ingredients } from '../../types/data'

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
  type: 'DELETE_INGREDIENT'
  id: string | undefined
}

type ResetIngredients = {
  type: 'RESET_INGREDIENTS'
}

type ConstructorState = {
  bun: null | Ingredients
  ingredientsList: Ingredients[]
}

export type ConstructorActions =
  | ConstructorBaseAction
  | AddIngredientToConstructorAction
  | MoveCardAction
  | ResetIngredients

const initialState = {
  bun: null,
  ingredientsList: [],
}

export const constructorReducer = (state: ConstructorState = initialState, action: ConstructorActions) => {
  switch (action.type) {
    case ADD_INGREDIENTS_TO_CONSTRUCTOR: {
      if (action.item.type === 'bun') {
        return {
          ...state,
          bun: action.item,
        }
      }
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
        bun: null,
      }
    }

    default: {
      return state
    }
  }
}
