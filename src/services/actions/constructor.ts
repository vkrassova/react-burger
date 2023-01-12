import { v4 as uuidv4 } from 'uuid'
import { Ingredients } from '../../types/data'
import { TApplicationActions } from '../../types/reducerActions'

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS'
export const ADD_INGREDIENTS_TO_CONSTRUCTOR = 'ADD_INGREDIENTS_TO_CONSTRUCTOR'
export const MOVE_CARD = 'MOVE_CARD'

export const addToConstructor = (ingredient: Ingredients): TApplicationActions => {
  return {
    type: ADD_INGREDIENTS_TO_CONSTRUCTOR,
    item: {
      ...ingredient,
      id: uuidv4(),
    },
  }
}
