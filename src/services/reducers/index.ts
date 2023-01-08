import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { orderReducer } from './order'
import { constructorReducer } from './constructor'
import { modalReducer } from './modal'
import { userReducer } from './user'
import { ConstructorActions } from './constructor'
import { IngredientsActions } from './ingredients'
import { ModalBaseAction } from './modal'
import { OrderActions } from './order'
import { UserRequestsActions } from './user'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorList: constructorReducer,
  order: orderReducer,
  modal: modalReducer,
  user: userReducer,
})

export type TApplicationActions =
  | ConstructorActions
  | IngredientsActions
  | ModalBaseAction
  | OrderActions
  | UserRequestsActions
