import { v4 as uuidv4 } from 'uuid'
import { Ingredients } from '../../types/data'
import { TApplicationActions } from '../../types/reducerActions'
import { constructorActions } from '../constants'

export const addToConstructor = (ingredient: Ingredients): TApplicationActions => ({
  type: constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR,
  item: {
    ...ingredient,
    id: uuidv4(),
  },
})
