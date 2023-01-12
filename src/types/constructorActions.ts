import { Ingredients } from './data'

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

export type ConstructorState = {
  bun: null | Ingredients
  ingredientsList: Ingredients[]
}

export type ConstructorActions =
  | ConstructorBaseAction
  | AddIngredientToConstructorAction
  | MoveCardAction
  | ResetIngredients
