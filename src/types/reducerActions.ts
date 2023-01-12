import { ConstructorActions } from './constructorActions'
import { OrderActions } from '../services/reducers/order'
import { UserRequestsActions } from '../services/reducers/user'
import { IngredientsActions } from './ingredientsActions'
import { ModalBaseAction } from './modalActions'

export type TApplicationActions =
  | ConstructorActions
  | IngredientsActions
  | ModalBaseAction
  | OrderActions
  | UserRequestsActions
