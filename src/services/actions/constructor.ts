import { v4 as uuidv4 } from 'uuid'
import { Ingredients } from '../../types/data'
import { TApplicationActions } from '../../types/reducerActions'

export enum constructorActions {
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  RESET_INGREDIENTS = 'RESET_INGREDIENTS',
  ADD_INGREDIENTS_TO_CONSTRUCTOR = 'ADD_INGREDIENTS_TO_CONSTRUCTOR',
  MOVE_CARD = 'MOVE_CARD',
}

export const addToConstructor = (ingredient: Ingredients): TApplicationActions => {
  return {
    type: constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR,
    item: {
      ...ingredient,
      id: uuidv4(),
    },
  }
}
