import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { orderReducer } from './order'
import { constructorReducer } from './constructor'
import { userReducer } from './user'
import { wsReducer } from './ws'
import { wsFeedReducer } from './feed-ws'
import { wsProfileReducer } from './profile-ws'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorList: constructorReducer,
  order: orderReducer,
  user: userReducer,
  ws: wsReducer,
  feedWS: wsFeedReducer,
  profileWS: wsProfileReducer,
})
