import { Ingredients } from './data'
import {
  ADD_INGREDIENTS_TO_CONSTRUCTOR,
  MOVE_CARD,
  DELETE_INGREDIENT,
  RESET_INGREDIENTS,
} from '../services/actions/constructor'

type AddIngredientToConstructorAction = {
  readonly type: typeof ADD_INGREDIENTS_TO_CONSTRUCTOR
  item: Ingredients
}

type MoveCardAction = {
  readonly type: typeof MOVE_CARD
  dragIndex: number
  hoverIndex: number
}

type ConstructorBaseAction = {
  readonly type: typeof DELETE_INGREDIENT
  id: string | undefined
}

type ResetIngredients = {
  readonly type: typeof RESET_INGREDIENTS
}

export type ConstructorState = {
  bun: null | Ingredients
  ingredientsList: Ingredients[]
}

export type ConstructorActions =
  | ConstructorBaseAction
  | AddIngredientToConstructorAction
  | MoveCardAction
  | ResetIngredients
