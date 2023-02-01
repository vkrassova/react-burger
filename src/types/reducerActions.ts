import { ConstructorActions } from './constructorActions'
import { IngredientsActions } from './ingredientsActions'
import { ModalBaseAction } from './modalActions'
import { OrderActions } from './order'
import { UserRequestsActions } from './user'
import { WSActions } from './wsActions'

export type TApplicationActions =
  | ConstructorActions
  | IngredientsActions
  | ModalBaseAction
  | OrderActions
  | UserRequestsActions
  | WSActions
