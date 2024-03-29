import { ConstructorActions, ConstructorState } from '../../types/constructorActions'
import { constructorActions } from '../constants'

export const initialState = {
  bun: null,
  ingredientsList: [],
}

export const constructorReducer = (state: ConstructorState = initialState, action: ConstructorActions) => {
  switch (action.type) {
    case constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR: {
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
    case constructorActions.MOVE_CARD: {
      const dragCards = [...state.ingredientsList]
      dragCards.splice(action.hoverIndex, 0, dragCards.splice(action.dragIndex, 1)[0])
      return {
        ...state,
        ingredientsList: dragCards,
      }
    }

    case constructorActions.DELETE_INGREDIENT: {
      return {
        ...state,
        ingredientsList: [...state.ingredientsList.filter((el) => el.id !== action.id)],
      }
    }
    case constructorActions.RESET_INGREDIENTS: {
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
