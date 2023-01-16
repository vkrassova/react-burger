import { Ingredients } from './data'

type AddIngredientToConstructorAction = {
  readonly type: 'ADD_INGREDIENTS_TO_CONSTRUCTOR'
  item: Ingredients
}

type MoveCardAction = {
  readonly type: 'MOVE_CARD'
  dragIndex: number
  hoverIndex: number
}

type ConstructorBaseAction = {
  readonly type: 'DELETE_INGREDIENT'
  id: string | undefined
}

type ResetIngredients = {
  readonly type: 'RESET_INGREDIENTS'
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
