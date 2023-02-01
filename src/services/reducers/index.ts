import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { orderReducer } from './order'
import { constructorReducer } from './constructor'
import { modalReducer } from './modal'
import { userReducer } from './user'
import { wsReducer } from './ws'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorList: constructorReducer,
  order: orderReducer,
  modal: modalReducer,
  user: userReducer,
  ws: wsReducer,
})
