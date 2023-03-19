import { ConstructorActions } from './constructorActions'
import { IngredientsActions } from './ingredientsActions'
import { OrderActions } from './order'
import { UserRequestsActions } from './user'
import { WSActions } from './wsActions'

export type TApplicationActions =
  | ConstructorActions
  | IngredientsActions
  | OrderActions
  | UserRequestsActions
  | WSActions
