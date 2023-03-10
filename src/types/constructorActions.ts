import { Ingredients } from './data'
import {constructorActions} from '../services/constants'

type AddIngredientToConstructorAction = {
  readonly type: constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR
  item: Ingredients
}

type MoveCardAction = {
  readonly type: constructorActions.MOVE_CARD
  dragIndex: number
  hoverIndex: number
}

type ConstructorBaseAction = {
  readonly type: constructorActions.DELETE_INGREDIENT
  id: string | undefined
}

type ResetIngredients = {
  readonly type: constructorActions.RESET_INGREDIENTS
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
